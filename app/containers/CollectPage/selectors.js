/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCollects = (state) => state.get('collects');


const makeSelectProducts = () => createSelector(
  selectCollects,
  (state) => state.get('products').toJS()
);


const makeSelectPagination = () => createSelector(
  selectCollects,
  (state) => state.get('pagination').toJS()
);

export {
  makeSelectPagination,
  makeSelectProducts
};
