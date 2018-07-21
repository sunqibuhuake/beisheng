/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

export const selectOrderDetail = (state) => state.get('orderdetail');

const makeSelectData = () => createSelector(
  selectOrderDetail,
  (state) => state.get('data')
);

const makeSelectError = () => createSelector(
  selectOrderDetail,
  (state) => state.get('error')
);
const makeSelectReady = () => createSelector(
  selectOrderDetail,
  (state) => state.get('ready')
);
const makeSelectOrderID = () => createSelector(
  selectOrderDetail,
  (state) => state.get('id')
);

const makeSelectExpress = () => createSelector(
  selectOrderDetail,
  (state) => state.get('express').toJS()
);

export {
  makeSelectData,
  makeSelectError,
  makeSelectReady,
  makeSelectOrderID,
  makeSelectExpress
};
