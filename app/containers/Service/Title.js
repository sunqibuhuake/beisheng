/**
 * Created by sunqi on 2018/7/4.
 */
import React from 'react'

export default function(props) {
  return (
    <div style={{color: '#333333'}}>
      <div
        style={{fontSize: 32, marginBottom: 24, fontWeight: 'bold'}}
      >
        {props.title}
      </div>
      <div
        style={{fontSize: 16,marginBottom: props.mb || 48}}
      >
        {props.children}
      </div>
    </div>
  )
}
