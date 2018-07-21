/**
 * Created by sunqi on 2018/6/1.
 */
import React from 'react'

export default function(props){

  const styles = {
    btn: {
      width: 160,
      cursor: 'pointer',
      height: 48,
      background: '#0070CB',
      margin: '0 auto',
      color: 'white',
      textAlign: 'center',
      lineHeight: '48px',
      fontSize: 14
    }
  }

  return (
    <div style={styles.btn} onClick={props.onClick}>
      保存
    </div>
  )

}
