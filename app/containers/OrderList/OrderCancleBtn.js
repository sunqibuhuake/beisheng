/**
 * Created by sunqi on 2018/6/6.
 */
import React from 'react'

export default function(props) {

  const styles = {
    root: {
      textAlign: 'center'
    }
  }
  return (
    <div
      style={styles.root}
      className="bs-text-btn-normal"
      onClick={props.onClick}
    >
      取消订单
    </div>

  )
}
