/**
 * Created by sunqi on 2018/6/18.
 */
import React from 'react'
import {Icon} from 'antd'
export default function (props) {

  const styles = {
    root: {
      textAlign: 'center',
      padding: '24px 0'
    },
    icon: {
      fontSize: 64,
    },
    text: {
      fontSize :16,
      color: 'black'
    }

  }
  let icon = null;
  if (props.type == 'wx') {
    icon = (
      <Icon style={{
        color: '#0CC31B'
      }} type="wechat"/>
    )
  } else {
    icon = (
      <Icon style={{
      color:'#56ABE4'
      }} type="alipay-circle"/>
    )
  }

  return (
    <section
      style={styles.root}
    >
      <div
        style={styles.icon}
      >
        {icon}
      </div>
      <p
        style={styles.text}
      >
        请使用{props.type == 'wx' ? '微信' : '支付宝'}扫码完成支付
      </p>
    </section>
  )
}
