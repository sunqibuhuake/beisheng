/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCT_DATA,COLLECT, SET_PRODUCT_OPTION, GET_PAYMENT_DATA } from './constants';
import { ADD_CART_ITEM } from '../App/constants';

import {message} from 'antd'
import { getPaymentDataSuccess,getProductDataSuccess, collectSuccess, getPaymentData } from './actions';
import { makeSelectSpecKey,makeSelectProductId, makeSelectProductOption, makeSelectCount, makeSelectProductDetail } from './selectors';

import request from 'utils/request';
import { makeSelectAccount } from '../App/selectors';

import api from '../../utils/api'
import helper from '../../utils/helper'

/**
 * Github repos request/response handler
 */
export function* getData() {
  // Select username from store
  const pid = yield select(makeSelectProductId());
  const account_info = yield select(makeSelectAccount());
  const token = account_info.data.user.token;
  const url = api.product_detail + '?id=' + pid + '&token=' + token;

  try {
    const res = yield call(request, url);
    if (res.status ==1) {
      yield put(getProductDataSuccess(res.result))

      if (res.result.goods.is_pay == 1) {
        yield put(getPaymentData())
      }
    }
  } catch (err) {
    console.log('获取出错')
  }
}


export function* addCartItem() {
  const account_info = yield select(makeSelectAccount())
  const count = yield select(makeSelectCount())
  const options = yield select(makeSelectProductOption())
  const detail = yield select(makeSelectProductDetail())
  let option_arr = []
  // todo remove filter
  for (let prop in options) {
    if (prop !== '__empty__' && prop !== 'payment' && prop !== 'fenqi') {
      option_arr.push(options[prop])
    }
  }
  const id = detail.goods.goods_id;
  const token = account_info.data.user.token;

  const formData = new FormData()
  formData.append('token', token)
  formData.append('goods_id', id)
  formData.append('goods_num', count)
  formData.append('spec_key', helper.getSpecKey(options))

  try {
    const res = yield call(request, api.addCart, {
      method: 'POST',
      body: formData
    })
    if (res.status == 1) {
      window.location.href = '/cart'
    } else {
      throw new Error(`服务器返回异常!${res.msg}`);
    }
  }catch(e) {
    message.warning(e.message);
  }



}

export function* collect() {
  const pid = yield select(makeSelectProductId());
  const account_info = yield select(makeSelectAccount());
  const token = account_info.data.user.token;
  const formData = new FormData()
  formData.append('goods_id', pid);
  formData.append('token', token);

  try{
    const res = yield call(request, api.collectGoodsOrNo, {
      method: 'POST',
      body: formData
    })

    if (res.status == 1) {
      yield put(collectSuccess())
    } else {
      throw new Error(`服务器返回异常!${res.msg}`);
    }
  }catch(e) {
    message.warning(e.message);
  }




}

export function* fetchPaymentData() {
  return false
  const formData = new FormData()
  const pid = yield select(makeSelectProductId());
  const account_info = yield select(makeSelectAccount());
  const token = account_info.data.user.token;
  const spec_key = yield select(makeSelectSpecKey())
  formData.append('goods_id', pid);
  formData.append('token', token);
  formData.append('spec_key', spec_key);
  const res = yield request(api.payWay, {
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    yield put(getPaymentDataSuccess(res.result))
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* productDetail() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_PRODUCT_DATA, getData);
  yield takeLatest(ADD_CART_ITEM, addCartItem);
  yield takeLatest(COLLECT, collect);
  yield takeLatest(GET_PAYMENT_DATA, fetchPaymentData)

  //yield takeLatest(GET_PAYMENT_DATA, )



}
