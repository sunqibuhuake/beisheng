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
  cat: {
    ready: false,
    data: []
  },
  active: {
    name: '',
    id: ''
  },
  products: {
    ready: false,
    data: []
  },
  pagination: {
    index: 1,
    total: 1
  }
});

function CatReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAT:
      return state.setIn(['cat', 'ready'], false);
    case GET_CAT_SUCCESS:
      //const active = {
      //  name: '',
      //  id: ''
      //}
      //if (action.cat.length > 0) {
      //  active.name = action.cat[0].name;
      //  active.id = action.cat[0].id;
      //}
      return state.setIn(['cat', 'data'], action.cat)
        .setIn(['cat', 'ready'], true);


    case GET_PRODUCTS:
      const cat_list = state.getIn(['cat', 'data']);
      let active_cat = null;
      cat_list.forEach(c => {
        if (c.id == action.active_cat_id) {
          active_cat = c;
        }
      })
      if (!active_cat) {
        active_cat = {
          name: '未知',
          id: action.active_cat_id
        }
      }

      return state.setIn(['products', 'ready'], false)
        .setIn(['active', 'id'], active_cat.id)
        .setIn(['active', 'name'], active_cat.name)
        .setIn(['pagination', 'index'], action.page);

    case GET_PRODUCTS_SUCCESS:
      return state.setIn(['products', 'ready'], true)
        .setIn(['products', 'data'], action.products)
        .setIn(['pagination', 'index'], action.current_page)
        .setIn(['pagination', 'total'], action.last_page);


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
