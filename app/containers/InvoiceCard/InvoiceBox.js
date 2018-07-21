/**
 * Created by sunqi on 2018/5/21.
 */
/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

import {Row, Col} from 'antd'
import InvoiceItem from './InvoiceItem'
import PersonInvoiceItem from './PersonInvoiceItem'

export default class InvoiceBox extends React.PureComponent {
  render() {
    const styles = {
      root: {
        fontSize: 14,
        lineHeight: '36px'
      },
      add: {
        fontSize: 12,
        lineHeight: 'normal',
        marginBottom: 12,
        color: '#0270c9',
        cursor: 'pointer'
      }

    }

    let list = [];

    this.props.list.forEach(l => {
      if (this.props.type == 1) {
        if (l.type == 0) {
          list.push(
            <PersonInvoiceItem
              onSetDefault={this.props.onSetDefault}
              key={Math.random()}
              item={l}
            ></PersonInvoiceItem>)
        } else if (l.type == 1) {
          list.push(
            <InvoiceItem
              onEdit={this.props.onEdit}
              onSetDefault={this.props.onSetDefault}
              confirmDelete={this.props.confirmDelete}
              key={Math.random()}
              item={l}
              type={this.props.type}
            ></InvoiceItem>
          )

        }

      }
      if (this.props.type == 2) {

        if (l.type == 2) {
          list.push(
            <InvoiceItem
              onEdit={this.props.onEdit}
              onSetDefault={this.props.onSetDefault}
              confirmDelete={this.props.confirmDelete}
              key={Math.random()}
              item={l}
              type={this.props.type}
            ></InvoiceItem>
          )
        }

      }
    })

    return (
      <section style={styles.root} className={this.props.bbl ? 'mb12 bbl' : 'mb12'}>
        <Row>
          <Col span={4} style={{fontSize: 16,color: 'black'}}>
            {this.props.title}
          </Col>
          <Col span={20}>
            {list}
          </Col>
        </Row>
        <Row style={styles.add}>
          <Col offset={4} span={20}>

            {(list.length < 3) ? (
              <span onClick={this.props.onAddClick}>
              +新增{this.props.title}
            </span>
            ) : ''}

          </Col>
        </Row>
      </section>
    )
  }
}
/**
 * Created by sunqi on 2018/5/21.
 */
