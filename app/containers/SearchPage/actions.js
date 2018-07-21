
import {
  GET_CAT,
GET_CAT_SUCCESS,
GET_PRODUCTS,
CHANGE_ACTIVE_CAT,
GET_PRODUCTS_SUCCESS,
NEXT_PAGE,
PREV_PAGE,
INIT_PAGINATION
} from './constants';


export function getCat() {
  return {
    type: GET_CAT
  }
}
export function getCatSuccess(cat) {
  return {
    type: GET_CAT_SUCCESS,
    cat
  }

}

export function changeActiveCat(active) {
  return {
    type: CHANGE_ACTIVE_CAT,
    active
  }
}

export function getProducts() {
  return {
    type: GET_PRODUCTS
  }
}

export function getProductsSuccess(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  }
}

export function initPagination(pagination) {
  return {
    type: INIT_PAGINATION,
    pagination
  }
}
export function nextPage() {
  return {
    type: NEXT_PAGE
  }
}
export function prevPage() {
  return {
    type: PREV_PAGE
  }
}
