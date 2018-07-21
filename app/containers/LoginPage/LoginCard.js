/**
 * Created by sunqi on 2018/5/13.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Input, Icon, Button, Row,Col} from 'antd'

import InputBox from './InputBox'
import UsernameInput from './UsernameInput'
import PasswordInput  from './PasswordInput'

const styles = {
  root: {
    width: '100%',
    padding: 24,
    margin: '0'
    //boxShadow: 'rgb(136, 136, 136) 0px 0px 1px 0px',
  },
  body: {
    padding: '0px 24px',
    width: '100%',
    margin: 0
  },
  innerBody: {
    width: '100%'
  },
  header: {
    width: '100%',
    fontSize: '18px',
    height: 48,
    color: 'black',
    lineHeight:'48px'
  },
  form: {
    width: '100%',
    padding: '0px'
  },
  footer: {
    width: '100%',
    padding: 12,
    borderTop: '1px solid #D9DADB',
    color: '#6c6c6c',
    background: '#F9FAFB'
  },
  btn: {
    width: 96,
    height: 36,
    lineHeight: '36px',
    fontSize: 14
  },
  verifyBtn: {
    color: '#1890ff',
    cursor:'pointer'
  }
}
function LoginCard(props) {


  function getVerifyCodeAction() {
    let action = null;
    if (props.verifycode_status === 'enable') {
      action = (
        <div style={styles.verifyBtn} onClick={props.onGetVerifyCode}>
          获取验证码
        </div>
      )
    } else {
      action = (
        <div  style={styles.verifyBtn}>
          {`重新获取(${props.verifycode_status}S)`}
        </div>
      )
    }
    return action
  }
  return (
    <div
      style={styles.root}>
      <div style={styles.body}>
        <div style={{width: '100%'}}>
          <div style={styles.header}>
            邮箱登录
          </div>
          <div style={styles.form}>
            <div style={{width: '100%'}}>
              <InputBox
                handler={props.onChangeUsername}
                value={props.username}
                name="username"
                onFocus={props.onFocusUsername}
                action={props.onClear}
                showQrcode={props.showQrcode}
                error={props.username_check.error}
                error_message={props.username_check.message}
              ></InputBox>
              <InputBox
                handler={props.onChangeCode}
                value={props.verifycode}
                action={props.onGetVerifyCode}
                name="password"
                onFocus={props.onFocusVerifyCode}
                verifycode_status={props.verifycode_status}
                error={props.verifycode_check.error}
                error_message={props.verifycode_check.message}
              ></InputBox>

              <Row>
                <Col span={12}>
                  <div>
                    {getVerifyCodeAction()}
                  </div>
                </Col>
                <Col span={12} className="tar">
                  <Button type="primary" style={styles.btn} onClick={props.onSubmitForm}>
                    登录
                  </Button>
                </Col>
              </Row>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

LoginCard.propTypes = {
};

export default LoginCard;
