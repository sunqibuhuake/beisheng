/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectOrders = (state) => state.get('orders');

const makeSelectOrderList = () => createSelector(
  selectOrders,
  (state) => state.get('orders').toJS()
);


const makeSelectPagination = () => createSelector(
  selectOrders,
  (state) => state.get('pagination').toJS()
);

const makeSelectOrderSn = () => createSelector(
  selectOrders,
  (state) => state.getIn(['orders','toHandle'])
);
export {
  makeSelectPagination,
  makeSelectOrderList,
  makeSelectOrderSn
};
