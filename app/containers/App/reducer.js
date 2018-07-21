/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import initData from '../../data/init'
import helper from '../../utils/helper'
import {
  resetOrderInvoiceModify,
  getInvoiceListSuccess,
  setInvoiceItem,
  setInvoiceType,
  resetInvoice,
  setInvoiceEditStatus,
  resetInvoiceForm
} from '../../utils/stateHandler'

import {
  GLOBAL_PAY,
  CHANGE_NORMAL_VALUE,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,

  SEARCH,
  SEARCH_ERROR,
  SEARCH_SUCCESS,
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
  RESET_ADDRESS_VALID,

  ADD_INVOICE,
  ADD_INVOICE_SUCCESS,
  GET_INVOICE,
  GET_INVOICE_SUCCESS,
  EDIT_INVOICE,
  DELETE_INVOICE,
  DELETE_INVOICE_SUCCESS,
  SET_DEFAULT_INVOICE,
  SELECT_INVOICE_TYPE,
  SELECT_INVOICE_ITEM,
  RESET_ORDER_INVOICE_MODIFY,
  SET_ORDER_INVOICE,
  ADD_ORDER_INVOICE,
  HIDE_INVOICE_MODAL,
  RESET_ORDER_FORM,
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

  SELECT_COUPON,
  BUILD_ORDER_SUCCESS

} from './constants';

// The initial state of the App

const account = window.localStorage.getItem('account');

if (account && JSON.parse(account)) {
  const account_obj = JSON.parse(account)
  if (account_obj && account_obj.user && account_obj.user.token) {
    initData.account = {
      ready: true,
      data: account_obj
    }
    const key = account_obj.seller.qiao;
    helper.insertBaiduShangQiao(key)

  }
}
const initialState = fromJS(initData);

