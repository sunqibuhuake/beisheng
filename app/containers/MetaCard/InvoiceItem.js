import React from 'react'

import {Row, Col, Popconfirm} from 'antd'
export default class InvoiceItem extends React.PureComponent {
  render() {
    const styles = {
      root: {
        height: 36
      },
      default: {
        color: '#f3b71b',
        width: 56,
        fontSize: 12,
        padding: '4px 6px',
        border: '1px solid #f3b71b'
      },
      action: {
        color: '#0270c9'
      }
    }
    return (
      <Row style={styles.root}>
        <Col span={6}>
          {this.props.item.invoice_title}
        </Col>
        <Col span={11}>
          税号
          {this.props.item.taxpayer}
        </Col>
        <Col span={2} className="tac">
          <span
            style={styles.action}
            onClick={this.props.onEdit.bind(null, this.props.item.id)}
          >
           编辑
          </span>
        </Col>
        <Popconfirm
          title="您确定要删除该发票吗?"
          onConfirm={this.props.confirmDelete.bind(null,this.props.item.id)}
          //onCancel={this.props.cancleDelete}
          okText="确认"
          cancelText="取消"
          >

          <Col span={2} className="tac">
           <span
             style={styles.action}
           >
           删除
          </span>
          </Col>
        </Popconfirm>

        <Col span={3} className="tac">

          {this.props.item.is_default == 1 ? (
            <span style={styles.default}>
            默认发票
          </span>
          ) : (
            <span onClick={this.props.onSetDefault.bind(null, this.props.item.id)}>
              设为默认
            </span>
          )}

        </Col>


      </Row>

    )
  }
}
/**
 * Created by sunqi on 2018/5/21.
 */
