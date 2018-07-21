/**
 * Created by sunqi on 2018/5/20.
 */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import PageSection from 'components/Section/PageSection'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {Spin} from 'antd'
import {addCartItem} from '../App/actions'
import {getPaymentData,collect,getProductData, setProductOption, upCount, downCount, changeCount} from './actions'
import {makeSelectMarketPriceChange,makeSelectStoreCount,makeSelectImage,makeSelectPayment,makeSelectPriceChange,makeSelectCount,makeSelectProductDetail, makeSelectProductOption, makeSelectReady} from './selectors'

import reducer from './reducer';
import saga from './saga';
import helper from '../../utils/helper'


import PurchaseOption from './PurchaseOption'

import Pic from './Pic'
import Info from './Info'
import ProductTabs from './ProductTabs'
import Loading from '../../components/Loading'
import './style.css'

export class ProductDetail extends React.PureComponent {

  componentDidMount() {

    const id = this.getProductId()
    this.props.getProductData(id)


    // todo 检测是否存有订单数据
  }

  getProductId() {
    return this.props.match.params.id;
  }


  pay() {
    const price = Math.round((this.props.priceChange - 0) + (this.props.detail.goods.shop_price - 0))
    const info = {
      count: this.props.count,
      price: price,
      options: helper.getSpecName(this.props.option, this.props.detail.goods_spec_list),
      name: this.props.detail.goods.goods_name,
      id: this.props.detail.goods.goods_id,
      img: this.props.detail.goods.original_img,
      payment: this.props.option.payment,
      fenqi: this.props.option.fenqi,
      //discount: (this.props.detail.goods.goods_discount - 0) == 0 ? 0 : Math.round(price * (1 - (this.props.detail.goods.goods_discount - 0))),
      spec_key: helper.getSpecKey(this.props.option),

    }

    window.localStorage.setItem('products', JSON.stringify({type: 'shop',list: [info]}))

    this.props.history.push({
      pathname: '/order'
    })

    //const option = this.props.option;

  }

  render() {

    const styles = {
      root: {
        width: 1002,
        margin: '0 auto'
      },
      pic: {
        width: 520,
        height: 730,
        float: 'left',
      }
    }

    if (!this.props.ready) {
      return (
        <section style={styles.root}>
          <Loading style={{height: 800, paddingTop: 200}}></Loading>
        </section>
      )
    }


    return (
      <section style={styles.root}>
        <Pic
          img={this.props.image || this.props.detail.goods.original_img}
        ></Pic>
        <Info
          store_count={this.props.store_count}
          data={this.props.detail}
          count={this.props.count}
          option={this.props.option}
          setProductOption={this.props.setProductOption}
          priceChange={this.props.priceChange}
          marketPriceChange={this.props.marketPriceChange}
          onClickUp={this.props.onClickUp}
          onClickDown={this.props.onClickDown}
          changeCount={this.props.changeCount}
          addCart={this.props.addCart}
          collect={this.props.collect}
          payment={this.props.payment}
          pay={this.pay.bind(this)}
        ></Info>
        <ProductTabs
          detail={this.props.detail}

        ></ProductTabs>
      </section>
    )


  }
}

ProductDetail.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    addCart: () => dispatch(addCartItem()),
    getProductData: (id) => dispatch(getProductData(id)),
    setProductOption: (e) => {
      const k = e.currentTarget.getAttribute('data-item')
      const v = e.currentTarget.getAttribute('data-itemid')
      const img = e.currentTarget.getAttribute('data-src')
      dispatch(setProductOption(k, v, img))

      if (k !== 'payment' && k!== 'fenqi') {
        dispatch(getPaymentData())
      }
    },


    onClickUp: () => dispatch(upCount()),
    onClickDown: () => dispatch(downCount()),
    changeCount: (evt) => dispatch(changeCount(evt.target.value - 0)),
    collect: () => dispatch(collect())

  };
}

const mapStateToProps = createStructuredSelector({
  detail: makeSelectProductDetail(),
  option: makeSelectProductOption(),
  count: makeSelectCount(),
  ready: makeSelectReady(),
  payment: makeSelectPayment(),
  priceChange: makeSelectPriceChange(),
  marketPriceChange: makeSelectMarketPriceChange(),
  image: makeSelectImage(),
  store_count: makeSelectStoreCount()

});


const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'productDetail', reducer});
const withSaga = injectSaga({key: 'productDetail', saga});


export default compose(
  withReducer,
  withSaga,
  withConnect
)(ProductDetail);

