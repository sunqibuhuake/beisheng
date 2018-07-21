/**
 * Created by sunqi on 2018/6/1.
 */
import React from 'react'

import XInput from '../XForm/XInput'

import {Row, Col} from 'antd'

export default class FormRow extends React.PureComponent{
  render() {

    const styles = {
      row: {
        height: 32,
        fontSize: 14,
        lineHeight: '32px',
        marginBottom: 12
      },
      selectContainer: {
        width: '100%',
        paddingLeft: 12,
        height: '100%'
      },
      label: {
        fontSize: 14,
        lineHeight: '32px',
        textAlign: 'right'
      },
      required: {
        color: 'red'
      },
      input: {
        width: '100%',
        height: '100%',
        border: '1px solid #e6e6e6',
        paddingLeft:12
      }
    }

    return (
      <Row style={styles.row}>
        <Col span={6} style={styles.label}>
          <span style={styles.required}>*</span>
          {this.props.label}
        </Col>
        <Col span={12} className="fh">
          <div style={styles.selectContainer}>
            <XInput
              style={styles.input}
              mode="input"
              data-path={this.props['data-path']}
              placeholder=""
            >
            </XInput>
          </div>
        </Col>
        <Col span={6}></Col>
      </Row>
    )
  }
}
