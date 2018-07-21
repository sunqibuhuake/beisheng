/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
 GET_DELIVERY
} from '../App/constants';
import {
  fetchListDataSuccess,
} from '../App/actions';

import request from 'utils/request';
import api from '../../utils/api'
import parse from '../../utils/parse'

import { makeSelectNormal, makeSelectValue } from '../App/selectors';


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

export default function* addressSaga() {
  yield takeLatest(GET_DELIVERY, getDeliveryList);
}
