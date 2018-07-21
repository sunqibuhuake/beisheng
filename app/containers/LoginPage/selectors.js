/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const makeSelectUsername = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('username')
);
const makeSelectVerifycode = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('verifycode')
);

const makeSelectCodeSendingStatus = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('verifycode_status')
);
const makeSelectUsernameCheck = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('username_check').toJS()
);
const makeSelectVerifycodeCheck = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('verifycode_check').toJS()
);


const makeSelectQrcode = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('qrcode')
);
export {
  selectLogin,
  makeSelectUsername,
  makeSelectVerifycode,
  makeSelectCodeSendingStatus,
  makeSelectUsernameCheck,
  makeSelectVerifycodeCheck,
makeSelectQrcode
};
