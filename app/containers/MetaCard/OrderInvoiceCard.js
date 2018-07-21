/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

import {Row, Col} from 'antd'
import Header from 'components/Card/Header'
import Card from 'components/Card'
import XOption from '../XForm/XOption'
import InvoiceBox from './InvoiceBox'

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
      if (id) {

      } else {
        if (l.type == type && l.is_default == 1) {
          item = (
            <div>
              {l.invoice_title} <span style={styles.midifyBtn}>修改</span>
            </div>
          )
        }
      }
    })
    return (
      <Card>
        <Header
          borderBottom={true}
        >
          <span>发票信息</span>
        </Header>

        <Row className="mb12">
          <Col
            span={5}>
            <div style={{width: '90%'}}>
              <XOption
                data-path="invoice.selected.type"
                data-id={1}
                //onClick={this.props.onSelectWay.bind(null, l.delivery_id)}
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
                //onClick={this.props.onSelectWay.bind(null, l.delivery_id)}
              >
                增值税专用发票
              </XOption>
            </div>
          </Col>
        </Row>
        <div className="mb12">
          {item}
        </div>


      </Card>
    )
  }
}
/**
 * Created by sunqi on 2018/5/21.
 */
