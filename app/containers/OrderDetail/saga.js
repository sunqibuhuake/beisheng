/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_ORDER_DETAIL, CONFIRM_RECEIVE} from './constants';
import request from 'utils/request';
import { makeSelectOrderID } from './selectors';
import {makeSelectNormal, makeSelectValue} from '../App/selectors'
import {
  getOrderDetailSuccess,
  getExpressSuccess,
getExpressError
  //cancleOrderSuccess
} from './actions'
import api from '../../utils/api'



export function* confirmReceive() {

  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  const sn = yield select(makeSelectOrderID())

  let formData = new FormData();
  formData.append('token', token);
  formData.append('order_sn', sn);

  const res = yield request(api.confirmReceive,{
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    yield getOrderDetail();
  } else {
    console.log(res)
    //yield put(cancleOrderSuccess )
  }
}

function* getExpressInfo() {
  const account_info = yield select(makeSelectNormal('account'));
  const id = yield select(makeSelectOrderID())
  const token = account_info.data.user.token;
  let formData = new FormData();
  formData.append('token', token);
  formData.append('order_sn', id);

  try {
    const res = yield call(request, api.express, {
      method: 'POST',
      body: formData
    })
    if (res.status == 1) {
      yield put(getExpressSuccess(res.result.data ? res.result.data : [] ))
    } else {
      yield put(getExpressError('未获取到物流信息'))
    }

  }catch(e) {
    console.log(e);
  }
}


export function* getOrderDetail() {
  const account_info = yield select(makeSelectNormal('account'));
  const id = yield select(makeSelectOrderID())
  const token = account_info.data.user.token;
  let formData = new FormData();
  formData.append('token', token);
  formData.append('order_sn', id);

  try {
    const res = yield call(request, api.getOrderDetail, {
      method: 'POST',
      body: formData
    })
    if (res.status == 1) {
      yield put(getOrderDetailSuccess(res.result ))
      yield getExpressInfo();
    }

  }catch(e) {
    console.log(e);
  }


}

export function* cancleOrder() {
  const account_info = yield select(makeSelectNormal('account'));
  const id = yield select(makeSelectOrderID())
  const token = account_info.data.user.token;
  let formData = new FormData();
  formData.append('token', token);
  formData.append('order_sn', id);
  try{
    const res = yield call(request, api.orderCancle, {
      method: 'POST',
      body: formData
    })

    if (res.status == 1) {
      yield getOrderDetail();
    } else {
      console.log(res)
    }

  } catch(e) {
    // todo error handle
    console.log(e);
  }
}



export default function* ordersSaga() {
  yield takeLatest(GET_ORDER_DETAIL, getOrderDetail);
  yield takeLatest(CONFIRM_RECEIVE, confirmReceive);

}



