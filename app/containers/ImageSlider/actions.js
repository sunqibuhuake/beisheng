import {
GET_SLIDER_LIST,
GET_SLIDER_LIST_SUCCESS,
GET_SLIDER_LIST_ERROR
} from './constants';





export function getSliderList() {
  return {
    type: GET_SLIDER_LIST
  }
}

export function getSliderListSuccess(data) {
  return {
    type: GET_SLIDER_LIST_SUCCESS,
    data
  }
}

export function getSliderListError() {
  return {
    type: GET_SLIDER_LIST_ERROR
  }
}
