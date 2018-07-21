/**
 * Created by sunqi on 2018/5/26.
 */
import {Modal} from 'antd'

import React from 'react'

export default class QRcode extends React.PureComponent{
  render() {
    return (
      <Modal
        title={null}
        footer={null}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    )
  }
}
