/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row, Col} from 'antd'
import Header from 'components/Card/Header'
import helper from '../../utils/helper'

export default class Sum extends React.PureComponent {


  render() {
    const styles = {
      root: {
        fontSize: 16,
        color: 'black',
        textAlign: 'right'
      },
      btn: {
        width: '100%',
        background: '#0070c9',
        textAlign: 'center',
        height: 48,
        color: 'white',
        lineHeight: '48px',
        cursor: 'pointer'
      },
      waitingBtn: {
        width: '100%',
        background: '#b8b8b8',
        textAlign: 'center',
        height: 48,
        color: 'white',
        lineHeight: '48px',
        cursor: 'default'
      }
    }


    return (
      <section style={styles.root}>
        <Row className="mb12">
          <Col offset={14} span={5}>
            总商品金额：
          </Col>
          <Col span={5}>
            ￥{helper.moneyFormatter(this.props.amount)}
          </Col>
        </Row>
        <Row className="mb12">
          <Col offset={14} span={5}>
            优惠：
          </Col>
          <Col span={5}>
            -￥{helper.moneyFormatter(this.props.discount)}
          </Col>
        </Row>
        <Row>
          <Col offset={19} span={5}>
            <p style={{marginBottom: 0}}>
              合计:
            </p>
            <p style={{fontSize: 24}}>
              RMB {' ' + helper.moneyFormatter(this.props.amount - this.props.discount)}
            </p>
            <div

              onClick={this.props.processing ? null: this.props.pay}
              style={ this.props.processing ? styles.waitingBtn : styles.btn}>
              支付
            </div>
          </Col>
        </Row>

      </section>
    )
  }
}
