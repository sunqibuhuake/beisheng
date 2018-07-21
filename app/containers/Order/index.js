/**
 * Created by sunqi on 2018/5/20.
 */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import PageSection from 'components/Section/PageSection'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import OverModal  from './OverModal'
import Card from 'components/Card'
import AddressCard from '../AddressCard'
import LgisticCard from './LgisticCard'
import PayCard from './PayCard'
import PaymentSelect from '../PaymentSelect'
import InvoiceCard from '../InvoiceCard'
import EnsureCard from './EnsureCard'

import DeliveryCard from '../DeliveryCard'
import EmptyOrder from '../../components/NavPage/EmptyOrder'
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {orderPay, changeSimpleValue} from '../App/actions'

import {makeSelectNormal, makeSelectValue} from '../App/selectors'
import {selectCoupon} from '../App/actions'

import './style.css'
import saga from './saga'

import helper from '../../utils/helper'

export class Order extends React.PureComponent {

  componentWillMount() {



    //const products = helper.getProducts();
    //if (!products) {
    //  this.props.history.push({
    //    pathname: '/orders/1'
    //  })
    //}
  }

  componentDidMount() {

    //helper.openNewLink('http://baidu.com');

    // todo 检测是否存有订单数据
  }

  pay() {

  }

  render() {

    const styles = {
      root: {

      }
    }

    const products = helper.getProducts();
    if (!products) {
      return (<EmptyOrder></EmptyOrder>)
    }


    return (
      <PageSection>
        <Card>
          <AddressCard mode="order"></AddressCard>
          <DeliveryCard></DeliveryCard>
          <PaymentSelect></PaymentSelect>
          <InvoiceCard mode="order"></InvoiceCard>
          <EnsureCard
            processing={this.props.processing}
            coupon={this.props.coupon}
            selectCoupon={this.props.selectCoupon}
            pay={this.props.pay}
          ></EnsureCard>
        </Card>
        <OverModal
          active={this.props.sn !== ''}
        ></OverModal>
      </PageSection>
    )


  }
}
Order.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    pay: () => dispatch(orderPay()),
    selectCoupon: (id, money) => dispatch(selectCoupon(id, money)),
    endOrder: (sn) => dispatch(changeSimpleValue('order.end'))
  };
}

const mapStateToProps = createStructuredSelector({
  coupon: makeSelectNormal('order.coupon'),
  sn: makeSelectValue('order.sn'),
  processing: makeSelectValue('order.processing')
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'order', saga });

export default compose(
  withSaga,
  withConnect
)(Order);


