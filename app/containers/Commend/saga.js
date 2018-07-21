/**
 * Gets the repositories of the user from Github
 */

import request from 'utils/request';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_COMMEND_LIST} from './constants';
import {makeSelectNormal} from '../App/selectors'
import {getCommendListSuccess, getCommendListError} from './actions'
import api from '../../utils/api'

export function* fetchCommendList() {

  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  let formData = new FormData();
  formData.append('token', token);

  try {
    const res = yield call(request,api.getRecommendList, {
      method: 'POST',
      body: formData
    })

    if (res.status == 1) {
      yield put(getCommendListSuccess(res.result))
    } else {
      yield  put(getCommendListError())
    }
  } catch(e) {
    yield put(getCommendListError)
  }

}


export default function* commendSaga() {
  yield takeLatest(GET_COMMEND_LIST, fetchCommendList)
}



