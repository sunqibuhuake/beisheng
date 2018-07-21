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
import Loading from '../../components/Loading'
import  {makeSelectCart}from '../App/selectors'
import Card from '../../components/Card'
import CartHeader from './CartHeader'
import CartItem from './CartItem'

import {Col, Row} from 'antd'
import {Link} from 'react-router-dom'


import RecommendGrid from '../Commend'

//import reducer from './reducer';
import saga from './saga';

import {getCartData, addCartItem, changeCartItemCount, deleteCartItem, changeCartItemCheckbox} from '../App/actions'
import './style.css';

export class Cart extends React.PureComponent {

  componentDidMount() {

    this.props.loadData()

    // todo 检测是否存有订单数据
  }

  pay() {

    const cart = this.props.cart;

    const arr = [];
    cart.data.forEach(c => {
      if (c['bs-checked']) {
        let price = Math.round((c.member_goods_price - 0) * (c.goods_discount - 0));
        const spec_key_name_arr = c.spec_key_name ? c.spec_key_name : []
        arr.push(
          {
            name: c.goods_name,
            count: c.goods_num,
            options: spec_key_name_arr.map(l => {
              return {
                name: l.name,
                value: l.item
              }
            }),
            spec_key: c.spec_key,
            id: c.id,
            price: price,
            img: c.original_img,
            payment: 'wechat',
            fenqi: ''
          }
        )
      }
    })

    if (arr.length > 0) {
      window.localStorage.setItem('products',JSON.stringify({
        list: arr,
        type: 'cart'
      }))
      this.props.history.push({
        pathname: '/order'
      })
    }

  }
  sum() {
    const result = {
      count: 0,
      price: 0

    }
    this.props.cart.data.forEach(c => {
      if (c['bs-checked'] && c.visibility !== 'hidden') {
        result.count += c.goods_num;
        result.price += (c.goods_num - 0) * Math.round((c.member_goods_price - 0) * (c.goods_discount - 0))
      }
    })

    return result
  }

  render() {

    const { ready, data} = this.props.cart;
    //if (!ready) {
    //  return (
    //    <Loading></Loading>
    //  )
    //}

    const styles = {
      root: {
        background: 'white',
      },
      pic: {
        width: 520,
        height: 730,
        float: 'left',
      }
    }

    const sum_result = this.sum();
    return (
      <PageSection style={styles.root}>
        <section style={{paddingTop: 48}}>
          <Card>
            <div></div>
            <CartHeader></CartHeader>

            {data.map(item => (
              <CartItem
                visibility={item.visibility}
                key={Math.random()}
                item={item}
                onClickCollect={null}
                onClickDelete={this.props.deleteItem}
                changeItemCount={this.props.changeItemCount}
                changeItemCheckbox={this.props.changeItemCheckbox}
              ></CartItem>
            ))}

            <div style={{
            height: 64,
            borderTop: '1px solid #e6e6e6',
            paddingTop:12

            }}>
              <Row>
                <Col span={6} offset={14} style={{textAlign: 'right', marginTop: -4}}>
                  <div>
                    已选商品
                    <span
                      style={{
                       fontSize:18,
                       color: 'rgb(0, 113, 201)'
                      }}
                    >{sum_result.count}</span>
                    件,合计:
                  </div>
                  <div style={{fontSize: 22}}>RMB
                    <span style={{paddingLeft: 12}}>{sum_result.price}</span></div>
                </Col>
                <Col span={4}>
                  <div
                    onClick={this.pay.bind(this)}
                    style={{
                    height: 48,
                    width: 128,
                    float: 'right',
                    background: '#0071C9',
                    color: 'white',
                    lineHeight: '48px',
                    fontSize: 16,
                    textAlign: 'center',
                    cursor: 'pointer'
                    }}>
                    结算

                  </div>
                </Col>

              </Row>

            </div>
          </Card>

        </section>
        <RecommendGrid></RecommendGrid>
      </PageSection>
    )


  }
}

Cart.propTypes = {};

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(getCartData()),
    changeItemCount: (e) => {
      const key = e.currentTarget.getAttribute('data-uid')
      const mode = e.currentTarget.getAttribute('data-mode')
      return dispatch(changeCartItemCount(key, mode))
    },
    deleteItem: (id) => {
      //const id = e.currentTarget.getAttribute('data-id')
      dispatch(deleteCartItem(id));
    },
    changeItemCheckbox: (e) => {
      //console.log(e)
      return dispatch(changeCartItemCheckbox(e.target.value))
    },
  };
}

const mapStateToProps = createStructuredSelector({
  cart: makeSelectCart()
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);
//const withReducer = injectReducer({ key: 'cart', reducer });
const withSaga = injectSaga({key: 'cart', saga});
export default compose(
  //withReducer,
  withSaga,
  withConnect
)(Cart);

