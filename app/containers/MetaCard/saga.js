/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  START_EDIT_ACCOUNT_INFO,
EDIT_ACCOUNT_INFO
} from '../App/constants';
import {
editAccountInfoSuccess,
getAccountInfoSuccess
} from '../App/actions';

import request from 'utils/request';
import api from '../../utils/api'
import parse from '../../utils/parse'

import { makeSelectNormal, makeSelectValue } from '../App/selectors';

export function* loadData() {
  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  let formData = new FormData();
  formData.append('token', token);
  const res = yield request(api.getAccountInfo, {
    method: 'POST',
    body:formData
  })

  console.log(res);

  if (res.status == 1) {
    yield put(getAccountInfoSuccess(res.result))
  }
}


export function* edit() {
  // Select username from store
  const account_info = yield select(makeSelectNormal('account'));
  const form = yield select(makeSelectNormal('info.form'));
  const token = account_info.data.user.token;
  const formData = new FormData()
  formData.append('token', token);
  formData.append('nickname', form.nickname);
  formData.append('mobile', form.mobile);
  formData.append('job', form.job);
  formData.append('head_pic', form.head_pic)

  try{
    const res = yield call(request, api.modifyAccountInfo, {
      method: 'post',
      body: formData
    })

    if (res.status == 1 ) {
      yield put(editAccountInfoSuccess());
      yield loadData()

    }
  } catch(e) {
    console.log(e)
  }

}


export default function* addressSaga() {
  yield takeLatest(EDIT_ACCOUNT_INFO, edit);

}
