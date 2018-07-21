/**
 * Created by sunqi on 2018/5/26.
 */
import {Modal} from 'antd'

import React from 'react'

import img_url from './assets/qrcode.jpg'
export default function(props) {

  const styles = {
    root: {
      color: 'black',
      textAlign: 'center',
      width: '100%',
      paddingTop: 32
    }
  }
  return (
    <Modal
      title={null}
      footer={null}
      visible={props.visible}
      onCancel={props.close}
    >
      <div style={styles.root}>
        <p style={{fontSize: 24,marginBottom: 12}}>加入Employee Choice</p>
        <p style={{fontSize: 14}}>扫描下方二维码,获取经销商信息</p>
        <img style={{
          width: 240,
          margin: '24px auto'
        }} src={img_url} />
      </div>
    </Modal>
  )
}
