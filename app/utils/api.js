/**
 * Created by sunqi on 2018/5/23.
 */
//const base = 'http://manage.employeechoice.cn/api/'
//export const HOST = 'http://manage_test.employeechoice.cn'
let HOST = 'http://manage_test.employeechoice.cn'

const h = window.location.host;
if (h == 'www.employeechoice.cn' || h == 'employeechoice.cn') {
  HOST = 'http://manage.employeechoice.cn'
} else {
  HOST = 'http://manage_test.employeechoice.cn'
}
HOST = 'http://manage.employeechoice.cn'

//export HOST;
export default {
  login: HOST + '/api/user/loginByEmail',
  verifycode: HOST + '/api/user/sendEmailCode',
  fetch_cats: HOST + '/api/goods/goodsCategoryList',
  fetch_products: HOST + '/api/goods/goodsList',
  host: HOST,
  search: HOST + '/api/goods/search',
  product_detail: HOST + '/api/goods/goodsInfo',
  addCart: HOST + '/api/v1/shopping_cart/addGoods',
  deleteCart: HOST + '/api/v1/shopping_cart/delGoods',
  getCart: HOST + '/api/v1/shopping_cart',
  modifyCart: HOST + '/api/v1/shopping_cart/change',
  getAddressList: HOST + '/api/v1/user/getAddressList',
  getRegions: HOST + '/api/v1/address',
  addAddress: HOST + '/api/v1/user/addaddress',
  delAddress: HOST + '/api/v1/user/delAddress',
  editAddress: HOST + '/api/v1/user/editaddress',
  setDefaultAddress: HOST + '/api/v1/user/setDefaultAddress',
  collectGoodsOrNo: HOST + '/api/goods/collectGoodsOrNo',
  getCollects: HOST + '/api/v1/user/getGoodsCollect',
  addInvoice: HOST + '/api/v1/cart/addinvoice',
  getInvoiceList: HOST + '/api/v1/cart/invoiceList',
  editInvoice: HOST + '/api/v1/cart/editinvoice',
  setDefaultInvoice: HOST + '/api/v1/cart/setDefaultInvoice',
  delInvoice: HOST + '/api/v1/cart/delInvoice',
  getDelivery: HOST + '/api/v1/order/deliveryWay',
  payWay: HOST + '/api/v1/order/payWay',
  orderFromShop: HOST + '/api/v1/order/build',
  orderFromCart: HOST + '/api/v1/order/buildByCart',
  getOrderList: HOST + '/api/v1/order',
  getOrderDetail: HOST + '/api/v1/order/detail',
  getAccountInfo: HOST + '/api/v1/user/accInfo',
  modifyAccountInfo: HOST + '/api/user/updateUserInfo',
  getCouponList: HOST + '/api/v1/user/getCouponList',
  getRecommendList: HOST + '/api/v1/goods/recommend',
  getSliderImageList: HOST + '/api/v1/ad/getimg',
  orderCancle: HOST + '/api/v1/order/cancel',
  getPaymentLink: HOST + '/api/v1/pay',
  getEnableCoupon: HOST + '/api/v1/coupon/ableUse',
  confirmReceive: HOST + '/api/v1/order/receiveGoods',
  upload: HOST + '/api/v1/oss/upload',
  queryPeymentStatus: HOST + '/api/v1/pay/queryPayStatus',
  express: HOST + '/api/v1/order/queryExpressInfo'
}
