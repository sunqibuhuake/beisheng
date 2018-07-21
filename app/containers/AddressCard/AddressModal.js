/**
 * Created by sunqi on 2018/5/31.
 */
import React from 'react'
import {Modal, Button, Row, Col, Checkbox, Icon, Spin} from 'antd'
import { connect } from 'react-redux';
import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';


import {makeSelectModalStatus} from '../App/selectors'
import {changeSimpleValue} from '../App/actions'

import XSelect from '../XForm/XSelect'
import XInput from '../XForm/XInput'
import XError from '../XForm/XError'


export default class AddressModal extends React.PureComponent {

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
      error: {
        color: '#f14444',
        fontSize: 12
      },
      row: {
        height: 48,
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
        paddingLeft: 12

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
    const antIcon = <Icon type="loading" style={{ fontSize: 24, color: 'white' }} spin/>;
    const loading = (<div
      style={{...styles.btn, cursor: 'default'}}
    >
      <Spin indicator={antIcon}/>
    </div>)
    return (
      <Modal
        //bodyStyle={styles.root}
        width={780}
        title={null}
        header={null}
        footer={null}
        visible={this.props.visible === false ? false : true}
        onOk={this.close}
        onCancel={this.props.onClose}
      >
        <section style={styles.root}>
          <Row style={styles.row}>
            <Col span={3} style={styles.label} className="fh">
              <span style={styles.required}>*</span>所在地区:
            </Col>
            <Col span={7} className="fh">
              <div style={styles.selectContainer}>
                <XSelect
                  style={styles.select}
                  data-path="address.form.province.value"
                  data-options-path="address.form.province.list"
                  onChange={this.props.onChangeProvince}
                ></XSelect>


              </div>
            </Col>
            <Col span={7} className="fh">
              <div
                style={styles.selectContainer}
              >
                <XSelect
                  style={styles.select}
                  data-path="address.form.city.value"
                  data-options-path="address.form.city.list"
                  onChange={this.props.onChangeCity}
                ></XSelect>
              </div>
            </Col>
            <Col span={7} className="fh">
              <div
                style={styles.selectContainer}
              >
                <XSelect
                  style={styles.select}
                  data-path="address.form.district.value"
                  data-options-path="address.form.district.list"
                ></XSelect>
              </div>
            </Col>

          </Row>
          <Row style={{marginBottom: 12}}>
            <Col span={3} style={styles.label}>
              <span style={styles.required}>*</span>详细地址:
            </Col>
            <Col span={21}>
              <div style={styles.selectContainer}>
                <XInput
                  style={styles.textarea}
                  mode="textarea"
                  data-path="address.form.address"
                  placeholder="详细地址,街道/门牌号等"
                  data-valid-path="address.valid.valid.address"
                >
                </XInput>
                <XError
                  style={styles.error}
                  mode="text"
                  data-path="address.valid.valid.address"
                >
                </XError>
              </div>


            </Col>

          </Row>
          <Row style={styles.row}>
            <Col span={3} style={styles.label}>
              <span style={styles.required}>*</span>收货人:
            </Col>
            <Col span={9} className="fh">
              <div style={styles.selectContainer}>
                <XInput
                  style={styles.input}
                  mode="input"
                  data-path="address.form.consignee"
                  placeholder=""
                  data-valid-path="address.valid.valid.consignee"

                >
                </XInput>
                <XError
                  style={styles.error}
                  mode="text"
                  data-path="address.valid.valid.consignee"
                >
                </XError>
              </div>
            </Col>
            <Col span={3} style={styles.label}>
              <span style={styles.required}>*</span>手机号码:
            </Col>
            <Col span={9} className="fh">
              <div style={styles.selectContainer}>
                <XInput
                  style={styles.input}
                  mode="input"
                  data-path="address.form.mobile"
                  placeholder=""
                  data-valid-path="address.valid.valid.mobile"

                >
                </XInput>
                <XError
                  style={styles.error}
                  mode="text"
                  data-path="address.valid.valid.mobile"
                >
                </XError>
              </div>
            </Col>
          </Row>
          <div style={{textAlign:'center', margin: '12px auto'}}>
            <XInput
              data-path="address.form.is_default"
              mode="checkbox"
              text="设为默认"
            >
            </XInput>
          </div>

          {this.props.processing  ? loading : (
            <div style={styles.btn} onClick={this.props.onAddSubmit}>
              保存
            </div>
          )}
        </section>


      </Modal >
    )
  }
}
