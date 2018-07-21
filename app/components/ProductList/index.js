/**
 * Created by sunqi on 2018/5/20.
 */
/**
 * Created by sunqi on 2018/5/20.
 */
import React from 'react'
import {Row, Col } from 'antd'
import ProductCard from './ProductCard.js'

import Loading from '../../components/Loading'

export default class ProductList extends React.PureComponent {

  render() {

    if (!this.props.products.ready) {
      return (
        <Loading></Loading>
      )
    }

    if (this.props.products.data.length == 0) {
      return (
        <h3 style={{textAlign: 'center'}}>
          暂无收藏
        </h3>
      )
    }

    const list = this.props.products.data.map(product => {
      return (
        <Col
          key={(Math.random() + '').split('.')[1]}
          span={8}>
          <ProductCard
            mode={this.props.mode}
            product={product}
          ></ProductCard>
        </Col>
      )
    })


    return (
        <Row style={{minHeight: 480}}>
          {list}
        </Row>
    )
  }

}
