/**
 * Created by sunqi on 2018/5/29.
 */
import React from 'react'

import XInput from '../../XForm/XInput'

import {Col, Row} from 'antd'

export default class NormalFormRow extends React.PureComponent {


  render() {
    const styles = {
      root: {
        minHeight: 36,
        lineHeight: '32px',
        padding: '2px 0',
      },
      input: {
        height: 32,
        width: '100%',
        paddingLeft: 12,
        border: '1px solid #e6e6e6'
      },
      label: {
        paddingRight: 12,
        textAlign: 'right'
      }
    }
    const props = this.props;
    return (
      <Row style={styles.root}>
        <Col span={3} className="fh" style={styles.label}>
        <span style={{color: 'red', paddingRight: 6}}>
          {props.required ? '*' : ''}
        </span>
          {props.label}
        </Col>
        <Col span={8}>
          <XInput
            style={styles.input}
            {...props.prop}
          >
          </XInput>
        </Col>
        <Col span={13}>

        </Col>
      </Row>
    )
  }




}
