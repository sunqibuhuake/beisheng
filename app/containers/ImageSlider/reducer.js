import { fromJS } from 'immutable';

import {
  GET_SLIDER_LIST,
GET_SLIDER_LIST_ERROR,
GET_SLIDER_LIST_SUCCESS
} from './constants';

// The initial state of the App
const initialState = fromJS({
  ready: false,
  error: false,
  data: false
});

function sliderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SLIDER_LIST:
      return state.set('ready', false).set('error', false).set('data', false)

    case GET_SLIDER_LIST_SUCCESS:
      return state.set('ready', true).set('error', false).set('data', action.data);

    case GET_SLIDER_LIST_ERROR:
      return state.set('ready', true).set('error', true)


    default:
      return state;
  }
}

export default sliderReducer;
