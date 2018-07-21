/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCommends = (state) => state.get('commend');

const makeSelectCommendData = () => createSelector(
  selectCommends,
  (state) => state.get('data')
);
const makeSelectCommendError = () => createSelector(
  selectCommends,
  (state) => state.get('error')
);
const makeSelectCommendReady = () => createSelector(
  selectCommends,
  (state) => state.get('ready')
);

export {
  makeSelectCommendData,
  makeSelectCommendReady,
  makeSelectCommendError
};
