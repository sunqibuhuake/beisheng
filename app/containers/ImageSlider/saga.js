/**
 * Gets the repositories of the user from Github
 */

import request from 'utils/request';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_SLIDER_LIST} from './constants';
import {makeSelectNormal} from '../App/selectors'
import {getSliderListSuccess, getSliderListError} from './actions'
import api from '../../utils/api'

export function* fetchSliderList() {

  const account_info = yield select(makeSelectNormal('account'));
  const token = account_info.data.user.token;
  const store_id = account_info.data.store.store_id;
  let formData = new FormData();
  formData.append('token', token);
  formData.append('store_id', store_id);

  try {
    const res = yield call(request,api.getSliderImageList, {
      method: 'POST',
      body: formData
    })

    if (res.status == 1) {
      yield put(getSliderListSuccess(res.result))
    } else {
      yield  put(getSliderListError())
    }
  } catch(e) {
    yield put(getSliderListError)
  }

}


export default function* sliderSaga() {
  yield takeLatest(GET_SLIDER_LIST, fetchSliderList)
}



