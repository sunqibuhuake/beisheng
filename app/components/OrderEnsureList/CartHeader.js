/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row, Col} from 'antd'

export default function CartHeader (props) {


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
      <Col span={6} className="fh">

      </Col>
      <Col span={6} className="tac">
        商品名称
      </Col>
      <Col span={4} className="tac">
        规格
      </Col>
      <Col span={4} className="tac">
        数量
      </Col>
      <Col span={4} className="tac">
        金额
      </Col>

    </Row>
  )

}
