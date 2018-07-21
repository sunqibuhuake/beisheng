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
} from './actions'

import {makeSelectCouponData, makeSelectCouponError, makeSelectCouponReady} from './selectors'

import reducer from './reducer';
import saga from './saga';

import Loading from '../../components/Loading'

import Card from '../../components/Card'

import CouponTab from '../../components/Coupon/CouponTab'

import './style.css'


export class CouponPage extends React.PureComponent {

  componentWillMount() {

  }

  componentDidMount() {

    this.props.loadData()

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
    } else if(error) {
      content = (<h3>请求出错</h3>)
    }else {
      content = (

        <CouponTab
          data={data}
        ></CouponTab>
      )
    }


    return (
      <div style={styles.root}>
        <PageSection
          mh={480}
        >
          <Card>
            <div style={{marginBottom: 24}}>
              <div style={styles.title}>
                我的优惠券
              </div>
            </div>
            <section style={{minHeight: 360}}>
              {content}
            </section>
          </Card>
        </PageSection>
      </div>
    );
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      return dispatch(getCouponList())
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


