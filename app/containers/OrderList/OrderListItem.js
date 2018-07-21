/**
 * Created by sunqi on 2018/5/13.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'antd'
import {Link} from 'react-router-dom'
import OrderItemHeaderContainer from './OrderItemHeaderContainer'
import OrderItemBodyContainer from './OrderItemBodyContainer'
import OrderListItemIntro from './OrderListItemIntro'
import OrderListItemNormal from './OrderListItemNormal'

import OrderListItemLeft from  './OrderListItemLeft'
import OrderListItemRight from  './OrderListItemRight'

export default function OrderListItem(props) {


  function calcSum(list) {
    let sum = 0;
    list.forEach(l => {
      sum += (l.goods_price - 0) * (l.goods_num - 0)
    })
    return sum;
  }
  const order = props.order;
  return (
    <section style={{marginBottom: 12}}>
      <OrderItemHeaderContainer>
        <div style={{width: '100%', padding: '0 18px', position: 'relative', textAlign: 'left'}}>
          <div>
            {props.date}&nbsp;&nbsp;&nbsp;&nbsp;
            {'订单号: ' + order.order_sn}
          </div>
          <div style={{position: 'absolute', right: 18,top: 0, color: '#98999A'  }} className="bs-link-normal">
            <Link to={"/order/" + order.order_sn}>
              查看详情
            </Link>
          </div>
        </div>
      </OrderItemHeaderContainer>
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
                price={goods.final_price}
              ></OrderListItemLeft>
            ))}
          </Col>

          <OrderListItemRight
            onConfirmReceive={props.onConfirmReceive}
            order={order}
            pay={props.pay}
            account={props.account}
            onCancleClick={props.onCancleClick}
            sum={order.order_amount}
            height={120 * order.goods.length}
            sn={order.order_sn}
          ></OrderListItemRight>
        </Row>
      </OrderItemBodyContainer>
    </section>

  )
}
