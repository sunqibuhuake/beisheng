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
  CHANGE_USERNAME,
  CHANGE_VERIFY_CODE,
  CLEAR_USERNAME,
  GET_VERIFY_CODE,
  VERIFY_CODE_ERROR,
  VERIFY_CODE_SUCCESS,
  ENABLE_VERIFY_CODE_SENDING,
  DISABLE_VERIFY_CODE_SENDING,
  USERNAME_ERROR,
  RESET_USERNAME,
  RESET_VERIFY_CODE_INPUT,
SHOW_QRCODE,
HIDE_QRCODE
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  verifycode: '',
  qrcode: false,
  username_check: {
    error: false,
    message: ''
  },
  verifycode_check: {
    error: false,
    message: ''
  },
  verifycode_status: 'enable'
});

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state
        .set('username', action.name);
    case CHANGE_VERIFY_CODE:
      return state
        .set('verifycode', action.code)
    case CLEAR_USERNAME:
      return state.set('username', '').setIn(['username_check', 'error'], false).setIn(['username_check', 'message'], '');
    case GET_VERIFY_CODE:
      return state.set('verifycode_status', 60);
    case VERIFY_CODE_SUCCESS:
      return state;
    case ENABLE_VERIFY_CODE_SENDING:
      return state.set('verifycode_status', 'enable');
    case DISABLE_VERIFY_CODE_SENDING:
      return state.set('verifycode_status', action.t);
    case USERNAME_ERROR:
      return state.setIn(['username_check', 'error'], true).setIn(['username_check', 'message'], action.mes);
    case VERIFY_CODE_ERROR:
      return state.setIn(['verifycode_check', 'error'], true).setIn(['verifycode_check', 'message'], action.mes);
    case RESET_USERNAME:
      return state.setIn(['username_check', 'error'], false).setIn(['username_check', 'message'], '');

    case RESET_VERIFY_CODE_INPUT:
      return state.setIn(['verifycode_check', 'error'], false).setIn(['verifycode_check', 'message'], '');


    case SHOW_QRCODE:
          return state.set('qrcode', true);
    case HIDE_QRCODE:
      return state.set('qrcode', false);
    default:
      return state;
  }
}

export default LoginReducer;