function appReducer(state = initialState, action) {
  switch (action.type) {

    case GLOBAL_PAY:
      return state.setIn(['pay', 'id'], action.id)
        .setIn(['pay', 'pay_way'], action.pay_way);
    case CHANGE_NORMAL_VALUE:
      return state.setIn(action.path.split('.'), fromJS(action.data));
    case LOGIN:
      // 进入loading 状态
      // 消除全局错误
      console.log('START LOGIN')
      return state
        .set('loading', true)
        .set('error', false);

    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .setIn(['account', 'ready'], true)
        .setIn(['account', 'data'], action.account);

    case SEARCH:
      return state
        .setIn(['search', 'ready'], false)
        .setIn(['search', 'result'], [])
        .setIn(['search', 'key'], action.key)
        .setIn(['pagination', 'index'], action.page)
        .setIn(['pagination', 'total'], 1);


    case SEARCH_SUCCESS:
      return state
        .setIn(['search', 'ready'], true)
        .setIn(['search', 'result'], action.result)
        .setIn(['pagination', 'index'], action.current_page)
        .setIn(['pagination', 'total'], action.last_page);

    case SEARCH_ERROR:
      return state;

    case SET_PAGINATION:
      return state.setIn([action.key, 'pagination', 'index'], action.index)
        .setIn([action.key, 'pagination', 'total'], action.total);

    case ADD_CART_ITEM:
      return state;

    case GET_CART_DATA:
      return state.setIn(['cart', 'ready'], false);

    case GET_CART_DATA_SUCCESS:
      return state.setIn(['cart', 'ready'], true)
        .setIn(['cart', 'data'], fromJS(action.data.map(c => {
          c['bs-checked'] = true;
          return c;
        })));

    case CHANGE_CART_ITEM_COUNT:

      const _indexOfListToUpdate = state.getIn(['cart', 'data']).findIndex(item => {
        return item.get('uid') === action.key;
      });
      const spec_key = state.getIn(['cart', 'data', _indexOfListToUpdate, 'spec_key']);
      const _currentValue = state.getIn(['cart', 'data', _indexOfListToUpdate, 'goods_num']);
      const cart_id = state.getIn(['cart', 'data', _indexOfListToUpdate, 'id']);

      let value = _currentValue + (action.mode - 0);

      if (value < 1) {
        value = 1
      }

      return state
        .setIn(['cart', 'data', _indexOfListToUpdate, 'goods_num'], value)
        .setIn(['cart', 'modify_count', 'id'], cart_id)
        .setIn(['cart', 'modify_count', 'count'], value)
        .setIn(['cart', 'modify_count', 'spec_key'], spec_key)

    case DELETE_CART_ITEM:
      return state.setIn(['cart', 'delete_id'], action.id);
    //const indexOfListToUpdate = state.getIn(['cart', 'data']).findIndex(item => {
    //  return item.get('uid') === action.id;
    //});
    //return state
    //  .setIn(['cart', 'data', indexOfListToUpdate, 'visibility'], 'hidden');

    case DELETE_CART_ITEM_SUCCESS:
      return state.setIn(['cart', 'delete_id'], '');

    case CHANGE_CART_ITEM_CHECKBOX:

      const __indexOfListToUpdate = state.getIn(['cart', 'data']).findIndex(item => {
        return item.get('uid') === action.uid;
      });
      const __currentValue = state.getIn(['cart', 'data', __indexOfListToUpdate, 'bs-checked']);
      return state
        .setIn(['cart', 'data', __indexOfListToUpdate, 'bs-checked'], (__currentValue) ? false : true);


    case ON_INPUT_CHANGE:
      return state.setIn(action.path.split('.'), action.value);


    case FETCH_LIST_DATA:
      const ready_path = action.path.concat(['ready'])
      const error_path = action.path.concat(['error'])
      return state.setIn(ready_path, false)
        .setIn(error_path, false);

    case FETCH_LIST_DATA_SUCCESS:
      const _ready_path = action.path.concat(['ready'])
      const _error_path = action.path.concat(['error'])
      const _list_path = action.path.concat(['list'])
      return state.setIn(_ready_path, true)
        .setIn(_error_path, false)
        .setIn(_list_path, action.list);

    case CHANGE_SIMPLE_VALUE:
      return state.setIn(action.path.split('.'), action.value);


    case GET_CITY_LIST_BY_PROV:
      return state.setIn(['address', 'form', 'city', 'value'], '')
        .setIn(['address', 'form', 'city', 'list'], fromJS([{}]))

    case GET_CITY_LIST_BY_PROV_SUCCESS:
      return state
        .setIn(['address', 'form', 'city', 'list'], fromJS(action.list))
        .setIn(['address', 'form', 'city', 'value'], action.list[0].id)

    case GET_DISTRICT_LIST_BY_CITY:
      return state.setIn(['address', 'form', 'district', 'value'], '')
        .setIn(['address', 'form', 'district', 'list'], fromJS([{}]))

    case GET_DISTRICT_LIST_BY_CITY_SUCCESS:
      return state
        .setIn(['address', 'form', 'district', 'list'], fromJS(action.list))
        .setIn(['address', 'form', 'district', 'value'], action.list[0].id)


    case GET_ADDRESS_LIST:
      return state.setIn(['address', 'ready'], true)
        .setIn(['address', 'error'], false)

    case GET_ADDRESS_LIST_SUCCESS:
      let selected_id = '';
      action.list.forEach(l => {
        if (l.is_default == 1) {
          selected_id = l.address_id;
        }
      })
      return state.setIn(['address', 'ready'], true)
        .setIn(['address', 'error'], false)
        .setIn(['address', 'list'], action.list)
        .setIn(['address', 'selected'], selected_id);

    case GET_ADDRESS_LIST_ERROR:


    case ADD_ADDRESS:
      return state.setIn(['address', 'processing'], true);
    case ADD_ADDRESS_SUCCESS:
      return state.setIn(['address', 'processing'], false)
        .setIn(['address', 'event', 'name'], false)
        .setIn(['address', 'event', 'id'], false)
        .setIn(['address', 'modal'], false)
        .setIn(['address', 'edit'], false)
        .setIn(['address', 'delete'], false)
        .setIn(['address', 'form', 'province', 'value'], 1)
        .setIn(['address', 'form', 'city', 'value'], '')
        .setIn(['address', 'form', 'district', 'value'], '')
        .setIn(['address', 'form', 'consignee'], '')
        .setIn(['address', 'form', 'address'], '')
        .setIn(['address', 'form', 'mobile'], '')
        .setIn(['address', 'form', 'is_default'], true);

    case ADD_ADDRESS_ERROR:
      return state.setIn(['address', 'processing'], false);


    case RESET_ADDRESS_FORM:
      return state
        .setIn(['address', 'form', 'province', 'value'], 1)
        .setIn(['address', 'form', 'city', 'value'], '')
        .setIn(['address', 'form', 'district', 'value'], '')
        .setIn(['address', 'form', 'consignee'], '')
        .setIn(['address', 'form', 'address'], '')
        .setIn(['address', 'form', 'mobile'], '')
        .setIn(['address', 'form', 'is_default'], true)
        .setIn(['address', 'valid'], fromJS({pass: true}));


    case RESET_ADDRESS_VALID:
      return state.setIn(['address', 'valid'], fromJS({pass: true}));


    case DELETE_ADDRESS:
      return state.setIn(['address', 'is_processing'], true).setIn(['address', 'delete'], action.id);

    case DELETE_ADDRESS_SUCCESS:
      return state.setIn(['address', 'is_processing'], false).setIn(['address', 'delete'], false);

    case EDIT_ADDRESS:

      const address_index = state.getIn(['address', 'list']).findIndex(item => {
        return item.address_id === action.id;
      });
      const address_item = state.getIn(['address', 'list'])[address_index]
      return state.setIn(['address', 'edit'], action.id)
        .setIn(['address', 'modal'], 'edit')
        .setIn(['address', 'form', 'province', 'value'], address_item.province)
        .setIn(['address', 'form', 'city', 'value'], address_item.city)
        .setIn(['address', 'form', 'district', 'value'], address_item.district)
        .setIn(['address', 'form', 'consignee'], address_item.consignee)
        .setIn(['address', 'form', 'address'], address_item.address)
        .setIn(['address', 'form', 'mobile'], address_item.mobile)
        .setIn(['address', 'form', 'is_default'], address_item.is_default ? true : false);


    case SET_DEFAULT_ADDRESS:
      return state.setIn(['address', 'event', 'name'], 'SET_DEFAULT')
        .setIn(['address', 'event', 'id'], action.id);

    case ADD_INVOICE:
      return state;
    case ADD_ORDER_INVOICE:
      return state;
    case ADD_INVOICE_SUCCESS:
      return resetInvoice(state, action);


    case GET_INVOICE:
      return state.setIn(['invoice', 'ready'], false)
        .setIn(['invoice', 'error'], false);

    case GET_INVOICE_SUCCESS:
      return getInvoiceListSuccess(state, action)
    //case RELOAD_INVOICE_SUCCESS:
    //      return reloadInvoiceSuccess(state,action)
    case EDIT_INVOICE:
      return setInvoiceEditStatus(state, action);

    case DELETE_INVOICE:
      return state.setIn(['invoice', 'event', 'name'], 'delete')
        .setIn(['invoice', 'event', 'id'], action.id)
    case DELETE_INVOICE_SUCCESS:
      return state.setIn(['invoice', 'event', 'name'], false)
        .setIn(['invoice', 'event', 'id'], false)

    case SET_DEFAULT_INVOICE:
      return state.setIn(['invoice', 'event', 'name'], 'SET_DEFAULT')
        .setIn(['invoice', 'event', 'id'], action.id);

    case SELECT_INVOICE_TYPE:
      // 设置类型 设置选中id
      return setInvoiceType(state, action);

    case SELECT_INVOICE_ITEM:
      // 设置类型 设置选中id
      return setInvoiceItem(state, action);

    case RESET_ORDER_INVOICE_MODIFY:
      return resetOrderInvoiceModify(state);

    case SET_ORDER_INVOICE:
      const id = state.getIn(['invoice', 'modify']);
      return state.setIn(['invoice', 'selected', 'id'], id);

    case RESET_ORDER_FORM:
      return resetInvoiceForm(state)
    case RESET_INVOICE_VALID:
      return state.setIn(['invoice', 'valid'], fromJS({pass: true}))


    case HIDE_INVOICE_MODAL:
      return state.setIn(['invoice', 'modal', 'normal'], false)
        .setIn(['invoice', 'modal', 'spec'], false)

    case GET_DELIVERY:
      return state.setIn(['delivery', 'ready'], false)
        .setIn(['delivery', 'error'], false)
    case SELECT_DELIVERY:

      const list = state.getIn(['delivery', 'list']);
      let item = null;
      list.forEach(d => {
        if (d.delivery_id == action.id) {
          item = d;
        }
      })
      if (item.list && item.list.length > 0) {
        const options = item.list.map(l => {
          l.value = l.seller_address_id;
          l.name = l.province_name + l.city_name + l.address;
          return l;
        })

        return state.setIn(['delivery', 'id'], action.id)
          .setIn(['delivery', 'options'], options)
          .setIn(['delivery', 'seller_address_id'], options[0].seller_address_id);
      } else {
        return state.setIn(['delivery', 'id'], action.id)
          .setIn(['delivery', 'options'], false)
          .setIn(['delivery', 'seller_address_id'], '')
      }


    case GET_PAYMENT_DATA:
      return state.setIn(['payment', 'ready'], false).setIn(['payment', 'error'], false)
    case GET_PAYMENT_DATA_SUCCESS:
      return state.setIn(['payment', 'ready'], true)
        .setIn(['payment', 'error'], false)
        .setIn(['payment', 'list'], action.list)
        .setIn(['payment', 'selected', 'id'], action.list[0].type);


    case ORDER_PAY:
      return state.setIn(['order', 'processing'], true);

    case
    GET_ACCOUNT_INFO:
      return state;
    case
    GET_ACCOUNT_INFO_SUCCESS:
      return state.setIn(['info', 'data'], action.info);

    case
    EDIT_ACCOUNT_INFO:
      return state.setIn(['info', 'modal'], false);
    case
    EDIT_ACCOUNT_INFO_SUCCESS:
      return state.setIn(['info', 'modal'], false);
    case
    START_EDIT_ACCOUNT_INFO:
      return state.setIn(['info', 'modal'], true);

    case
    SELECT_COUPON:
      const cur_id = state.getIn(['order', 'coupon', 'id']);
      if (cur_id == action.id) {
        return state.setIn(['order', 'coupon', 'id'], '')
          .setIn(['order', 'coupon', 'money'], 0)
      } else {
        return state.setIn(['order', 'coupon', 'id'], action.id)
          .setIn(['order', 'coupon', 'money'], action.money);
      }

    case BUILD_ORDER_SUCCESS:
          return state.setIn(['order', 'sn'], action.sn);
    default:
      return state;
  }
}

export default appReducer;
