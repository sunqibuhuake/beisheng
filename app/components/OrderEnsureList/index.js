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
import CartHeader from './CartHeader'
import CartItem from './CartItem'

export default class OrderEnsureList extends React.PureComponent {

  componentDidMount() {

    // todo 检测是否存有订单数据
  }

  render() {

    const styles = {

    }

    const items = JSON.parse(window.localStorage.getItem('products')).list
    return (
      <div>
        <CartHeader></CartHeader>
        {items.map(item => (
          <CartItem
            key={Math.random()}
            item={item}
          ></CartItem>
        ))}
      </div>
    )


  }
}

OrderEnsureList.propTypes = {};
