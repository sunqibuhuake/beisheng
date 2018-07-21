/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom'
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectNormal,makeSelectRepos, makeSelectLoading, makeSelectError, makeSelectAccount } from '../App/selectors';
import reducer from './reducer';
import saga from './saga';

import {Row, Col} from 'antd'
import LandCardsList from './LandCardsList'
import COL5 from './COL5'
import SellerShow from './SellerShow'

import ConSec from 'components/ConSec'
import './style.css'

import OptionItem from '../OptionItem'

import ImageSlide from '../ImageSlider'

import SearchList from 'components/SearchList'
import ProductList from 'components/ProductList'

export class LandPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {

  }

  render() {

    const styles = {
      root: {
        background:'white',
        minHeight: '100%'
      },
      slides: {
        height: 'auto',
        width: '100%',
        margin: '0 auto',
      }
    }

    let coupon_tip = '';
    if (this.props.info.data && this.props.info.data.coupon_count > 0) {
      coupon_tip = (
        <Link to="/coupon">
          <p style={{textAlign: 'right',display:'none', color: '#4F89CB', fontSize: 14, marginBottom: 4}}>
            您有{this.props.info.data.coupon_count}张优惠劵未使用!
          </p>
        </Link>

      )
    }
    return (
      <div style={styles.root}>
        <section
          style={styles.slides}
        >
          <ImageSlide></ImageSlide>
        </section>

        <section style={{
          width: '78%',
          margin: '0 auto',
          paddingBottom: 54
        }}>


          <section style={{width: '100%'}}>
            {coupon_tip}
            <div style={{textAlign: 'center', padding: '48px 0',color: 'black', fontSize: 16, fontWeight: 'bold'}}>
              欢迎
            <span
              style={{
                color: 'white',
                background: '#A0A1A2',
                borderRadius: 4,
                margin: '0 4px',
                padding: '4px 0px'
              }}
            >
            【
              {this.props.account.data.user.email}
              】
          </span>
              ,全系列Apple产品任你挑选
            </div>
          </section>


          <LandCardsList></LandCardsList>


          <COL5></COL5>

          <SellerShow
            delivery={this.props.delivery}
          ></SellerShow>
        </section>
      </div>
    );
  }
}

LandPage.propTypes = {


};

export function mapDispatchToProps(dispatch) {
  return {

  };
}

const mapStateToProps = createStructuredSelector({
  account: makeSelectAccount(),
  info: makeSelectNormal('info'),
  delivery: makeSelectNormal('delivery')
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'land', reducer });
const withSaga = injectSaga({ key: 'land', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LandPage);
