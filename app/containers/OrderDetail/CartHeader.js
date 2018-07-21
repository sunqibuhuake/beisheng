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
      <Col span={20}>
        <Row>
          <Col span={16} style={{paddingLeft: 120}}>
            商品
          </Col>
          <Col span={4} className="tac">
            单价
          </Col>
          <Col span={4} className="tac">
            数量
          </Col>
        </Row>
      </Col>
      <Col span={4} className="tac">
        操作
      </Col>

    </Row>
  )

}
