/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectSliders = (state) => state.get('slider');

const makeSelectSliderData = () => createSelector(
  selectSliders,
  (state) => state.get('data')
);
const makeSelectSliderError = () => createSelector(
  selectSliders,
  (state) => state.get('error')
);
const makeSelectSliderReady = () => createSelector(
  selectSliders,
  (state) => state.get('ready')
);

export {
  makeSelectSliderData,
  makeSelectSliderReady,
  makeSelectSliderError
};
