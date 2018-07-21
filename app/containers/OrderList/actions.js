import {
  GET_ORDER_LIST,
  GET_ORDER_LIST_SUCCESS,
  NEXT_PAGE,
  PREV_PAGE,
  INIT_PAGINATION,
CANCLE_ORDER,
CANCLE_ORDER_ERROR,
CANCLE_ORDER_SUCCESS,
CONFIRM_RECEIVE
} from './constants';


export function confirmReceive(id) {
  return {
    type: CONFIRM_RECEIVE,
    id
  }
}


export function getOrderList(page) {
  return {
    type: GET_ORDER_LIST,
    page
  }
}

export function getOrderListSuccess(list, current_page, last_page) {
  return {
    type: GET_ORDER_LIST_SUCCESS,
    list,
    current_page,
    last_page
  }
}

export function initPagination(pagination) {
  return {
    type: INIT_PAGINATION,
    pagination
  }
}


export function cancleOrder(sn) {
  return {
    type: CANCLE_ORDER,
    sn
  }
}

export function cancleOrderSuccess() {
  return {
    type: CANCLE_ORDER_SUCCESS
  }
}


export function cancleOrderError() {
  return {
    type: CANCLE_ORDER_ERROR
  }
}
