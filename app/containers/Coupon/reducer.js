import { fromJS } from 'immutable';

import {
  GET_COUPON_LIST,
GET_COUPON_LIST_ERROR,
GET_COUPON_LIST_SUCCESS,
GET_ENABLE_COUPON
} from './constants';

// The initial state of the App
const initialState = fromJS({
  ready: false,
  error: false,
  data: false
});

function couponReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ENABLE_COUPON:
      return state.set('ready', false).set('error', false).set('data', false)
    case GET_COUPON_LIST:
      return state.set('ready', false).set('error', false).set('data', false)
    case GET_COUPON_LIST_SUCCESS:
      return state.set('ready', true).set('error', false).set('data', action.data);
    case GET_COUPON_LIST_ERROR:
      return state.set('ready', true).set('error', true)

    default:
      return state;
  }
}

export default couponReducer;
