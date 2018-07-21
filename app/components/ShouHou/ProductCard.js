
import React from 'react';
import PropTypes from 'prop-types';

import ProductCardHeader from './ProductCardHeader'
import ProductCardBody from './ProductCardBody'

export default class CartCard extends React.PureComponent {

  componentDidMount() {

  }

  render() {
    return (
      <section className="mb12">
        <ProductCardHeader></ProductCardHeader>
        <ProductCardBody></ProductCardBody>
      </section>
    )
  }
}

CartCard.propTypes = {};
