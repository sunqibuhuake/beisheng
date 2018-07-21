/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row, Col} from 'antd'

export default function ProductCardHeader (props) {


  const styles = {
    root: {
      height: 32,
      lineHeight: '32px',
      fontSize: '1.4em',
      color: '#656565',
      background: '#f6f6f6',
      borderBottom: '1px solid #dddddd'
    }
  }
  return (
    <Row style={styles.root}>
      <Col span={5} className="tac">
        订单编号
      </Col>
      <Col span={14} className="tac">
        订单商品
      </Col>
      <Col span={5} className="tac">
        下单时间
      </Col>
    </Row>
  )

}
