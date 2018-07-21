import {
GET_COUPON_LIST,
GET_COUPON_LIST_SUCCESS,
GET_COUPON_LIST_ERROR,
GET_ENABLE_COUPON,
} from './constants';


export function getEnableCoupon() {
  return {
    type: GET_ENABLE_COUPON
  }
}


export function getCouponList() {
  return {
    type: GET_COUPON_LIST
  }
}

export function getCouponListSuccess(data) {
  return {
    type: GET_COUPON_LIST_SUCCESS,
    data
  }
}

export function getCouponListError() {
  return {
    type: GET_COUPON_LIST_ERROR
  }
}


