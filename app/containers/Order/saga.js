/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import {message} from 'antd'
import $ from 'jquery'
import {
  ORDER_PAY
} from '../App/constants';
import {
  fetchListDataSuccess,
changeSimpleValue,
globalPay
} from '../App/actions';

import request from 'utils/request';
import api from '../../utils/api'
import parse from '../../utils/parse'
import helper from '../../utils/helper'

import { makeSelectNormal, makeSelectValue } from '../App/selectors';


export function* getPaymentLink(order_sn) {

  const account_info = yield select(makeSelectNormal('account'));
  const pay_way = yield select(makeSelectValue('payment.selected.id'))
  //const pay_way = 'kq'
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
      //window.open(res.result.pay_url);
      //helper.openNewLink(res.result.pay_url)
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
    alert('下单失败');


  }


}
export function* pay() {

  const products = JSON.parse(window.localStorage.getItem('products'));

  let url = '';
  // token
  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;

  const formData = new FormData()
  formData.append('token', token);


  const address_id = yield select(makeSelectValue('address.selected'))
  const pay_id = yield select(makeSelectValue('payment.selected.id'))

  const invoice_id = yield select(makeSelectValue('invoice.selected.id'))
  const ask4invoice = yield select(makeSelectValue('invoice.ask4invoice'))

  const delivery_id = yield select(makeSelectValue('delivery.id'))
  const seller_address_id = yield select(makeSelectValue('delivery.seller_address_id'))
  const remark = yield select(makeSelectValue('order.mark'))
  const coupon_id = yield select(makeSelectValue('order.coupon.id'))

  // 判断收货人
  if (!address_id && !seller_address_id) {
    message.warning('无收货信息!')
    yield put(changeSimpleValue('order.processing', false));
    return false;
  }

  formData.append('address_id', seller_address_id ? '' : address_id)
  formData.append('pay_id', pay_id)
  formData.append('invoice_id', ask4invoice ? invoice_id : '')

  formData.append('delivery_id', delivery_id)
  formData.append('seller_address_id', seller_address_id)
  formData.append('remark', remark)

  if (products.type == 'shop') {
    url = api.orderFromShop;
    const item = products.list[0]
    const goods_id = item.id;
    const spec_key = item.spec_key;
    const buy_num = item.count;

    formData.append('goods_id', goods_id)
    formData.append('spec_key', spec_key)
    formData.append('buy_num', buy_num)
    formData.append('user_coupin_id', coupon_id || '')


  }

  if (products.type == 'cart') {
    url = api.orderFromCart;
    let cart_id_arr = products.list.map(l => {
      return l.id
    })
    formData.append('cart_id', cart_id_arr.join(','))
    formData.append('user_coupin_id', coupon_id || '')

  }


  try {
    const res = yield call(request, url, {
      method: 'POST',
      body: formData
    })

    if (res.status == 1) {
      // 订单生成成功,返回order_sn
      yield put(globalPay(res.result.order_sn,pay_id ))
      //yield getPaymentLink(res.result.order_sn)
    } else {
      message.warning(res.msg)
      yield put(changeSimpleValue('order.processing', false))
      return false;
    }
  } catch(err) {
    message.warning(err)
    yield put(changeSimpleValue('order.processing', false))
    console.error(err)
    //window.location.href = '/order/error'
    alert('下单失败');


  }


}

export default function* addressSaga() {
  yield takeLatest(ORDER_PAY, pay);
}
