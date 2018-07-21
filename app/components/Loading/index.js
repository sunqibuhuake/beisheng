/**
 * Created by sunqi on 2018/5/27.
 */
import React from 'react'
import {Spin} from 'antd'
export default function ({style}) {
  const styles = {
    root: {
      width: '100%',
      padding: '120px 0px',
      margin: 0,
      textAlign: 'center'
    }
  }

  for (let prop in style) {
    styles.root[prop] = style[prop]
  }

  return (
    <div style={styles.root}>
      <Spin></Spin>
    </div>
  )
}
