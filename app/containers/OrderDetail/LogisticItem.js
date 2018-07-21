/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row ,Col} from 'antd'

export default function(props) {

  const styles={
    root: {
      marginBottom: 12

    },
    dot: {
      height: 6,
      width: 6,
      borderRadius: '50%',
      background: props.last ? '#CE3B38' : '#D5D5D5',
      marginTop: 6,
      boxShadow: props.last ? 'rgb(206, 59, 56) 0px 0px 1px 1px' : 'none'
    }
  }
  const {time, context} = props;
  return(

  <Row style={styles.root}>
    <Col span={2}>
      <div style={styles.dot}></div>
    </Col>
    <Col span={4}>
      {time.split(' ')[0]}
    </Col>
    <Col span={3}>
      {time.split(' ')[1]}
    </Col>
    <Col span={15} style={{fontWeight: props.last ?  'bold' : 'normal'}}>
      {context}
    </Col>

  </Row>
  )
}
