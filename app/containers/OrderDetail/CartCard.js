
import React from 'react';
import PropTypes from 'prop-types';

import CartHeader from './CartHeader'
import CartItem from './CartItem'

export default class CartCard extends React.PureComponent {

  componentDidMount() {

  }

  render() {

    const items = this.props.order_goods.map(g => (
      <CartItem
        key={Math.random()}
        img={g.goods_cover}
        meta={g.spec_key_name}
        name={g.goods_name}
        count={g.goods_num}
        price={g.final_price}
      ></CartItem>

    ))


    return (
      <section className="mb12">
        <CartHeader></CartHeader>
        {items}
      </section>
    )


  }
}

CartCard.propTypes = {};
