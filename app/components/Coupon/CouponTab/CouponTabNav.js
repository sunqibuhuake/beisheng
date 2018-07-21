/**
 * Created by sunqi on 2018/6/6.
 */
import React from 'react'
export default function({text, filter, active, onClick}) {
  const styles = {
    normal: {
      width: 120,
      height: 42,
      textAlign: 'center',
      color: '#0074C9',
      //borderTop: '1px solid #DEDFE0',
      //borderBottom: '1px solid #DEDFE0',
      borderRight: '1px solid #DEDFE0',
      background: '#EBECED',
      lineHeight: '42px',
      display: 'inline-block',
      float: 'left',
      cursor: 'pointer'
    },
    active: {
      width: 120,
      height: 42,
      textAlign: 'center',
      color: '#0074C9',
      borderTop: '3px solid #0062C9',
      borderRight: '1px solid #DEDFE0',
      background: 'white',
      lineHeight: '42px',
      display: 'inline-block',
      float: 'left',
      cursor: 'pointer'
    }
  }
  return (
    <div
      onClick={onClick}
      data-filter={filter}
      style={(filter == active) ? styles.active : styles.normal}>
      {text}
    </div>
  )

}
