import {
  GET_PRODUCTS,
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

export function getProducts(active_cat_id, page) {
  return {
    type: GET_PRODUCTS,
    active_cat_id,
    page
  }
}

export function getProductsSuccess(products, current_page, last_page) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products,
    current_page,
    last_page
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
