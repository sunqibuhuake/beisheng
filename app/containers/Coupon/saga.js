/**
 * Gets the repositories of the user from Github
 */

import {message} from 'antd'
import request from '../../utils/request';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_COUPON_LIST, GET_ENABLE_COUPON} from './constants';
import {makeSelectNormal} from '../App/selectors'
import {getCouponListSuccess, getCouponListError} from './actions'
import api from '../../utils/api'
import helper from '../../utils/helper'

import axios from 'axios'

export function* fetchAllCoupon() {
  yield f
}
export function* fetchCouponList() {

  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  let formData1 = new FormData();
  let formData2 = new FormData();
  let formData3 = new FormData();

  formData1.append('token', token);
  formData2.append('token', token);
  formData3.append('token', token);

  formData1.append('type', 0);
  formData2.append('type', 1);
  formData3.append('type', 2);



  const arr = [];
  try {
    const res1 = yield call(request, api.getCouponList, {
      method: 'POST',
      body: formData1
    })

    if (res1.status == 1) {
      res1.result.data.forEach(coupon => {
        coupon.status = 'enable'
        arr.push(coupon)
      })
    }
    const res2 = yield call(request, api.getCouponList, {
      method: 'POST',
      body: formData2
    })

    if (res2.status == 1) {
      res2.result.data.forEach(coupon => {
        coupon.status = 'used'
        arr.push(coupon)
      })
    }
    const res3 = yield call(request, api.getCouponList, {
      method: 'POST',
      body: formData3
    })

    if (res3.status == 1) {
      res3.result.data.forEach(coupon => {
        coupon.status = 'disable'
        arr.push(coupon)
      })
    }
    yield put(getCouponListSuccess(arr))
  } catch (e) {
    message.warning('优惠券载入错误,请重试!')
    yield put(getCouponListError)
  }
}


export function* fetchEnableCoupon() {

  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  const products = helper.getProducts();
  const goods = products.list.map(l => {
    return {
      "goods_id": l.id,
      "spec_key": l.spec_key,
      "buy_num": l.count
    }
  })

  let formData = new FormData();
  formData.append('token', token);
  formData.append('goods', goods)

  try {
    const res = yield axios({
      url: api.getEnableCoupon,
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({token,goods})
    })
    //const res = yield call(request, api.getEnableCoupon, {
    //  headers: {
    //    'Accept': 'application/json',
    //    'Content-Type': 'application/json'
    //  },
    //  method: 'POST',
    //  body: JSON.stringify({token, goods})
    //})

    if (res.status == 200) {
      yield put(getCouponListSuccess(res.data.result))
    } else {
      yield  put(getCouponListError())
    }
  } catch (e) {
    yield put(getCouponListError)
  }
}


export default function* couponSaga() {
  yield takeLatest(GET_COUPON_LIST, fetchCouponList)
  yield takeLatest(GET_ENABLE_COUPON, fetchEnableCoupon)

}



