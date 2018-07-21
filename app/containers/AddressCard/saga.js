/**
 * Gets the repositories of the user from Github
 */
import {message} from 'antd'
import {addressValidator} from '../../utils/validator'
import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  GET_ADDRESS_LIST,
  GET_ADDRESS_LIST_SUCCESS,
  GET_CITY_LIST_BY_PROV,
  GET_DISTRICT_LIST_BY_CITY,
  ADD_ADDRESS,
  DELETE_ADDRESS,
  SET_DEFAULT_ADDRESS
} from '../App/constants';
import {
getAddressListSuccess,
getAddressListError,
  fetchListDataSuccess,
  getCityListSuccess,
  getDistrictListSuccess,
  addAddressSuccess,
addAddressError,
  deleteAddressSuccess,
changeNormalValue,
changeSimpleValue,
//getAddressListError
} from '../App/actions';

import request from 'utils/request';
import api from '../../utils/api'
import parse from '../../utils/parse'

import { makeSelectNormal, makeSelectValue } from '../App/selectors';


export function* getAddresslist() {
  // Select username from store
  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;

  const formData = new FormData()
  formData.append('token', token);

  try {
    const res = yield call(request,api.getAddressList, {
      method: 'POST',
      body: formData
    });
    // status = 1 #成功, 有数据记录
    // status = -1 #成功, 无数据记录

    if (res.status == 1 || res.status == -1) {
      yield put(getAddressListSuccess(res.result || []));
    }
  } catch (err) {
    yield put(getAddressListError());
  }




}
export function* getCitys() {
  // Select username from store
  const id = yield select(makeSelectValue('address.form.province.value'));
  const formData = new FormData()
  formData.append('parent_id', id);
  const res = yield request(api.getRegions, {
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    yield put(getCityListSuccess(parse.convertRegionList(res.result)))
    yield getDistricts()
  }

}

export function* getDistricts() {
  // Select username from store
  const id = yield select(makeSelectValue('address.form.city.value'));
  const formData = new FormData()
  formData.append('parent_id', id);
  const res = yield request(api.getRegions, {
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    yield put(getDistrictListSuccess(parse.convertRegionList(res.result)))
  }

}

export function* addAddress() {
  const mode = yield select(makeSelectValue('address.modal'))
  const address_id = yield select(makeSelectValue('address.edit'))
  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  const form = yield select(makeSelectNormal('address.form'))

  const valid = addressValidator(form)
  yield put(changeNormalValue('address.valid', valid))

  if (!valid.pass) {
    yield put(addAddressError())
    return false;
  }

  const formData = new FormData()
  formData.append('consignee', form.consignee);
  formData.append('province', form.province.value);
  formData.append('city', form.city.value);
  formData.append('district', form.district.value);
  formData.append('address', form.address);
  formData.append('mobile', form.mobile);
  formData.append('is_default', form.is_default ? 1 : 0);
  formData.append('token', token);


  if (mode == 'edit') {
    formData.append('address_id', address_id)

    const res = yield request(api.editAddress, {
      method: 'POST',
      body: formData
    })

    if (res.status == 1) {
      yield put(addAddressSuccess())
      yield getAddresslist();
    } else if (res.status == -1) {
      message.error(res.msg);
      yield put(addAddressError())
    }
  }


  if (mode == 'add') {
    const res = yield request(api.addAddress, {
      method: 'POST',
      body: formData
    })



    if (res.status == 1) {
      yield put(addAddressSuccess())
      yield put(changeSimpleValue('address.modal', false))
      yield getAddresslist();
    } else if (res.status == -1) {
      message.error(res.msg);
      yield put(addAddressError())

    }

  }


}

export function* deleteAddress() {
  const id = yield select(makeSelectValue('address.delete'))
  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  const formData = new FormData()
  formData.append('token', token);
  formData.append('address_id', id);

  const res = yield request(api.delAddress, {
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    yield put(deleteAddressSuccess())
    yield getAddresslist();
  }

}

export function* setDefault() {
  const address_event = yield select(makeSelectNormal('address.event'))
  const id = address_event.id;
  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  const form = yield select(makeSelectNormal('address.form'))
  const formData = new FormData()
  formData.append('address_id', id);
  formData.append('token', token);

  const res = yield request(api.setDefaultAddress, {
    method: 'POST',
    body: formData
  })

  if (res.status == 1) {
    yield put(addAddressSuccess())
    yield getAddresslist();
  }


}

export default function* addressSaga() {
  yield takeLatest(GET_ADDRESS_LIST, getAddresslist);
  yield takeLatest(GET_CITY_LIST_BY_PROV, getCitys);
  yield takeLatest(GET_DISTRICT_LIST_BY_CITY, getDistricts);
  yield takeLatest(ADD_ADDRESS, addAddress);
  yield takeLatest(DELETE_ADDRESS, deleteAddress);
  yield takeLatest(SET_DEFAULT_ADDRESS, setDefault);

}
