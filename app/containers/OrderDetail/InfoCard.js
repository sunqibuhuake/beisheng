/**
 * Created by sunqi on 2018/5/21.
 */
/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row ,Col} from 'antd'
import InfoCardItem from './InfoCardItem'

export default function InfoCard(props) {

  const styles={
    root: {
      marginBottom: 12

    }

  }
  return(
    <Row style={styles.root}>
      <Col span={6}>
        <InfoCardItem
          type={'shouhuoren'}
          {...props}
        ></InfoCardItem>
      </Col>
      <Col span={6}>
        <InfoCardItem
          type={'peisong'}
          {...props}
        ></InfoCardItem>
      </Col>
      <Col span={6}>
        <InfoCardItem
          type={'fukuan'}
          {...props}
        ></InfoCardItem>
      </Col>
      <Col span={6}>
        <InfoCardItem
          type={'fapiao'}
          {...props}
        ></InfoCardItem>
      </Col>
    </Row>
  )
}
