/**
 * Created by sunqi on 2018/7/4.
 */
import React from 'react'
export default function(props) {
  return (
    <div style={{width: '100%', textAlign: 'center'}}>
      <div style={{height: props.height || 42}}>
        <img src={props.icon} style={{height:'100%'}} />
      </div>

      {props.title ? (
        <div style={{padding: '16px 0', fontSize: 16, fontWeight: 'bold'}}>
          {props.title}
        </div>
      ) : (
        <div style={{padding: '12px 0', fontSize: 16, fontWeight: 'bold'}}>
        </div>
      )}

      <div style={{fontSize: 14}}>
        {props.sub}
      </div>
    </div>
  )
}
