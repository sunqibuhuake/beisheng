/**
 * Created by sunqi on 2018/5/13.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'antd'

function PasswordInput(props) {

  const styles = {
    root: {
      width: '100%'
    },
    box: {
      height: 38,
      width: '100%',
      border: '1px solid #E2E3E4'
    },
    input: {
      height: 18,
      margin: '9px 0px',
      width: '100%',
      fontSize: 14,
      lineHeight: 1.3,
      color: 'black',
      padding: 0
    },
    error: {
      height: 24,
      fontSize: 12,
      lineHeight: 2,
      color: 'red',
      padding: '0 20px',
      textAlign: 'center'
    },
    btn: {
      height: 32,
      marginTop: 2,
      marginRight: 2,
      textAlign: 'center',
      fontSize: 12,
      lineHeight: 2.8,
      background: '#E3E4E5',
      color: '#6c6c6c',
      cursor: 'pointer'
    }
  }
  return (
    <div
      style={styles.root}>
      <div style={styles.box}>
        <Row>
          <Col span={4}>
            图标
          </Col>
          <Col span={14}>
            <input
              style={styles.input}
              className="bs-input"
              placeholder="验证码"
            >
            </input>
          </Col>
          <Col span={6}>
            <div style={styles.btn}>
              获取验证码
            </div>
          </Col>
        </Row>
      </div>
      <div style={styles.error}>
        错错错
      </div>
    </div>
  )
}

export default PasswordInput
