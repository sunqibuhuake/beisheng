/**
 * Created by sunqi on 2018/5/13.
 */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Link } from 'react-router-dom';
import {Row, Col, Icon} from 'antd'


import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {makeSelectLoading, makeSelectError, makeSelectAccountStatus } from 'containers/App/selectors';
import { login } from '../App/actions';
import { showQrcode } from './actions';
import {message} from 'antd'

import {
  hideQrcode,
  changeUsername,
  changeCode,
  clearUsername,
  enableVerifycodeSending,
  getVerifyCode,
  disableVerifycodeSending,
  resetUsername,
  resetVerifyCodeInput
} from './actions';
import { makeSelectQrcode,makeSelectUsername, makeSelectVerifycode, makeSelectCodeSendingStatus, makeSelectUsernameCheck, makeSelectVerifycodeCheck } from './selectors';
import reducer from './reducer';
import saga from './saga';

import './style.css'
import LoginCard from './LoginCard'
import QRcode from './QRcode'

export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.initTimer()
    if (this.props.match && this.props.match.params) {
      if (this.props.match.params.status == 'expired') {
        message.warning('请重新登陆!')
      }
    }
    //this.props.history.push('/cart')


    //this.props.jump();
  }



  initTimer() {
    const self = this;
    this.timer = setInterval(() => {
      if (self.props.verifycode_status === 'enable') {
        // do nothing
      } else {
        let wait = self.props.verifycode_status - 0;
        if (wait > 0) {
          wait--;
          self.props.disableVerifyCode(wait)
        } else {
          self.props.enableVerifyCode()
        }
      }
    }, 1000)
  }

  componentWillUnmount() {
    if (this.timer) {
      window.clearInterval(this.timer)
    }
  }



  render() {
    const { loading, error } = this.props;

    let paddingTop = 32;
    if (window.innerHeight > 1000) {
      paddingTop = 120
    } else if (window.innerHeight > 756) {
      paddingTop = 96
    }



    const styles = {
      root: {
        background: '#F4F5F6',
        padding: paddingTop + 'px 0 48px',
        minHeight:window.innerHeight - 45
  },
      container: {
        margin: '0 auto',
      }
    }

    return (
      <div style={styles.root}>
        <section style={styles.container} className="login-card-container">
          <div style={{
            padding: 24,
            background: 'white',
            borderRadius: 8
          }}>
            <div style={{color: 'black', fontSize: 24}}>
              请登录
            </div>
            <Row>
              <Col span={14}>
                <LoginCard
                  onChangeUsername={this.props.onChangeUsername}
                  onChangeCode={this.props.onChangeCode}
                  username={this.props.username}
                  onFocusUsername={this.props.onFocusUsername}
                  onFocusVerifyCode={this.props.onFocusVerifyCode}
                  verifycode={this.props.verifycode}
                  onClear={this.props.onClear}
                  verifycode_status={this.props.verifycode_status}
                  onGetVerifyCode={this.props.onGetVerifyCode}
                  username_check={this.props.username_check}
                  verifycode_check={this.props.verifycode_check}
                  onSubmitForm={this.props.onSubmitForm}
                  showQrcode={this.props.showQrcode}
                ></LoginCard>
              </Col>
              <Col span={10}>

                <div style={{
                padding: '38px 18px 24px',
                lineHeight: 2
              }}>
                <span style={{
                  fontSize: 16,
                  fontWeight: 'bold'
                }}>请使用您的企业邮箱作为登录账号，</span>
                  将发送一封带有验证码的邮件至您的邮箱，请填写验证码进行登录。

                </div>

              </Col>
            </Row>
            <div style={{marginTop: 72}}>
              <Row>
                <Col span={12}>
                  <Link to="/entry">
                    <div className="login-cancle">取消</div>
                  </Link>
                </Col>
                <Col span={12} style={{textAlign: 'right', paddingTop: 18, display:'none'}}>
                  如果您有问题,欢迎随时提问。
                <span style={{marginRight: 4}}>
                   <Icon type="phone" />
                </span>
                  400-666-8800
                </Col>
              </Row>
            </div>
          </div>

          <div style={{marginTop: 48,paddingTop: 24,fontSize: 12,borderTop: '1px solid rgb(202, 202, 202)'}}>
            Copyright © 2018 北京润泽金诚科技有限公司 保留所有权利
          </div>



        </section>

        <QRcode
          visible={this.props.qrcode}
          close={this.props.hideQrcode}
        ></QRcode>
      </div>
    );
  }
}

LoginPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  verifycode: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangeCode: PropTypes.func,
  onClear: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    jump: () => {
      dispatch({
        type: '@@router/LOCATION_CHANGE',
        payload: {
          pathname: '/cart',
          key: Math.random() + ''
        }

      })
    },
    enableVerifyCode: () => {
      return dispatch(enableVerifycodeSending())
    },
    disableVerifyCode: (t) => {
      return dispatch(disableVerifycodeSending(t))
    },
    onFocusUsername: () => {
      console.log('FOCUS USERNAME INPUT')
      return dispatch(resetUsername())
    },
    onFocusVerifyCode: () => {
      console.log('FOCUS VERIFY CODE')
      return dispatch(resetVerifyCodeInput())
    },
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangeCode: (evt) => {
      console.log(evt)
      return dispatch(changeCode(evt.target.value))
    },

    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      // todo login
      return dispatch(login());
    },
    onGetVerifyCode: () => {
      return dispatch(getVerifyCode())
    },
    onClear: () => dispatch(clearUsername()),
    hideQrcode: () => dispatch(hideQrcode()),
    showQrcode: () => dispatch(showQrcode())

  };
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  verifycode: makeSelectVerifycode(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  username_check: makeSelectUsernameCheck(),
  verifycode_check: makeSelectVerifycodeCheck(),
  verifycode_status: makeSelectCodeSendingStatus(),
  loginStatus: makeSelectAccountStatus(),
  qrcode: makeSelectQrcode()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'login', reducer});
const withSaga = injectSaga({key: 'login', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);

