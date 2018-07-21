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

import MetaForm from './MetaForm.js'

export default class MetaModal extends React.PureComponent {

  close() {

  }
  render() {
    const styles = {
      root: {
        width: 680,
        margin: '0 auto',
      },
      select: {
        width: '100%',
        height: '100%',
        lineHeight: '32px'
      },
      row: {
        height: 32,
        fontSize: 14,
        lineHeight: '32px',
        marginBottom: 12
      },
      selectContainer: {
        width: '100%',
        paddingLeft: 12,
        height: '100%'
      },
      label: {
        fontSize: 14,
        lineHeight: '32px',
        textAlign: 'right'
      },
      required: {
        color: 'red'
      },
      textarea: {
        width: '100%',
        height: 120,
        border: '1px solid #e6e6e6',
        padding: '6px 12px'
      },
      input: {
        width: '100%',
        height: '100%',
        border: '1px solid #e6e6e6',
        paddingLeft:12

      },
      btn: {
        width: 160,
        cursor: 'pointer',
        height: 48,
        background: '#0070CB',
        margin: '0 auto',
        color: 'white',
        textAlign: 'center',
        lineHeight: '48px',
        fontSize: 14
      }

    }
    return (
      <Modal
        //bodyStyle={styles.root}
        width={780}
        title={null}
        header={null}
        footer={null}
        visible={this.props.visible}
        onCancel={this.props.onClose}
      >
        <MetaForm
            token={this.props.token}
            avatar={this.props.avatar}
            changeAvatar={this.props.changeAvatar}
          onSubmit={this.props.onSubmit}
        ></MetaForm>
      </Modal >
    )
  }
}
