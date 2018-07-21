/**
 * Created by sunqi on 2018/6/9.
 */
import React from 'react';
import PropTypes from 'prop-types';
import PageSection from '../../components/Section/PageSection'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';


import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  getCouponList,
getEnableCoupon
} from './actions'

import {makeSelectCouponData, makeSelectCouponError, makeSelectCouponReady} from './selectors'

import reducer from './reducer';
import saga from './saga';

import Loading from '../../components/Loading'

import Card from '../../components/Card'

import Header from '../../components/Card/Header'

import Coupon from '../../components/Coupon'
import './style.css'


export class CouponPage extends React.PureComponent {

  componentWillMount() {

  }

  componentDidMount() {

    this.props.loadData()

  }

  detectStatus(c) {
    if (this.props.coupon.id == c.id) {
      return 'active'
    }
    if (c.is_able_use) {
      return 'enable'
    } else {
      return 'disable'
    }
  }


  componentWillUnmount() {
  }


  render() {

    const {data,ready, error}  = this.props;
    const styles = {
      root: {
        background: '#F4F5F6',
        padding: '80px 0'
      },
      title: {
        height: 48,
        fontSize: 24,
        lineHeight: '48px',
        color: 'black',
      }
    }

    let content = null;
    if (!ready) {
      content = (
        <Loading></Loading>
      )
    } else if (error) {
      content = (<h3>请求出错</h3>)
    } else {
      content = this.props.data.map(c => {
        return (
          <Coupon
            key={Math.random()}
            onClick={this.props.selectCoupon}
            {...c}
            selectCoupon={this.props.selectCoupon}
            status={this.detectStatus(c)}
          ></Coupon>
        )
      })

      if (content.length == 0) {
        content = (
          <h3>暂无优惠券</h3>
        )
      }
    }


    return (
      <div className="mb12 bbl pb24" style={{display: 'block'}}>
        <Header
          borderBottom={false}
        >
          <span>使用优惠券</span>
        </Header>

        {content}

      </div>

    );
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      return dispatch(getEnableCoupon())
    }
  };
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectCouponData(),
  ready: makeSelectCouponReady(),
  error: makeSelectCouponError()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'coupon', reducer});
const withSaga = injectSaga({key: 'coupon', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CouponPage);


