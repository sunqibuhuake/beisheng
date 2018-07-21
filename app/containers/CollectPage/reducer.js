
import { fromJS } from 'immutable';

import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  PREV_PAGE,
  NEXT_PAGE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  products: {
    ready: false,
    data: []
  },
  pagination: {
    index: 1,
    total: 1
  }
});

function CollectsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return state.setIn(['products', 'ready'], false);
        //.setIn(['pagination', 'index'], action.page);

    case GET_PRODUCTS_SUCCESS:
      return state.setIn(['products', 'ready'], true)
        .setIn(['products', 'data'], action.products)
        //.setIn(['pagination', 'index'], action.current_page)
        //.setIn(['pagination', 'total'], action.last_page);

    default:
      return state;
  }
}

export default CollectsReducer;
