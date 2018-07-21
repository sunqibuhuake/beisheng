import {
  GET_PRODUCT_DATA,
  GET_PRODUCT_DATA_SUCCESS,
  GET_PRODUCT_DATA_ERROR,
  SET_PRODUCT_OPTION,
  ADD_COUNT,
  MINUS_COUNT,
CHANGE_COUNT,
COLLECT,
COLLECT_SUCCESS,
  GET_PAYMENT_DATA,
GET_PAYMENT_DATA_SUCCESS
} from './constants';


export function collect(id) {
  return {
    type: COLLECT,
    id
  }
}

export function collectSuccess(id) {
  return {
    type: COLLECT_SUCCESS,
    id
  }
}
export function getProductData(id) {
  return {
    type: GET_PRODUCT_DATA,
    id
  }
}

export function addCount() {
  return {
    type: ADD_COUNT
  }
}

export function minusCount() {
  return {
    type: MINUS_COUNT
  }
}

export function getProductDataSuccess(data) {
  return {
    type: GET_PRODUCT_DATA_SUCCESS,
    data
  }
}

export function setProductOption(key, value, src) {
  return {
    type: SET_PRODUCT_OPTION,
    key,
    value,
    src
  }
}

export function upCount() {
  return {
    type: ADD_COUNT,
  }
}
export function downCount() {
  return {
    type: MINUS_COUNT,
  }
}
export function changeCount(num) {
  return {
    type: CHANGE_COUNT,
    num
  }
}

export function getPaymentData() {
  return {
    type: GET_PAYMENT_DATA

  }
}
export function getPaymentDataSuccess(payment) {
  return {
    type: GET_PAYMENT_DATA_SUCCESS,
    payment
  }
}
