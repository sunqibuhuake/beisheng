import {
GET_COMMEND_LIST,
GET_COMMEND_LIST_SUCCESS,
GET_COMMEND_LIST_ERROR
} from './constants';





export function getCommendList() {
  return {
    type: GET_COMMEND_LIST
  }
}

export function getCommendListSuccess(data) {
  return {
    type: GET_COMMEND_LIST_SUCCESS,
    data
  }
}

export function getCommendListError() {
  return {
    type: GET_COMMEND_LIST_ERROR
  }
}
