/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import {message} from 'antd'
import {
 GET_PAYMENT_DATA
} from '../App/constants';
import {
getPaymentDataSuccess,
  fetchListDataSuccess,
} from '../App/actions';

import request from 'utils/request';
import api from '../../utils/api'
import parse from '../../utils/parse'
import helper from '../../utils/helper'

import { makeSelectNormal, makeSelectValue } from '../App/selectors';


export function* getData() {
  // Select username from store

  const is_fenqi = helper.installmentDetect()
  const products = helper.getProducts()
  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;

  //if (!is_fenqi || products.type == 'cart') {
  //  yield put(getPaymentDataSuccess(
  //    [
  //      {pay_id: 1, name: "支付宝", type: "ali"},
  //      {pay_id: 2, name: "微信", type: "weixin"},
  //      {pay_id: 2, name: "分期", type: "fenqi"}
  //
  //    ]
  //  ));
  //
  //  return false
  //}

  //yield put(getPaymentDataSuccess(
  //  [{pay_id: 1, name: "快捷支付", type: "ali"}]
  //))
  //return false

  const formData = new FormData()
  formData.append('token', token);
  formData.append('spec_key', products.list[0].spec_key)
  formData.append('goods_id', products.list[0].id)
  formData.append('is_cart', products.type == 'cart' ? '1' : '0')


  try {
    const res = yield call(request, api.payWay, {
      method: 'POST',
      body: formData
    })

    if (res.status == 1) {
      yield put(getPaymentDataSuccess(res.result));
    } else {
      throw new Error(`发生错误:\nstatus=${res.status}\nmessgae=${res.msg}`);
    }
  }catch(e) {
    message.warning(e.message);
  }
}

export default function* paymentSaga() {
  yield takeLatest(GET_PAYMENT_DATA, getData);
}
