/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_CAT, GET_CAT_SUCCESS, CHANGE_ACTIVE_CAT, NEXT_PAGE, PREV_PAGE, GET_PRODUCTS} from './constants';
import request from 'utils/request';
import { makeSelectActive, makeSelectPagination } from './selectors';
import {makeSelectAccount, makeSelectToken} from '../App/selectors'
import {getCatSuccess, getProductsSuccess, initPagination} from './actions'

import {loginSuccess} from '../App/actions'
import api from '../../utils/api'

export function* getCatPageData() {


  const account_info = yield select(makeSelectAccount());
  const token = account_info.data.user.token;

  const formData = new FormData()
  formData.append('token', token);

  const res = yield request(api.fetch_cats, {
    method: 'POST',
    body: formData
  })
  res.result.unshift({
    name: '全部',
    id: 'all'
  })

  if (res.status == 1) {
    yield put(getCatSuccess(res.result));
  } else {
    return false
  }

}

export function* getProducts() {

  const active = yield select(makeSelectActive());
  const active_id = active.id === 'all' ? '' : active.id;
  const pagination = yield select(makeSelectPagination());
  const account_info = yield select(makeSelectAccount());
  const token = account_info.data.user.token;
  let formData = new FormData();
  formData.append('token', token);
  formData.append('cat_id3', active_id);
  const url = api.fetch_products + '?page=' + pagination.index;
  const res = yield request(url,{
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    console.log(res);
    yield put(getProductsSuccess(res.result.data,res.result.current_page,res.result.last_page ))
    //if (active.id !== pagination.id) {
    //  yield put(initPagination({
    //    total: res.result.last_page - 0,
    //    index: res.result.current_page - 0,
    //    id: active.id
    //  }))
    //}
  }

}

//export function* getCode() {
//  // Select username from store
//  const username = yield select(makeSelectUsername());
//  if (!mailcheck.test(username)) {
//    yield put(usernameError('请输入正确格式的邮箱'));
//    yield put(enableVerifycodeSending())
//    return false;
//  }
//  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
//  console.log('SEND REQUEST HERE')
//
//}


export default function* catSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_CAT, getCatPageData);
  //yield takeLatest(GET_PRODUCT, getProducts);
  //yield takeLatest(NEXT_PAGE, getProducts);
  //yield takeLatest(PREV_PAGE, getProducts);
  yield takeLatest(GET_PRODUCTS, getProducts)
}



