/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_ORDER_LIST, CANCLE_ORDER, CONFIRM_RECEIVE} from './constants';
import request from 'utils/request';
import { makeSelectPagination, makeSelectOrderSn } from './selectors';
import {makeSelectNormal, makeSelectValue} from '../App/selectors'
import {
  getOrderListSuccess,
  cancleOrderSuccess
} from './actions'
import api from '../../utils/api'


export function* confirmReceive() {

  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  const sn = yield select(makeSelectOrderSn())

  let formData = new FormData();
  formData.append('token', token);
  formData.append('order_sn', sn);

  const res = yield request(api.confirmReceive,{
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    yield put(cancleOrderSuccess())
    yield getOrderList();
  } else {
    console.log(res)
    //yield put(cancleOrderSuccess )
  }


}

export function* getOrderList() {

  const pagination = yield select(makeSelectPagination());
  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  let formData = new FormData();
  formData.append('token', token);

  const res = yield request(api.getOrderList + '?page=' + pagination.index,{
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    console.log(res);
    yield put(getOrderListSuccess(res.result.data,res.result.current_page,res.result.last_page ))
  }

}

export function* cancleOrder() {
  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  let formData = new FormData();
  const sn = yield select(makeSelectOrderSn())

  formData.append('token', token);
  formData.append('order_sn', sn);

  try{
    const res = yield call(request, api.orderCancle, {
      method: 'POST',
      body: formData
    })

    if (res.status == 1) {
      yield put(cancleOrderSuccess())
      yield getOrderList();
    } else {
      console.log(res)
      //yield put(cancleOrderSuccess )
    }

  } catch(e) {
    // todo error handle
    console.log(e);
  }
}



export default function* ordersSaga() {
  yield takeLatest(GET_ORDER_LIST, getOrderList);
  yield takeLatest(CANCLE_ORDER, cancleOrder);
  yield takeLatest(CONFIRM_RECEIVE, confirmReceive);

}



