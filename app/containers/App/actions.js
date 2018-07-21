import {
  GLOBAL_PAY,
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,

  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,

  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR,

  SET_PAGINATION,

  ADD_CART_ITEM,
  ADD_CART_ITEM_SUCCESS,
  DELETE_CART_ITEM,
  DELETE_CART_ITEM_SUCCESS,
  GET_CART_DATA,
  GET_CART_DATA_SUCCESS,
  CHANGE_CART_ITEM_COUNT,
  CHANGE_CART_ITEM_CHECKBOX,

  ON_INPUT_CHANGE,
  FETCH_LIST_DATA,
  FETCH_LIST_DATA_SUCCESS,
  CHANGE_SIMPLE_VALUE,

  GET_CITY_LIST_BY_PROV,
  GET_CITY_LIST_BY_PROV_SUCCESS,
  GET_DISTRICT_LIST_BY_CITY,
  GET_DISTRICT_LIST_BY_CITY_SUCCESS,
  GET_ADDRESS_LIST,
  GET_ADDRESS_LIST_SUCCESS,
  GET_ADDRESS_LIST_ERROR,

  ADD_ADDRESS,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_ERROR,
  DELETE_ADDRESS,
  DELETE_ADDRESS_SUCCESS,
  EDIT_ADDRESS,
  EDIT_ADDRESS_SUCCESS,
  SET_DEFAULT_ADDRESS,
  RESET_ADDRESS_FORM,

  ADD_INVOICE,
  ADD_INVOICE_SUCCESS,
  GET_INVOICE,
  GET_INVOICE_SUCCESS,
  EDIT_INVOICE,
  EDIT_INVOICE_SUCCESS,
  DELETE_INVOICE,
  DELETE_INVOICE_SUCCESS,
  SET_DEFAULT_INVOICE,
  RESET_INVOICE_VALID,

  GET_DELIVERY,
  GET_DELIVERY_SUCCESS,

  SELECT_DELIVERY,

  GET_PAYMENT_DATA,
  GET_PAYMENT_DATA_SUCCESS,
  ORDER_PAY,
  ORDER_PAY_SUCCESS,

  GET_ACCOUNT_INFO,
  GET_ACCOUNT_INFO_SUCCESS,
  EDIT_ACCOUNT_INFO,
  EDIT_ACCOUNT_INFO_SUCCESS,
  START_EDIT_ACCOUNT_INFO,

  ORDER_EDIT_INVOICE,
  ORDER_EDIT_INVOICE_SUCCESS,
  SELECT_INVOICE_TYPE,
  SELECT_INVOICE_ITEM,
  RESET_ORDER_INVOICE_MODIFY,
  SET_ORDER_INVOICE,
  HIDE_INVOICE_MODAL,
  ADD_ORDER_INVOICE,
  RELOAD_INVOICE_SUCCESS,
  RESET_ORDER_FORM,
  SELECT_COUPON,
  CHANGE_NORMAL_VALUE,
  RESET_ADDRESS_VALID,
  BUILD_ORDER_SUCCESS

} from './constants';

export function buildOrderSuccess(sn) {

  return {
    type: BUILD_ORDER_SUCCESS,
    sn
  }

}
export function resetAddressValid() {
  return {
    type: RESET_ADDRESS_VALID
  }
}

export function resetInvoiceValid() {
  return {
    type: RESET_INVOICE_VALID
  }
}

export function resetAddressForm() {
  return {
    type: RESET_ADDRESS_FORM
  }
}
export function changeNormalValue(path, data) {
  return {
    type: CHANGE_NORMAL_VALUE,
    path, data
  }

}
export function selectCoupon(id, money) {
  return {
    type: SELECT_COUPON,
    id, money
  }
}

export function globalPay(id, pay_way) {
  return {
    type: GLOBAL_PAY,
    id, pay_way
  }
}
export function resetInvoiceForm() {
  return {
    type: RESET_ORDER_FORM
  }
}
export function reloadInvoiceSuccess() {
  return {
    type: RELOAD_INVOICE_SUCCESS
  }
}
export function addOrderInvoice() {
  return {
    type: ADD_ORDER_INVOICE
  }
}
export function hideInvoiceModal() {
  return {
    type: HIDE_INVOICE_MODAL
  }
}
export function setOrderInvoice(id) {
  return {
    type: SET_ORDER_INVOICE,
    id
  }
}
export function resetOrderInvoiceModify() {
  return {
    type: RESET_ORDER_INVOICE_MODIFY
  }
}


export function selectInvoiceItem(id) {
  return {
    type: SELECT_INVOICE_ITEM,
    id
  }
}
export function selectInvoiceType(type_num) {
  return {
    type: SELECT_INVOICE_TYPE,
    type_num
  }
}

export function orderEditInvoice() {
  return {
    type: ORDER_EDIT_INVOICE,
  }
}


export function orderEditInvoiceSuccess() {
  return {
    type: ORDER_EDIT_INVOICE_SUCCESS,
  }
}
export function startEditAccountInfo() {
  return {
    type: START_EDIT_ACCOUNT_INFO
  }
}
export function editAccountInfo() {
  return {
    type: EDIT_ACCOUNT_INFO
  }
}

export function editAccountInfoSuccess() {
  return {
    type: EDIT_ACCOUNT_INFO_SUCCESS
  }
}

