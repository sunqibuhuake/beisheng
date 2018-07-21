/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  GET_CAT,
  GET_CAT_SUCCESS,
  GET_PRODUCTS,
  CHANGE_ACTIVE_CAT,
  GET_PRODUCTS_SUCCESS,
  PREV_PAGE,
  NEXT_PAGE,
INIT_PAGINATION
} from './constants';

// The initial state of the App
const initialState = fromJS({
  cat: [],
  active: {
    name: '',
    id: ''
  },
  pagination: {
    total: 1,
    index: 1,
    id: '#'
  },
  products: []
});

function CatReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAT:
      return state;
    case GET_CAT_SUCCESS:
      const active = {
        name: '',
        id: ''
      }
      if (action.cat.length > 0) {
        active.name = action.cat[0].name;
        active.id = action.cat[0].cat_id;
      }
      return state.set('cat', action.cat).set('active', active);
    case GET_PRODUCTS:
      return state;
    case GET_PRODUCTS_SUCCESS:
      return state.set('products', action.products);
    case CHANGE_ACTIVE_CAT:
      return state.set('active', action.active)
        .setIn(['pagination', 'index'], 1)
        .setIn(['pagination', 'total'], 1)
        .setIn(['pagination', 'id'], '#');

    case INIT_PAGINATION:
          return state.set('pagination', fromJS(action.pagination))
    case NEXT_PAGE:
      let np = (state.getIn(['pagination', 'index']) - 0) + 1;
      const total = state.getIn(['pagination', 'total']) - 0;
      if (np > total) {
         np = total;
      }
      return state.setIn(['pagination', 'index'], np);
    case PREV_PAGE:
      let pp = (state.getIn(['pagination', 'index']) - 0) - 1;
      if (pp < 1) {
        pp = 1;
      }
      return state.setIn(['pagination', 'index'], pp);
    default:
      return state;
  }
}

export default CatReducer;
