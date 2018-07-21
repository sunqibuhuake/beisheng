/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row, Col} from 'antd'
export default function Sum(props) {

  const styles = {
    root: {
      textAlign: 'right',
      fontSize: 16,
      marginTop: 24
    },
    blue: {
      color: '#0070c9'
    },
    blue2: {
      color: '#0070c9',
      lineHeight: 2
    },

    count: {
      fontSize: 22,
      color: '#0070c9'
    }

  }
  return (
    <section style={styles.root} className="mb12">
      <Row className="mb8">
        <Col offset={12} span={6}>
          商品总额:
        </Col>
        <Col style={styles.blue} span={6}>
          ¥{props.order_amount}
        </Col>
      </Row>

      <Row className="mb8">
        <Col offset={12} span={6}>
          优惠:
        </Col>
        <Col style={styles.blue} span={6}>
          -¥{props.order_prom_amount}
        </Col>
      </Row>

      <Row className="mb8">
        <Col style={styles.blue2} offset={12} span={6}>
          应付总额:
        </Col>
        <Col style={styles.count} span={6}>
          ￥{props.order_amount}
        </Col>
      </Row>
    </section>

  )

}
