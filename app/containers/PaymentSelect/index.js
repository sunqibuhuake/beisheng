/**
 * Created by sunqi on 2018/5/31.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga'
import './style.css'

import {
  changeSimpleValue,
  fetchListData,
  getPaymentData,
} from '../App/actions'
import {makeSelectNormal, makeSelectValue} from '../App/selectors'

import PaymentCard from './PaymentCard'
export class PaymentContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const {payment} = this.props;
    if (!payment.ready) {
      return (<span>加载中</span>)
    }

    return (
      <PaymentCard
        {...this.props}
      >
      </PaymentCard>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(getPaymentData()),
    //onSelectWay:(id) =>  dispatch(selectDelivery(id)),
    //onChangeSellerAddressId: (id) => dispatch(changeSimpleValue('delivery.seller_address_id', id))
  };
}

const mapStateToProps = createStructuredSelector({
  payment: makeSelectNormal('payment')
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({key: 'payment', saga});
export default compose(
  withSaga,
  withConnect
)(PaymentContainer);
