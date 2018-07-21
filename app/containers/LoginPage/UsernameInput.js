/**
 * Created by sunqi on 2018/5/13.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'antd'
import InputBox from './InputBox'
function UsernameInput(props) {

  const styles = {
    root: {
      width: '100%'
    },
    box: {
      height: 50,
      width: '100%',
      borderRadius: '2px',
      border: '1px solid #E2E3E4'
    },
    input: {
      height: 50,
      margin: '0px 0px',
      width: '100%',
      fontSize: 14,
      lineHeight: '50px',
      color: 'black',
      padding: 0
    },
    error: {
      height: 36,
      fontSize: 12,
      lineHeight: '36px',
      color: 'red',
      padding: '0 20px',
      textAlign: 'center'
    }
  }
  return (
    <InputBox>
      <Row>
        <Col span={18}></Col>
        <Col span={6}></Col>
      </Row>
    </InputBox>
  )
}

export default UsernameInput
