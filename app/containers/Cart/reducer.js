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
  GET_CART_DATA,
  GET_CART_DATA_SUCCESS
} from './constants';

// The initial state of the App
const initialState = fromJS({
  ready: false,
  data: []
});

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART_DATA:
      return state.set('ready', false).set('data', []);
    case GET_CART_DATA_SUCCESS:
      return state.set('ready', true).set('data', action.data);
    default:
      return state;
  }
}

export default cartReducer;
