/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCat = (state) => state.get('cat');

const makeSelectCat = () => createSelector(
  selectCat,
  (catState) => catState.get('cat')
);
const makeSelectProducts = () => createSelector(
  selectCat,
  (catState) => catState.get('products')
);

const makeSelectActive = () => createSelector(
  selectCat,
  (catState) => catState.get('active')
);

const makeSelectPagination = () => createSelector(
  selectCat,
  (catState) => catState.get('pagination').toJS()
);

export {
  selectCat,
  makeSelectCat,
  makeSelectActive,
  makeSelectPagination,
  makeSelectProducts
};
