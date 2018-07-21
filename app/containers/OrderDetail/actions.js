import {
  GET_ORDER_DETAIL,
  GET_ORDER_DETAIL_ERROR,
  GET_ORDER_DETAIL_SUCCESS,

  CANCLE_ORDER,
  CONFIRM_RECEIVE,
  GET_EXPRESS_SUCCESS,
  GET_EXPRESS_EMPTY,
  GET_EXPRESS_ERROR
} from './constants';

export function getExpressError(msg) {
  return {
    type: GET_EXPRESS_ERROR,
    msg
  }
}
export function getExpressSuccess(data) {
  return {
    type: GET_EXPRESS_SUCCESS,
    data
  }

}
export function confirmReceive(sn) {
  return {
    type: CONFIRM_RECEIVE,
    sn
  }
}

export function cancleOrder(sn) {
  return {
    type: CANCLE_ORDER,
    sn
  }
}


export function getOrderDetail(id) {
  return {
    type: GET_ORDER_DETAIL,
    id
  }
}
export function getOrderDetailSuccess(data) {
  return {
    type: GET_ORDER_DETAIL_SUCCESS,
    data
  }
}
