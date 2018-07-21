/**
 * Created by sunqi on 2018/5/21.
 */
/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row,Col, Popconfirm} from 'antd'
import XOption from '../XForm/XOption'

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
      color: '#f3b71b',
      width: 56,
      fontSize:12,
      padding: '4px 6px',
      border: '1px solid #f3b71b'
    },
    setDefault: {
      fontSize: 14,
      float: 'right',
      color: 'rgb(2, 112, 201)',
      cursor: 'pointer'
    }

  }
  return (
    <Row style={styles.root}>
      <Col span={4}>
        <XOption
          data-path="address.selected"
          data-id={props.address_id}
        >
          {props.consignee}
        </XOption>
      </Col>

      <Col span={12}>
        <div style={styles.addressText}>
          {props.province_name + props.city_name + props.district_name + '  ' + props.address}
        </div>
      </Col>
      <Col span={4}>
        {props.mobile}
      </Col>

      <Col span={4} className="tar">

        {props.is_default == 1 ? (
          <span style={styles.defaultAddress}>
          默认地址
        </span>
        ) : ''}

      </Col>

    </Row>
  )
}
