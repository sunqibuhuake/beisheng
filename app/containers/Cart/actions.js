import {
  GET_CART_DATA,
  DELETE_CART_ITEM
} from './constants';


export function getCartData() {
  return {
    type: GET_CART_DATA
  }
}
