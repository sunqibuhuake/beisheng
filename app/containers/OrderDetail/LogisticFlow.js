/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Spin} from 'antd'
import LogisticItme from './LogisticItem'
export default function LogisticFlow(props) {
  const styles = {
    root: {
      padding: 0,
      margin: 0,
      width: '100%',
      position: 'relative',
      fontSize: 12,
    }

  }

  const express = props.express;
  let content = null;

  if (!express.ready) {
    content = (
      <div style={{textAlign: 'center', paddingTop: 42}}>
        <Spin></Spin>
      </div>
    )
  } if (express.error) {
    content= (
      <div style={{textAlign: 'center', paddingTop: 42}}>
        {express.error_msg}
      </div>
    )
  } else {
    content = props.express.data.map((l, i) => {
      return (
        <LogisticItme
          key={Math.random()}
          last={i == 0}
          {...l}
        >
        </LogisticItme>

      )
    })
  }

  return (
    <div style={styles.root} className="logistic_flow_container">
      {content}

    </div>
  )
}
