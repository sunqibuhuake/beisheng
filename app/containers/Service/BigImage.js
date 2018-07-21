/**
 * Created by sunqi on 2018/7/4.
 */
import React from 'react'

export default function(props) {
  return (
    <div style={{
      width: '100%',
      padding: (props.pd || 42) + 'px 0'
    }}>
      <img style={{width: props.width ||  '100%'}} src={props.src}/>
    </div>
  )
}
