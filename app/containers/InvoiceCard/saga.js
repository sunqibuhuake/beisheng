/**
 * Gets the repositories of the user from Github
 */
import {normalInvoiceValidator,specInvoiceValidator} from '../../utils/validator'
import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  ADD_INVOICE,
GET_INVOICE,
GET_INVOICE_SUCCESS,
DELETE_INVOICE,
SET_DEFAULT_INVOICE,
SET_ORDER_INVOICE,
ADD_ORDER_INVOICE
} from '../App/constants';
import {
  addInvoiceSuccess,
  fetchListDataSuccess,
  deleteInvoiceSuccess,
  getInvoiceSuccess,
changeNormalValue

} from '../App/actions';

import request from 'utils/request';
import api from '../../utils/api'
import parse from '../../utils/parse'
import validator from '../../utils/validator'

import { makeSelectNormal, makeSelectValue } from '../App/selectors';


export function* getInvoiceList(mode) {
  // Select username from store
  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;

  const formData = new FormData()
  formData.append('token', token);
  const res = yield request(api.getInvoiceList, {
    method: 'POST',
    body: formData
  })

  console.log(res);
  if (res.status == 1) {
    yield put(getInvoiceSuccess(res.result, mode));
  }

}

export function* updateInvoice(mode) {

  const type = yield select(makeSelectValue('invoice.type'))
  const normal_prop = {
    invoice_title: true,
    taxpayer: true,
    is_default: true,

  }

  const spec_prop = {
    invoice_title: true,
    taxpayer: true,
    company: true,
    regaddress: true,
    regmobile: true,
    kaihubank: true,
    bankacc: true,
    is_default: true,
  }

  let prop_heper = (type == 1) ? normal_prop : spec_prop;

  const event = yield select(makeSelectNormal('invoice.event'));
  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  const form = yield select(makeSelectNormal('invoice.form'))
  const is_default = form.is_default;
  form.is_default = is_default ? 1 : 0;
  const formData = new FormData()
  formData.append('token', token);
  const final_form = {};

  for (let prop in prop_heper) {
    if (!form[prop]) {
      console.log('缺少字段 ' + prop);
    } else {
      final_form[prop] = form[prop]
    }
  }

  //todo valid

  let valid = {};
  if (type == 1) {
    valid = normalInvoiceValidator(form)
  }
  if (type == 2) {
    valid = specInvoiceValidator(form)
  }

  if (!valid.pass) {
    yield put(changeNormalValue('invoice.valid', valid))
    return false;
  }


  for(let prop in final_form) {

    formData.append(prop, final_form[prop])

  }


  let url = ''

  if (event.name == 'edit') {
    url = api.editInvoice;
    formData.append('invoice_id', event.id)
  }

  if (event.name == 'add') {
    url = api.addInvoice;
    formData.append('type', type);
  }
  const res = yield request(url, {
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    yield put(addInvoiceSuccess())
    yield getInvoiceList(mode);
  }

}

export function* deleteInvoice() {
  const event = yield select(makeSelectNormal('invoice.event'))
  const id = event.id;
  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  const formData = new FormData()
  formData.append('token', token);
  formData.append('invoice_id', id);

  const res = yield request(api.delInvoice, {
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    yield put(deleteInvoiceSuccess())
    yield getInvoiceList();
  }

}

export function* setDefault() {
  const event = yield select(makeSelectNormal('invoice.event'))
  const id = event.id;
  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  const form = yield select(makeSelectNormal('address.form'))
  const formData = new FormData()
  formData.append('invoice_id', id);
  formData.append('token', token);
  formData.append('type', '1');

  const res = yield request(api.setDefaultInvoice, {
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    yield put(addInvoiceSuccess())
    yield getInvoiceList();
  }

}

export default function* addressSaga() {
  yield takeLatest(ADD_INVOICE, updateInvoice.bind(null, 'profile'));
  yield takeLatest(ADD_ORDER_INVOICE, updateInvoice.bind(null,'order'));
  yield takeLatest(GET_INVOICE, getInvoiceList);
  yield takeLatest(SET_ORDER_INVOICE, updateInvoice.bind(null, 'order'));
  yield takeLatest(SET_DEFAULT_INVOICE, setDefault);
  yield takeLatest(DELETE_INVOICE, deleteInvoice);


}
