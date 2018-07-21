/**
 * Created by sunqi on 2018/6/1.
 */
import React from 'react'

import XInput from '../XForm/XInput'
import XEditOption from '../XForm/XEditOption'

import {Row, Col} from 'antd'
const styles = {
  row: {
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
    height: 32,
    lineHeight: '32px',
    textAlign: 'right'
  },
  required: {
    color: 'red'
  },
  input: {
    width: '100%',
    height: '24px',
    lineHeight: '24px',
    paddingLeft: '4px',
    outline: 'none',
    cursor: 'pointer'
  }
}


export default class FormRowSpec extends React.PureComponent{

  componentDidMount() {

  }

  getInvoiceOptionItem(index) {
    const arr = this.props.list
    if (arr[index]) {
      const l = arr[index];
      return (
        <Row
          style={styles.row}
        >
          <Col span={16} style={{paddingLeft: 12}}>
            <XEditOption
              id={l.id}
              data-path="invoice.modify"
              input-data-path={'invoice.form.invoice_title'}
              input-static-data-path={"invoice.list." + (l.index) + '.invoice_title'}
              input_style={styles.input}
              onClick={this.props.onSelectItem.bind(null, l.id)}
            >
            </XEditOption>
          </Col>
          <Col span={8}>

          </Col>
        </Row>
      )
    } else {
      return '';
    }
  }


  render() {

    const invoice1 = this.getInvoiceOptionItem(0)
    const invoice2 = this.getInvoiceOptionItem(1)
    const invoice3 = this.getInvoiceOptionItem(2)


    const add  =(
      <div style={{paddingLeft: 12}} onClick={this.props.onOrderAddClick} className="bs-text-btn-blue">
        增加发票
      </div>
    )



    return (
      <Row style={styles.row}>
        <Col span={6} style={styles.label}>
          <span style={styles.required}>*</span>
          {this.props.label}
        </Col>
        <Col span={18}>
          {invoice1}
          {invoice2}
          {invoice3}

          {this.props.list.length < 3 ? add : ''}

        </Col>

      </Row>
    )
  }
}
