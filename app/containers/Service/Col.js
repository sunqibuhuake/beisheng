/**
 * Created by sunqi on 2018/7/4.
 */
import React from 'react'
export default function(props) {
  return (
    <div style={{width: '100%', textAlign: 'center'}}>
      <div style={{height: props.height || 48}}>
        <img src={props.icon} style={{height:'100%'}} />
      </div>
      <div style={{padding: '24px 0', fontSize: 16, fontWeight: 'bold'}}>
        {props.title}
      </div>
      <div style={{fontSize: 14}}>
        {props.sub}
      </div>
    </div>
  )
}
