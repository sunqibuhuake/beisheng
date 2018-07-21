/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCTS} from './constants';
import request from 'utils/request';
import { makeSelectPagination } from './selectors';
import {makeSelectAccount} from '../App/selectors'
import {getProductsSuccess} from './actions'
import api from '../../utils/api'

export function* getProducts() {
  const pagination = yield select(makeSelectPagination());
  const account_info = yield select(makeSelectAccount());
  const token = account_info.data.user.token;
  let formData = new FormData();
  formData.append('token', token);

  const res = yield request(api.getCollects,{
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    console.log(res);
    yield put(getProductsSuccess(res.result.data,res.result.current_page,res.result.last_page ))
  }

}



export default function* catSaga() {
  yield takeLatest(GET_PRODUCTS, getProducts)
}



