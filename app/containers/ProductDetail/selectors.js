/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectProductDetail = (state) => state.get('productDetail');


const makeSelectProductDetail = () => createSelector(
  selectProductDetail,
  (detailState) => detailState.get('data').toJS()
);


const makeSelectProductOption = () => createSelector(
  selectProductDetail,
  (detailState) => {
    try {
      return detailState.get('option').toJS()
    } catch(err){
      return detailState.get('option')
    }
  }
);

const makeSelectProductId = () => createSelector(
  selectProductDetail,
  (detailState) => detailState.get('id')
);
const makeSelectReady = () => createSelector(
  selectProductDetail,
  (detailState) => detailState.get('ready')
);

const makeSelectCount = () => createSelector(
  selectProductDetail,
  (detailState) => detailState.get('count')
);
const makeSelectPriceChange = () => createSelector(
  selectProductDetail,
  (detailState) => detailState.get('price_change')
);
const makeSelectMarketPriceChange = () => createSelector(
  selectProductDetail,
  (detailState) => detailState.get('market_price_change')
);
const makeSelectSpecKey = () => createSelector(
  selectProductDetail,
  (detailState) => detailState.get('spec_key')
);

const makeSelectPayment = () => createSelector(
  selectProductDetail,
  (detailState) => detailState.get('payment').toJS()
);

const makeSelectImage = () => createSelector(
  selectProductDetail,
  (state) => state.get('image')
);
const makeSelectStoreCount = () => createSelector(
  selectProductDetail,
  (state) => state.get('store_count')
);
export {
  selectProductDetail,
  makeSelectProductDetail,
  makeSelectProductOption,
  makeSelectProductId,
  makeSelectReady,
  makeSelectCount,
  makeSelectPriceChange,
  makeSelectSpecKey,
  makeSelectPayment,
makeSelectImage,
  makeSelectStoreCount,
  makeSelectMarketPriceChange
};
