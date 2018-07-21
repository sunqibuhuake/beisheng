/**
 * Created by sunqi on 2018/5/17.
 */
/**
 * Created by sunqi on 2018/5/13.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row,Icon} from 'antd'
import InputIcon from './InputIcon'

export default class InputBox extends React.PureComponent{
  render() {
    const styles = {
      root: {
        width: '100%'
      },
      input: {
        height: 40,
        margin: '0px 0px',
        width: '100%',
        fontSize: 14,
        lineHeight: '40px',
        color: 'black',
        paddingLeft: 12
      },
      box: {
        height: 42,
        width: '100%',
        borderRadius: '4px',
        border: '1px solid #E2E3E4'
      },
      error: {
        minHeight: 24,
        fontSize: 12,
        lineHeight: '24px',
        color: 'red',
        padding: '0',
        textAlign: 'left'
      },
      verifyBtn: {
        height: 44,
        marginTop: 2,
        marginRight: 2,
        textAlign: 'center',
        fontSize: 14,
        lineHeight: '44px',
        background: '#E3E4E5',
        color: '#6c6c6c',
        cursor: 'pointer'
      },
      clearBtn: {
        height: 20,
        width: 20,
        position: 'absolute',
        right: '20px',
        top: '15px',
        textAlign: 'center',
        fontSize: 12,
        lineHeight: '20px',
        color: 'rgb(108, 108, 108)',
        borderRadius: '50%',
        border: '1px solid #e1e1e1',
        boxSizing: 'content-box',
        cursor:'pointer'
      }
    }


    let icon = null;
    let action = null;
    let inputElem = null;
    let error_text = ''
    if (this.props.error) {
      styles.box.border = '1px solid #D31025';
      styles.input.color = '#D31025'
      styles.input.background = 'rgba(255,0,0,0.1)';
      error_text = this.props.error_message;
      //(<span>
      //  <Icon type="exclamation-circle-o" />
      //  {this.props.error_message}
      //</span>);
    }

    if (this.props.name == 'username') {
      icon = (
        <InputIcon
          status="username_n"
        ></InputIcon>
      )

      if (this.props.error) {
        icon = (
          <InputIcon
            status="username_e"
          ></InputIcon>
          )
      }

      inputElem = (
        <input
          style={styles.input}
          className="bs-input"
          placeholder="用户名"
          onChange={this.props.handler}
          onFocus={this.props.onFocus}
          value={this.props.value}
        >
        </input>
      )

      action = this.props.value ? (
        <div onClick={this.props.action} className="clear_username_btn" style={styles.clearBtn}>x</div>
      ) : ''
    }

    if (this.props.name === 'password') {
      icon = (
        <InputIcon
          status="password_n"
        ></InputIcon>
      )

      if (this.props.error) {
        icon = (
          <InputIcon
            status="password_e"
          ></InputIcon>
        )
      }
      inputElem = (
        <input
          style={styles.input}
          className="bs-input"
          placeholder="验证码"
          onFocus={this.props.onFocus}
          value={this.props.value}
          onChange={this.props.handler}
        >
        </input>
      )

    }


    let spec_error = null
    if (error_text && error_text.match('加入方式')) {
      spec_error = (
        <span>
          您的企业还未加入 Employee Choice 项目，点击
          <span
            style={{
            textDecoration: 'underline',
            cursor: 'pointer'
            }}

            onClick={this.props.showQrcode}
        >
            获取加入方式
          </span>
        </span>
      )
    }

    return (
      <div
        style={styles.root}>
        <div style={styles.box}>
          <Row>
            <Col span={24}>
              {inputElem}
            </Col>
          </Row>
        </div>
        <div style={styles.error}>
          {(spec_error || error_text) ? (<Icon type="exclamation-circle-o" />) : ''}
          {spec_error || error_text || ''}
        </div>
      </div>
    )

  }
}
