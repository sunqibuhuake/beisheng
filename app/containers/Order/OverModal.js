/**
 * Created by sunqi on 2018/6/14.
 */
import React from 'react'
import {Modal, Button} from 'antd'
const confirm = Modal.confirm;
export default function ({active}) {


  function showOverModal() {
    confirm({
      title: null,
      content: '您是否完成了支付?',
      okText: '完成',
      okType: 'success',
      cancelText: '支付遇到问你题',
      cancleType: 'dander',
      onOk() {
        window.location.href = '/orders/1'
      },
      onCancel() {
        window.location.href = '/orders/1'
      },
    });
  }


  if (active) {
    showOverModal();
  }

  return (
    <span></span>
  )
}
