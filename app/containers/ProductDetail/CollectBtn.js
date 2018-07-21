/**
 * Created by sunqi on 2018/6/1.
 */
import React from 'react'
import {Icon} from 'antd'
export default function(props) {

  const styles = {
    root: {
      float: 'right',
      color: '#0070c9',
      fontSize: 32,
      lineHeight: '54px',
      cursor: 'pointer'
    }
  }

  let icon = '';
  if (props.is_collect == 1) {
    icon = (
      <Icon type="heart" />
    )
  } else {
    icon = (
      <Icon type="heart-o" />
    )
  }
  return (
    <span onClick={props.collect} style={styles.root}>
      {icon}
    </span>
  )
}
