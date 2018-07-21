/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row,Col} from 'antd'
export default function(props) {

  const styles = {
    root: {
      fontSize: 14,
      lineHeight: '36px',
      height: 36,
      marginBottom: 12,
    },
    addressText: {
      paddingLeft: 24
    },
    option: {
      height: 36,
      lineHeigt: '36px',
      color: 'black',
      textAlign:'center',
      position: 'relative',
      width: '100%',
      border: '2px solid #bbbbbb'
    },
    defaultAddress: {
      background: '#999999',
      color: 'white',
      width: 56,
      fontSize:12,
      padding: '4px 6px',
    }
  }
  return (
    <Row style={styles.root}>
      <Col span={4}>
        <div style={styles.option}>
          XXXXXX
        </div>
      </Col>
      <Col span={14}>
        <div style={styles.addressText}>
          XXXX 上海市 浦东新区 XXXX大街XXX号XX楼XXXXXXX
        </div>
      </Col>
      <Col span={3} className="tac">
        186****2714
      </Col>
      <Col span={3} className="tac">
        <span style={styles.defaultAddress}>
          默认地址
        </span>
      </Col>

    </Row>
  )
}
