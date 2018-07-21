/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCart = (state) => state.get('selectCart');


const makeSelectCartItems = () => createSelector(
  selectCart,
  (state) => state.get('data')
);
const makeSelectCartReady = () => createSelector(
  selectCart,
  (state) => state.get('ready')
);


export {
  makeSelectCartItems,
  makeSelectCartReady
};
