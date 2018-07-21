/**
 * Created by sunqi on 2018/5/21.
 */
/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row,Col, Popconfirm} from 'antd'

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
      <Col span={2}>
        {props.consignee}
      </Col>
      <Col span={3}>
        {props.mobile}

      </Col>
      <Col span={12}>
        <div style={styles.addressText}>
          {props.province_name + props.city_name + props.district_name + '  ' + props.address}
        </div>
      </Col>
      <Col span={2} onClick={props.onEdit.bind(null, props.address_id)} className="bs-text-btn-blue">
        编辑
      </Col>
      <Popconfirm title="您确定要删除该地址吗?" onConfirm={props.confirmDelete.bind(null,props.address_id)} onCancel={props.cancleDelete} okText="确认" cancelText="取消">
        <Col span={2}  className="bs-text-btn-blue">
          删除
        </Col>
      </Popconfirm>

      <Col span={3} className="tar">

        {props.is_default == 1 ? (
          <span style={styles.defaultAddress}>
          默认地址
        </span>
        ) : (
          <span style={styles.setDefault} onClick={props.onSetDefault.bind(null, props.address_id)} className="bs-text-btn-blue">
          设为默认
        </span>
        )}

      </Col>

    </Row>
  )
}