export function getAccountInfo() {
  return {
    type: GET_ACCOUNT_INFO
  }
}

export function getAccountInfoSuccess(info) {
  return {
    type: GET_ACCOUNT_INFO_SUCCESS,
    info
  }
}

export function orderPay() {
  return {
    type: ORDER_PAY
  }
}
export function getPaymentData() {
  return {
    type: GET_PAYMENT_DATA,
  }
}
export function getPaymentDataSuccess(list) {
  return {
    type: GET_PAYMENT_DATA_SUCCESS,
    list
  }
}
export function selectDelivery(id) {
  return {
    type: SELECT_DELIVERY,
    id
  }
}
export function getDelivery() {
  return {
    type: GET_DELIVERY
  }
}

export function setDefaultInvoice(id) {
  return {
    type: SET_DEFAULT_INVOICE,
    id
  }
}
export function deleteInvoiceSuccess() {
  return {
    type: DELETE_INVOICE_SUCCESS
  }
}

export function deleteInvoice(id) {
  return {
    type: DELETE_INVOICE,
    id
  }
}

export function editInvoice(id, mode) {
  return {
    type: EDIT_INVOICE,
    id, mode
  }
}

export function editInvoiceSuccess() {
  return {
    type: EDIT_INVOICE_SUCCESS
  }
}
export function getInvoice() {
  return {
    type: GET_INVOICE
  }
}

export function getInvoiceSuccess(data, mode) {
  return {
    type: GET_INVOICE_SUCCESS,
    data, mode
  }
}

export function addInvoice() {
  return {
    type: ADD_INVOICE
  }
}

export function addInvoiceSuccess() {
  return {
    type: ADD_INVOICE_SUCCESS
  }
}

export function setDefaultAddress(id) {
  return {
    type: SET_DEFAULT_ADDRESS,
    id
  }
}
export function editAddress(id) {
  return {
    type: EDIT_ADDRESS,
    id
  }
}

export function editAddressSuccess() {
  return {
    type: EDIT_ADDRESS_SUCCESS
  }
}
export function deleteAddress(id) {
  return {
    type: DELETE_ADDRESS,
    id
  }
}

export function deleteAddressSuccess(id) {
  return {
    type: DELETE_ADDRESS_SUCCESS,
    id
  }
}


export function addAddress() {
  return {
    type: ADD_ADDRESS
  }
}

export function addAddressSuccess() {
  return {
    type: ADD_ADDRESS_SUCCESS
  }
}
export function addAddressError() {
  return {
    type: ADD_ADDRESS_ERROR
  }
}
export function getAddressList() {
  return {
    type: GET_ADDRESS_LIST
  }
}
export function getAddressListSuccess(list) {
  return {
    type: GET_ADDRESS_LIST_SUCCESS,
    list
  }
}

export function getAddressListError() {
  return {
    type: GET_ADDRESS_LIST_ERROR
  }
}


export function getCityList() {
  return {
    type: GET_CITY_LIST_BY_PROV
  }
}

export function getCityListSuccess(list) {
  return {
    type: GET_CITY_LIST_BY_PROV_SUCCESS,
    list
  }
}

export function getDistrictList() {
  return {
    type: GET_DISTRICT_LIST_BY_CITY
  }
}

export function getDistrictListSuccess(list) {
  return {
    type: GET_DISTRICT_LIST_BY_CITY_SUCCESS,
    list
  }
}

export function changeSimpleValue(path, value) {
  return {
    type: CHANGE_SIMPLE_VALUE,
    path, value
  }
}
export function fetchListData(path) {
  return {
    type: FETCH_LIST_DATA,
    path
  }
}
export function fetchListDataSuccess(path, list) {
  return {
    type: FETCH_LIST_DATA_SUCCESS,
    path, list
  }
}

export function onInputChange(path, value) {
  return {
    type: ON_INPUT_CHANGE,
    path, value
  }
}

export function changeCartItemCheckbox(uid) {
  return {
    type: CHANGE_CART_ITEM_CHECKBOX,
    uid
  }
}
export function changeCartItemCount(key, mode) {
  return {
    type: CHANGE_CART_ITEM_COUNT,
    key, mode
  }
}

export function addCartItem() {
  return {
    type: ADD_CART_ITEM,
  }
}
export function getCartData() {
  return {
    type: GET_CART_DATA
  }
}

export function getCartDataSuccess(data) {
  return {
    type: GET_CART_DATA_SUCCESS,
    data
  }
}
export function deleteCartItem(id) {
  return {
    type: DELETE_CART_ITEM,
    id
  }
}

export function deleteCartItemSuccess() {
  return {
    type: DELETE_CART_ITEM_SUCCESS
  }
}


export function login() {
  return {
    type: LOGIN,
  };
}

export function loginSuccess(account) {
  return {
    type: LOGIN_SUCCESS,
    account
  }
}


export function search(key, page) {
  return {
    type: SEARCH,
    key,
    page
  }
}
export function searchSuccess(result, current_page, last_page) {
  return {
    type: SEARCH_SUCCESS,
    result,
    current_page,
    last_page
  }
}

export function searchError() {
  return {
    type: SEARCH_ERROR
  }
}

export function setPagination({key, index, total}) {
  return {
    type: SET_PAGINATION,
    key, index, total
  }
}


/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
