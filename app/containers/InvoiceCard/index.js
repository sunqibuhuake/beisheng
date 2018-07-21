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
  setDefaultInvoice,
  deleteInvoice,
  editInvoice,
  getInvoice,
  addInvoice,
  changeSimpleValue,
  fetchListData,
  selectInvoiceType,
  selectInvoiceItem,
resetOrderInvoiceModify,
hideInvoiceModal,
setOrderInvoice,
  addOrderInvoice,
  resetInvoiceForm,
resetInvoiceValid

} from '../App/actions'
import {makeSelectNormal, makeSelectValue} from '../App/selectors'

import NormalInvoiceModal from './NormalInvoiceAddModal'
import SpecInvoiceAddModal from './SpecInvoiceAddModal'

import OrderNormalInvoiceModal from './OrderNormalInvoiceAddModal'
import OrderSpecInvoiceAddModal from './OrderSpecInvoiceAddModal'

import InvoiceCard from './InvoiceCard'
import OrderInvoiceCard from './OrderInvoiceCard'

export class AddressCardContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadList();
  }


  isSpec() {
    const modify = this.props.invoice_state.modify;
    const list = this.props.invoice_state.list;
    let flag = false;
    list.forEach(l => {
      // todo 修复type判定
      if (l.id == modify && l.invoice_title == '个人') {
        flag = true;
      }
    })
    return flag;
  }

  render() {
    const {invoice_state} = this.props;
    if (!invoice_state.ready) {
      return (<span>加载中</span>)
    }


    const order_invoice_card = (
      <span>
              <OrderInvoiceCard
                invoice_state={this.props.invoice_state}
                onOrderInvoiceEdit={this.props.onOrderInvoiceEdit}
                onOrderSelectType={this.props.onOrderSelectType}
                onAdd={this.props.onAddClick}
              ></OrderInvoiceCard>

      </span>
    )


    const profile_invoice_card = (
      <span>
              <InvoiceCard
                {...this.props}
              >
              </InvoiceCard>

      </span>

    )

    return (
      <section>
        {this.props.mode == 'order' ? order_invoice_card : profile_invoice_card}

        <NormalInvoiceModal
          visible={this.props.modal.normal}
          onClose={this.props.onClose}
          onSubmit={this.props.onSubmit.bind(null,this.props.mode, 1)}
        ></NormalInvoiceModal>

        <SpecInvoiceAddModal
          visible={this.props.modal.spec}
          onClose={this.props.onClose}
          onSubmit={this.props.onSubmit.bind(null, this.props.mode,2)}
        ></SpecInvoiceAddModal>

        <OrderNormalInvoiceModal
          onOrderAddClick={this.props.onAddClick.bind(null, 1)}
          event={this.props.invoice_state.event}
          spec={this.isSpec.call(this)}
          visible={this.props.modal.order_normal}
          onAdd={this.props.onAddClick.bind(null, 1)}
          list={invoice_state.list}
          onClose={this.props.onClose}
          onSubmit={this.props.onOrderModalSubmit.bind(null, 1)}
          onSelectItem={this.props.onSelectItem}
        ></OrderNormalInvoiceModal>

        <OrderSpecInvoiceAddModal
          onOrderAddClick={this.props.onAddClick.bind(null, 2)}
          event={this.props.invoice_state.event}
          visible={this.props.modal.order_spec}
          list={invoice_state.list}
          onClose={this.props.onClose}
          onSubmit={this.props.onOrderModalSubmit.bind(null,2)}
          onSelectItem={this.props.onSelectItem}
        ></OrderSpecInvoiceAddModal>

      </section>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {

    onAddClick: (type_num) => {
      dispatch(changeSimpleValue('invoice.modal.normal', false));
      dispatch(changeSimpleValue('invoice.modal.order_normal', false));
      dispatch(changeSimpleValue('invoice.modal.order_spec', false));
      dispatch(changeSimpleValue('invoice.modal.spec', false));

      dispatch(changeSimpleValue('invoice.type', type_num));
      dispatch(changeSimpleValue('invoice.event.name', 'add'));
      dispatch(resetInvoiceForm())
      dispatch(resetInvoiceValid())

      if (type_num == 1) {
        dispatch(changeSimpleValue('invoice.modal.normal', true));
      }
      if (type_num == 2) {
        dispatch(changeSimpleValue('invoice.modal.spec', true));
      }
    },
    onOrderAddClick: (type) => {
      dispatch(resetInvoiceValid())
      dispatch(changeSimpleValue('invoice.type', type));
      dispatch(changeSimpleValue('invoice.event.name', 'add'));
      if(type == 1) {
        dispatch(changeSimpleValue('invoice.event.id', 'order-normal-invoice-add'))
      }
      if (type == 2) {
        dispatch(changeSimpleValue('invoice.event.id', 'order-spec-invoice-add'))
      }

    },
    onOrderModalClose: () => {
      dispatch(resetOrderInvoiceModify())
      dispatch(changeSimpleValue('invoice.modal.normal', false));
      dispatch(changeSimpleValue('invoice.modal.spec', false));
    },
    onOrderModalSubmit: (type) => {
      dispatch(changeSimpleValue('invoice.modal.order_normal', false));
      dispatch(changeSimpleValue('invoice.modal.order_spec', false));
      dispatch(changeSimpleValue('invoice.type', type));
      dispatch(setOrderInvoice())
      //dispatch(setSelectInvoice)
    },
    onClose: () => {
      // hide all modal
      dispatch(changeSimpleValue('invoice.modal.normal', false));
      dispatch(changeSimpleValue('invoice.modal.order_normal', false));
      dispatch(changeSimpleValue('invoice.modal.order_spec', false));
      dispatch(changeSimpleValue('invoice.modal.spec', false));
      dispatch(resetInvoiceForm())
    },
    onSubmit: (mode, type) => {
      dispatch(changeSimpleValue('invoice.type', type));
      if (mode == 'profile') {
        dispatch(addInvoice())
      }
      if (mode == 'order') {
        dispatch(addOrderInvoice())
      }
      //dispatch(addAddress())
      //dispatch(changeSimpleValue('address.modal', false))
    },
    loadList: () => {
      return dispatch(getInvoice())
    },
    confirmDelete: (id) => {
      dispatch(deleteInvoice(id))
    },
    cancleDelete: (evt) => {
      console.log(evt)
      //const id = evt.target.getAttribute('data-id');
      //dispatch(changeSimpleValue('address.delete', id ))
      //dispatch(changeSimpleValue('address.delete', id ))
    },
    onEdit: (id, mode) => {
      dispatch(resetInvoiceValid())
      //dispatch()
      dispatch(editInvoice(id, mode))
    },
    onOrderInvoiceEdit:(id,mode) => {
      dispatch(editInvoice(id, mode))
    },
    onOrderSelectType: (type) => {
      dispatch(selectInvoiceType(type))
    },
    onSelectType: (type) => {
      dispatch(selectInvoiceType(type))
    },
    onSetDefault: (id) => dispatch(setDefaultInvoice(id)),
    onSelectItem: (id) => dispatch(selectInvoiceItem(id))

  };
}

const mapStateToProps = createStructuredSelector({
  invoice_state: makeSelectNormal('invoice'),
  modal: makeSelectNormal('invoice.modal'),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({key: 'invoice', saga});
export default compose(
  withSaga,
  withConnect
)(AddressCardContainer);
