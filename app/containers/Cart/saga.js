/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_CART_DATA,DELETE_CART_ITEM, ADD_CART_ITEM, CHANGE_CART_ITEM_COUNT } from '../App/constants';
import {getCartDataSuccess, deleteCartItemSuccess} from '../App/actions'
import {makeSelectAccount, makeSelectCart} from '../App/selectors'
import request from 'utils/request';
import api from '../../utils/api'
import {message} from 'antd'

export function* getCartData() {
  // Select username from store
  const account_info = yield select(makeSelectAccount());
  const token = account_info.data.user.token;
  const formData = new FormData()
  formData.append('token', token);


  const res = yield request(api.getCart, {
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    const list = res.result.map((l, index) => {
      l.uid = (Math.random() + '').split('.')[1]
      return l;
    })
    console.log('请求购物车成功')
    yield put(getCartDataSuccess(list))
  }
}

export function* modifyCart() {
  const account_info = yield select(makeSelectAccount());
  const cartData = yield select(makeSelectCart());
  const modify_count = cartData.modify_count;
  const token = account_info.data.user.token;
  const formData = new FormData()
  formData.append('token', token);
  formData.append('cart_id', modify_count.id);
  formData.append('goods_num', modify_count.count - 0);
  formData.append('spec_key', modify_count.spec_key);

  const res = yield request(api.modifyCart, {
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    console.log('修改成功')
  }

}
export function* deleteItem() {
  const account_info = yield select(makeSelectAccount());
  const cartData = yield select(makeSelectCart());
  const delete_id = cartData.delete_id;
  const token = account_info.data.user.token;
  const formData = new FormData()
  formData.append('token', token);
  formData.append('cart_id', delete_id);

  try {
    const res = yield call(request, api.deleteCart, {
      method: 'POST',
      body: formData
    });
    if (res.status ==1) {
      yield getCartData()
      yield put(deleteCartItemSuccess())

    }
  } catch (err) {
    console.log(err)
    console.log('删除出错')
  }

}

export default function* cartSaga() {

  yield takeLatest(GET_CART_DATA, getCartData);
  yield takeLatest(DELETE_CART_ITEM, deleteItem);
  yield takeLatest(CHANGE_CART_ITEM_COUNT, modifyCart);


  //yield takeLatest(ADD_CART_ITEM, addCart);

}
