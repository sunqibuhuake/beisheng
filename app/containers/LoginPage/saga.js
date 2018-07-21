/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_VERIFY_CODE } from './constants';
import {LOGIN} from '../App/constants'
import request from 'utils/request';
import { makeSelectUsername, makeSelectVerifycode } from './selectors';
import {usernameError, enableVerifycodeSending, verifyCodeError, showQrcode} from './actions'

import {loginSuccess} from '../App/actions'
import api from '../../utils/api'


const mailcheck = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
export function* getCode() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  if (!mailcheck.test(username)) {
    yield put(usernameError('请输入正确格式的邮箱'));
    yield put(enableVerifycodeSending())
    return false;
  }
  const url = api.verifycode;
  let formData = new FormData();

  formData.append('email', username);
  const res = yield request(api.verifycode, {
    method: 'POST',
    body: formData
  })


  if (res.status == 1020) {
    yield put(usernameError('您的企业还未加入 Employee Choice 项目，点击获取加入方式'))
    //yield put(showQrcode())
    yield put(enableVerifycodeSending())
    return false;
  }

  if (res.status == 1) {
    console.log('send vrtify code successfully!!!')
  }


}

export function* login() {

  const username = yield select(makeSelectUsername());
  const password = yield select(makeSelectVerifycode());
  if (!mailcheck.test(username)) {
    yield put(usernameError('请输入正确格式的邮箱'));
    yield put(enableVerifycodeSending())
    return false;
  }
  if (!password) {
    yield put(verifyCodeError('请输入验证码'))
    return false;
  }

  let formData = new FormData();
  // 请求参数 ('key',value)
  formData.append('email', username);
  formData.append('auth_code', password  + '');
  const res = yield request(api.login, {
    method: 'POST',
    body: formData
  })



  if (res.status == 1) {
    window.localStorage.setItem('account', JSON.stringify(res.result));
    yield put(loginSuccess(res.result))
    return false;
  }

  if (res.status == -1) {
    yield put(verifyCodeError(res.msg));
    return false;
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loginSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_VERIFY_CODE, getCode);
  yield takeLatest(LOGIN, login)
}


function checkEmail(mail){
  var myforms=document.forms;
  var myemail=myforms[0].email.value;
  var myReg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;

  if(myReg.test(myemail)){
    return true;
  }else{
    myspan.innerText="邮箱格式不对!";
    return false;
  }
}
