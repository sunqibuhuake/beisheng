/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
//import { GET_CAT, GET_CAT_SUCCESS, CHANGE_ACTIVE_CAT, NEXT_PAGE, PREV_PAGE } from './constants';
import request from 'utils/request';
//import { makeSelectActive, makeSelectPagination } from './selectors';
//import {getCatSuccess, getProductsSuccess, initPagination} from './actions'
import {SEARCH} from '../App/constants'
import {search, searchSuccess, searchError} from '../App/actions'
import {makeSelectSearch, makeSelectAccount, makeSelectPagination} from '../App/selectors'
import api from '../../utils/api'

export function* search_func() {
  const searchInfo = yield select(makeSelectSearch())
  const pagination = yield select(makeSelectPagination())
  const account_info = yield select(makeSelectAccount())
  const key = searchInfo.key;
  if (key === '') {
    return false;
  }

  const url  = api.search + '?keyword=' + key + '&page=' + pagination.index;

  const formData = new FormData()

  formData.append('token', account_info.data.user.token);

  const res = yield request(url, {
    method: 'POST',
    body: formData
  })

  console.log(res);

  if (res.status == 1) {
    if (res.result.data) {
      yield put(searchSuccess(res.result.data, res.result.current_page, res.result.last_page))
    } else {
      yield put(searchSuccess([], 1, 1))
    }
  }
}



export default function* searchSaga() {
  yield takeLatest(SEARCH, search_func);

}



