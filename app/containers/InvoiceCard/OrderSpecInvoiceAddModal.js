/**
 * Created by sunqi on 2018/5/31.
 */
import React from 'react'
import {Modal, Button, Row, Col, Checkbox} from 'antd'
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';


import {makeSelectModalStatus} from '../App/selectors'
import {changeSimpleValue} from '../App/actions'

import XSelect from '../XForm/XSelect'
import XInput from '../XForm/XInput'

import XEditOption from '../XForm/XEditOption'

import OrderSpecInvoiceForm from './OrderSpecInvoiceForm.js'



export default class OrderNormalInvoiceAddModal extends React.PureComponent {

  close() {

  }
  render() {
    return (
      <Modal
        width={780}
        title={null}
        header={null}
        footer={null}
        visible={this.props.visible}
        onCancel={this.props.onClose}
      >

        <OrderSpecInvoiceForm
          onOrderAddClick={this.props.onOrderAddClick}
          label="发票抬头"
          list={this.props.list.filter((l,i) => {
            l.index = i;
            return l.type == 2
          })}
          onSubmit={this.props.onSubmit}
          onSelectItem={this.props.onSelectItem}
        ></OrderSpecInvoiceForm>
      </Modal >
    )
  }
}
