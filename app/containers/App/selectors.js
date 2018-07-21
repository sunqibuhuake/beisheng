/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');


const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
);


const makeSelectOrders = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('orders')
)
const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);
// todo 舍弃
const makeSelectAccountStatus = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['account', 'ready'])
);

const makeSelectRepos = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['userData', 'repositories'])
);

const makeSelectAccount = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('account').toJS()
);

const makeSelectSearch = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('search').toJS()
);
const makeSelectToken = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['account', 'data', 'user', 'token'])
);
const makeSelectPagination = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('pagination').toJS()
);

const makeSelectCart = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('cart').toJS()
)

const makeSelectXInputValue = (path) => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(path.split('.'))
)


const makeSelectValue = (path) => createSelector(
  selectGlobal,
  (globalState) => {
    return globalState.getIn(path.split('.'))
  }
)
const makeSelectNormal = (path) => createSelector(
  selectGlobal,
  (globalState) => {
    try {
      return globalState.getIn(path.split('.')).toJS()
    }
    catch (err) {
      return globalState.getIn(path.split('.'))
    }

    //if (path.split('.').length == 1) {
    //  return globalState.get(path.split('.')[0]).toJS()
    //} else {
    //
    //}
  }
)
const makeSelectCurrentTarget = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('current_target')
)

const makeSelectModalStatus = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('modal_status')
)

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectLocation,
  makeSelectAccountStatus,
  makeSelectAccount,
  makeSelectSearch,
  makeSelectToken,
  makeSelectPagination,
  makeSelectCart,
  makeSelectXInputValue,
  makeSelectValue,
  makeSelectNormal,
  makeSelectCurrentTarget,
  makeSelectModalStatus
};
