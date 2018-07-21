import { fromJS } from 'immutable';

import {
  GET_ORDER_LIST,
  GET_ORDER_LIST_SUCCESS,
  PREV_PAGE,
  NEXT_PAGE,
} from '../App/constants';

// The initial state of the App
const initialState = fromJS({
  orders: {
    ready: false,
    list: false
  },
  pagination: {
    index: 1,
    total: 1
  }
});

function OrderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ORDER_LIST:
      return state.setIn(['orders', 'ready'], false)
        .setIn(['pagination', 'index'], action.page);
    case GET_ORDER_LIST_SUCCESS:
      return state.setIn(['orders', 'ready'], true)
        .setIn(['orders', 'list'], action.list)
        .setIn(['pagination', 'index'], action.current_page)
        .setIn(['pagination', 'total'], action.last_page);


    default:
      return state;
  }
}

export default OrderReducer;
