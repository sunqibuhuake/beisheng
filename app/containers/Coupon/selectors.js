/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCoupons = (state) => state.get('coupon');

const makeSelectCouponData = () => createSelector(
  selectCoupons,
  (state) => state.get('data')
);
const makeSelectCouponError = () => createSelector(
  selectCoupons,
  (state) => state.get('error')
);
const makeSelectCouponReady = () => createSelector(
  selectCoupons,
  (state) => state.get('ready')
);

export {
  makeSelectCouponData,
  makeSelectCouponReady,
  makeSelectCouponError
};
