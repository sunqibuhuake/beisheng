/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */


import {message} from 'antd'
import { fromJS } from 'immutable';
import helper from '../../utils/helper'
import {
  GET_PRODUCT_DATA,
  GET_PRODUCT_DATA_ERROR,
  GET_PRODUCT_DATA_SUCCESS,
  SET_PRODUCT_OPTION,
  ADD_COUNT,
  MINUS_COUNT,
  CHANGE_COUNT,
  COLLECT,
  COLLECT_SUCCESS,
  GET_PAYMENT_DATA,
  GET_PAYMENT_DATA_SUCCESS

} from './constants';

// The initial state of the App
const initialState = fromJS({
  ready: false,
  id: '',
  count: 1,
  data: {},
  price_change: 0,
  market_price_change: 0,
  sum: 0,
  option: {},
  spec_key: '',
  payment: {
    ready: false,
    data: false
  },
  image: '',
  store_count: 999  //初始库存
});

function detailReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_DATA:
      return state.set('ready', false).set('id', action.id);
    case GET_PRODUCT_DATA_SUCCESS:

      // 设置默认选中项
      const spec_list = action.data.goods_spec_list
      const option_default = {}
      let default_match_str = ''
      let default_image = '';
      let default_price_change = 0
      let default_store_count = action.data.goods.store_count - 0

      if (spec_list.length > 0) {
        const match_list = action.data.goods_price_group
        spec_list.forEach(l => {
            option_default[l.spec_name] = l.spec_list[0].item_id + '';
          }
        )
        default_match_str = helper.getSpecKey(option_default)

        default_image = helper.getImageSrc(spec_list)
        default_price_change = match_list[default_match_str].price - 0;
        default_store_count = match_list[default_match_str].store_count - 0;

      }


      return state
        .set('data', fromJS(action.data))
        .set('ready', true)
        .set('option', fromJS(option_default))
        .set('spec_key', default_match_str)
        .set('price_change', default_price_change)
        .set('store_count', default_store_count )
        .set('image', default_image);


    case SET_PRODUCT_OPTION:
      // todo 没有属性的时候这个部分怎么处理
      //let cur_price_change = state.get('price_change')
      //let price_change = -1
      const options = state.get('option').toJS();
      options[action.key] = action.value;
      const match_str = helper.getSpecKey(options)
      const matchHelper = state.getIn(['data', 'goods_price_group']).toJS()
      const price_change = matchHelper[match_str].price - 0
      const market_price_change = matchHelper[match_str].market_price - 0
      const store_count = matchHelper[match_str].store_count - 0
      const cur_option_value = state.getIn(['option', action.key])
      const cur_payment = state.getIn(['option', 'payment'])
      let cur_count = state.get('count')
      // 如果是修改支付方式为分期的话,把数量限制为一个
      let cur_image = state.get('image');
      if (action.key == '颜色') {
        cur_image = action.src;
      }
      if (action.key == 'fenqi' || action.key == 'payment') {
        cur_count = 1;
      }

      if (cur_payment) {
        cur_count = 1;
      }


      if (cur_option_value == action.value && (action.key == 'fenqi' || action.key == 'payment')) {
        return state.setIn(['option', action.key], '')
          .set('spec_key', match_str)
          .set('price_change', price_change)
          .set('market_price_change', market_price_change)
          .set('count', cur_count)
          .set('store_count', store_count)

      } else {
        return state.setIn(['option', action.key], action.value)
          .set('spec_key', match_str)
          .set('price_change', price_change)
          .set('market_price_change', market_price_change)
          .set('count', cur_count).set('image', cur_image)
          .set('store_count', store_count)
      }


    case ADD_COUNT:
      const store_count_ = state.get('store_count');
      let count_ = state.get('count') - 0
      if (count_ + 1 > store_count_) {
        message.warning('超出库存,无法购买更多!');
        return state;
      }
      return state.set('count', count_ + 1);
    case MINUS_COUNT:
      let count = state.get('count') - 0;
      return state.set('count', (count - 1 < 1) ? 1 : (count - 1));

    case CHANGE_COUNT:
      const _cur_payment = state.getIn(['option', 'payment'])
      const next_count = action.num < 1 ? 1 : action.num

      return state.set('count', _cur_payment ? 1 : next_count)


    case COLLECT:
      return state;
    case COLLECT_SUCCESS:
      const cur = state.getIn(['data', 'goods', 'is_collect']);
      return state.setIn(['data', 'goods', 'is_collect'], cur == 1 ? 0 : 1)

    case GET_PAYMENT_DATA:
      return state.setIn(['payment', 'ready'], false)
    case GET_PAYMENT_DATA_SUCCESS:
      return state.setIn(['payment', 'ready'], true)
        .setIn(['payment', 'data'], action.payment)

    default:
      return state;
  }
}

export default detailReducer;
