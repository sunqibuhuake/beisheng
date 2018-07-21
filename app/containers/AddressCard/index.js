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
  resetAddressValid,
  resetAddressForm,
  setDefaultAddress,
  editAddress,
  deleteAddress,
  addAddress,
  changeSimpleValue,
  fetchListData,
  getCityList,
  getDistrictList,
  getAddressList
} from '../App/actions'
import {makeSelectNormal, makeSelectValue} from '../App/selectors'


import AddressModal from './AddressModal'
import AddressCard from './AddressCard'
import OrderAddressCard from './OrderAddressCard'

import Loading from '../../components/Loading'

export class AddressCardContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadList();
  }

  render() {
    const {address_state} = this.props;
    if (!address_state.ready) {
      return (<Loading></Loading>)
    }


    const order_address_card = (
      <OrderAddressCard
        confirmDelete={this.props.confirmDelete}
        cancleDelete={this.props.cancleDelete}
        address_state={this.props.address_state}
        onAdd={this.props.onAdd}
        onEdit={this.props.onEdit}
        onSetDefault={this.props.onSetDefault}
      ></OrderAddressCard>
    )

    const profile_address_card = (
      <AddressCard
        confirmDelete={this.props.confirmDelete}
        cancleDelete={this.props.cancleDelete}
        address_state={this.props.address_state}
        onAdd={this.props.onAdd}
        onEdit={this.props.onEdit}
        onSetDefault={this.props.onSetDefault}
      ></AddressCard>
    )
    return (
      <section>
        {this.props.mode == 'order' ? order_address_card : profile_address_card}
        <AddressModal
          processing={this.props.processing}
          visible={this.props.visible}
          onClose={this.props.onClose}
          clearValid={this.props.clearValid}
          onAddSubmit={this.props.onAddSubmit}
          onChangeProvince={this.props.onChangeProvince}
          onChangeCity={this.props.onChangeCity}
        ></AddressModal>
      </section>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {

    onAdd: () => {
      dispatch(resetAddressForm())
      dispatch(changeSimpleValue('address.form.province.value', 1));
      dispatch(getCityList());
      dispatch(changeSimpleValue('address.modal', 'add'));
    },
    onClose: () => {
      dispatch(resetAddressForm())
      dispatch(changeSimpleValue('address.modal', false));
    },
    onAddSubmit: () => {
      dispatch(addAddress())
      //dispatch(changeSimpleValue('address.modal', false))
    },
    onChangeProvince: (value, option) => {
      console.log(value, option)
      dispatch(changeSimpleValue('address.form.province.value', value));
      dispatch(getCityList());
    },
    onChangeCity: (value) => {
      dispatch(changeSimpleValue('address.form.city.value', value));
      dispatch(getDistrictList());
    },
    loadList: () => {
      dispatch(getAddressList())
      dispatch(changeSimpleValue('address.form.province.value', 1));
      dispatch(getCityList());
    },
    confirmDelete: (id) => {
      dispatch(deleteAddress(id))
    },
    cancleDelete: (evt) => {
      console.log(evt)
      //const id = evt.target.getAttribute('data-id');
      //dispatch(changeSimpleValue('address.delete', id ))
      //dispatch(changeSimpleValue('address.delete', id ))
    },
    onEdit: (id) => {
      dispatch(editAddress(id))
      dispatch(getCityList());
      dispatch(getDistrictList());
    },
    onSetDefault: (id) => dispatch(setDefaultAddress(id)),
    clearValid: (path) => dispatch(changeSimpleValue(path, ''))

  };
}

const mapStateToProps = createStructuredSelector({
  address_state: makeSelectNormal('address'),
  visible: makeSelectValue('address.modal'),
  processing: makeSelectValue(('address.processing'))
  //delete: makeSelectValue('address.delete')

});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({key: 'address', saga});
export default compose(
  withSaga,
  withConnect
)(AddressCardContainer);
