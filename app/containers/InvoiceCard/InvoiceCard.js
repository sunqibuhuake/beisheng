/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

import {Row, Col} from 'antd'
import Header from 'components/Card/Header'
import Card from 'components/Card'

import InvoiceBox from './InvoiceBox'

export default class InvoiceCard extends React.PureComponent{
  render() {
    const styles = {

    }
    return (
      <Card>
        <Header
          borderBottom={true}
        >
          <span>我的发票</span>
        </Header>
       <InvoiceBox
         title="普通发票"
         bbl={true}
         list={this.props.invoice_state.list}
         type="1"
         onAddClick={this.props.onAddClick.bind(null, 1)}
         onEdit={this.props.onEdit}
         onSetDefault={this.props.onSetDefault}
         confirmDelete={this.props.confirmDelete}
       ></InvoiceBox>
        <InvoiceBox
          title="增值税专用发票"
          list={this.props.invoice_state.list}
          type="2"
          onAddClick={this.props.onAddClick.bind(null, 2)}
          onEdit={this.props.onEdit}
          onSetDefault={this.props.onSetDefault}
          confirmDelete={this.props.confirmDelete}
        ></InvoiceBox>

      </Card>
    )
  }
}
/**
 * Created by sunqi on 2018/5/21.
 */
