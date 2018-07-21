/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest,takeEvery } from 'redux-saga/effects';
import { GET_ACCOUNT_INFO, GLOBAL_PAY } from '../App/constants';
import {message} from 'antd'
import helper from '../../utils/helper'
import {
  getAccountInfoSuccess,
  fetchListDataSuccess
} from '../App/actions';
import request from 'utils/request';
// 选取对象或数组
import { makeSelectNormal,makeSelectValue } from '../App/selectors';
import api from '../../utils/api'


export function* getPaymentLink() {

  const account_info = yield select(makeSelectNormal('account'));
  const order_sn = yield select(makeSelectValue('pay.id'))
  const pay_way = yield select(makeSelectValue('pay.pay_way'))
  const token = account_info.data.user.token;
  const formData = new FormData()
  formData.append('token', token);
  formData.append('pay_way', pay_way);
  formData.append('order_sn', order_sn);



  try {
    const res = yield call(request, api.getPaymentLink, {
      method: 'POST',
      body: formData
    })

    if (res.status == 1) {
      helper.clearOrder();

      if (res.result.pay_way == 'kq') {
        window.location.href = res.result.pay_url;
      } else {
        window.location.href = `/qrcode?type=${pay_way}&order=${order_sn}&qrcode=${res.result.pay_url}`
      }
    }
  } catch(err) {

    console.error(err)
    //window.location.href = '/order/error'
    message.warning('下单失败');


  }


}

export function* getDeliveryList() {
  // Select username from store
  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  const formData = new FormData()
  formData.append('token', token);
  const res = yield request(api.getDelivery, {
    method: 'POST',
    body: formData
  })
  if (res.status == 1 || true) {
    yield put(fetchListDataSuccess(['delivery'], res.result));
  }

}


export function* loadData() {

  const info = yield select(makeSelectNormal('info'))

  if (info.ready) {
    return false
  }
  const account_info = yield select(makeSelectNormal('account'));
  if (!account_info.ready ) {
    return false
  }
  const token = account_info.data.user.token;
  let formData = new FormData();
  formData.append('token', token);

  try {
    const res = yield request(api.getAccountInfo, {
      method: 'POST',
      body:formData
    })


    if (res.status == -101 || res.status == -100 || res.status == -102) {
      window.localStorage.setItem('account', '');
      window.localStorage.setItem('products','');
      window.location.href = '/login/expired'
    }

    if (res.status == 1) {
      yield put(getAccountInfoSuccess(res.result))
      yield getDeliveryList();
    }
  } catch(e) {
    console.log(e)

  }

}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeEvery(GET_ACCOUNT_INFO, loadData);
  yield takeEvery(GLOBAL_PAY, getPaymentLink);

}
