import { fromJS } from 'immutable';

import {
  GET_ORDER_DETAIL,
  GET_ORDER_DETAIL_ERROR,
  GET_ORDER_DETAIL_SUCCESS,

  CANCLE_ORDER,
  CANCLE_ORDER_ERROR,
  CANCLE_ORDER_SUCCESS,
  CONFIRM_RECEIVE,
  GET_EXPRESS_SUCCESS,
GET_EXPRESS_ERROR

} from './constants';

// The initial state of the App
const initialState = fromJS({
  ready: false,
  error: false,
  data: {},
  id: false,
  express: {
    ready: false,
    error: false,
    error_msg: '',
    data: []
  }
});

function OrderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ORDER_DETAIL:
      return state.set('ready', false).set('error', false).set('id', action.id)

    case GET_ORDER_DETAIL_SUCCESS:
      return state.set('ready', true).set('error', false).set('data', action.data);

    case GET_ORDER_DETAIL_ERROR:
      return state.set('ready', true).set('error', true);

    case GET_EXPRESS_SUCCESS:
          return state.setIn(['express', 'ready'], true)
            .setIn(['express', 'error'], false)
            .setIn(['express', 'data'], action.data)

    case GET_EXPRESS_ERROR:
      return state.setIn(['express', 'ready'], true)
        .setIn(['express', 'error'], true)
        .setIn(['express', 'error_msg'], action.msg)
        .setIn(['express', 'data'], [])



    case CANCLE_ORDER:
      return state;
      //return state.setIn(['orders', 'toHandle'], action.sn);
    case CONFIRM_RECEIVE:
      return state;
      //return state.setIn(['orders', 'toHandle'], action.sn);


    default:
      return state;
  }
}

export default OrderReducer;
