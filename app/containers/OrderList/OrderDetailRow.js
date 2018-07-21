/**
 * Created by sunqi on 2018/6/7.
 */
/**
 * Created by sunqi on 2018/5/13.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'antd'
import {Link} from 'react-router-dom'
import OrderItemBodyContainer from './OrderItemBodyContainer'
import OrderListItemIntro from './OrderListItemIntro'
import OrderListItemNormal from './OrderListItemNormal'

import OrderListItemLeft from  './OrderListItemLeft'
import OrderListItemRight from  './OrderListItemRight'

export default function OrderListItem(props) {


  const order = props.order;
  return (
    <OrderItemBodyContainer>
      <Row style={{height: '100%'}} className="borderRight">
        <Col span={14}>
          {order.goods.map(goods => (
            <OrderListItemLeft
              key={Math.random()}
              img={goods.goods_cover}
              name={goods.goods_name}
              meta={goods.spec_key_name}
              count={goods.goods_num}
              price={goods.goods_price}
            ></OrderListItemLeft>
          ))}
        </Col>

        <OrderListItemRight
          onCancleClick={props.onCancleClick}
          sum={calcSum(order.goods)}
          height={120 * order.goods.length}
          sn={order.order_sn}
        ></OrderListItemRight>
      </Row>
    </OrderItemBodyContainer>
  )
}
