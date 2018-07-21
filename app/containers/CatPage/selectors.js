/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCat = (state) => state.get('cat');

const makeSelectCat = () => createSelector(
  selectCat,
  (catState) => catState.get('cat').toJS()
);
const makeSelectProducts = () => createSelector(
  selectCat,
  (catState) => catState.get('products').toJS()
);

const makeSelectActive = () => createSelector(
  selectCat,
  (catState) => catState.get('active').toJS()
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
