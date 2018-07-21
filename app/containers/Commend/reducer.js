import { fromJS } from 'immutable';

import {
  GET_COMMEND_LIST,
GET_COMMEND_LIST_ERROR,
GET_COMMEND_LIST_SUCCESS
} from './constants';

// The initial state of the App
const initialState = fromJS({
  ready: false,
  error: false,
  data: false
});

function commendReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMEND_LIST:
      return state.set('ready', false).set('error', false).set('data', false)

    case GET_COMMEND_LIST_SUCCESS:
      return state.set('ready', true).set('error', false).set('data', action.data);

    case GET_COMMEND_LIST_ERROR:
      return state.set('ready', true).set('error', true)


    default:
      return state;
  }
}

export default commendReducer;
