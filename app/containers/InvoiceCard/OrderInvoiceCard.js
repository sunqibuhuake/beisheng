/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

import {Row, Col} from 'antd'
import Header from 'components/Card/Header'
import Card from 'components/Card'
import XOption from '../XForm/XOption'
import InvoiceBox from './InvoiceBox'
import XInput from '../XForm/XInput'

export default class OrderInvoiceCard extends React.PureComponent{
  render() {
    const styles = {
      midifyBtn: {
        marginLeft: 24,
        color: 'rgb(0, 112, 201)',
        cursor: 'pointer'
      }
    }

    let item = '';
    const type = this.props.invoice_state.selected.type;
    const id = this.props.invoice_state.selected.id;


    this.props.invoice_state.list.forEach(l => {

      if (l.id == id) {
        item = (
          <div>
            {l.invoice_title}
            <span
              onClick={this.props.onOrderInvoiceEdit.bind(null,l.id, 'order')}
              style={styles.midifyBtn}
            >{"修改"}</span>
          </div>
        )
      }

    })

    if (id == '' && type == 2) {
      item = (
        <span
          onClick={this.props.onAdd.bind(null,2)}
          style={styles.midifyBtn}
        >{"添加"}</span>
      )



    }

    const cardItem = (
      <Row>
        <Row className="mb12">
          <Col
            span={5}>
            <div style={{width: '90%'}}>
              <XOption
                data-path="invoice.selected.type"
                data-id={1}
                onClick={this.props.onOrderSelectType.bind(null, 1)}
              >
                普通发票
              </XOption>
            </div>
          </Col>
          <Col
            span={5}>
            <div style={{width: '90%'}}>
              <XOption
                data-path="invoice.selected.type"
                data-id={2}
                onClick={this.props.onOrderSelectType.bind(null, 2)}
              >
                增值税专用发票
              </XOption>
            </div>
          </Col>
        </Row>
        <div className="mb12">
          {item}
        </div>
      </Row>
    )





    return (
      <Card>
        <Header
          borderBottom={true}
        >
          <span>发票信息</span>
          <span style={{marginLeft: 12}}>
                <XInput
                  data-path={'invoice.ask4invoice'}
                  mode="checkbox"
                  text="索要发票"
                >
                </XInput>
          </span>

        </Header>
        {this.props.invoice_state.ask4invoice ? cardItem : ''}

      </Card>
    )
  }
}
/**
 * Created by sunqi on 2018/5/21.
 */
