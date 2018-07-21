/**
 * Created by sunqi on 2018/6/3.
 */
import React from 'react'
import {Col, Row} from 'antd'

import OrderListItemIntro from './OrderListItemIntro'

export default function (props) {
  return (
    <Row style={{height: '120px'}}>
      <Col span={16} className="fh">
        <OrderListItemIntro
          img={props.img}
          name={props.name}
          meta={props.meta}
        >
        </OrderListItemIntro>
      </Col>
      <Col span={4} className="fh">
        <div className="vertical-center">
          ￥{props.price}
        </div>
      </Col>
      <Col span={4} className="fh">
        <div className="vertical-center">
          {props.count}
        </div>
      </Col>
    </Row>
  )
}
