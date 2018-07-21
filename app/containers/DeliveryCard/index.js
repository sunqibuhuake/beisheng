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
  getDelivery,
  selectDelivery
} from '../App/actions'
import {makeSelectNormal, makeSelectValue} from '../App/selectors'

import DeliveryCard from './DeliveryCard'
export class AddressCardContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const {delivery} = this.props;
    if (!delivery.ready) {
      return (<span>加载中</span>)
    }

    return (
      <DeliveryCard
        {...this.props}
      >
      </DeliveryCard>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(getDelivery()),
    onSelectWay:(id) =>  dispatch(selectDelivery(id)),
    onChangeSellerAddressId: (id) => dispatch(changeSimpleValue('delivery.seller_address_id', id))
  };
}

const mapStateToProps = createStructuredSelector({
  delivery: makeSelectNormal('delivery')
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({key: 'delivery', saga});
export default compose(
  withSaga,
  withConnect
)(AddressCardContainer);
