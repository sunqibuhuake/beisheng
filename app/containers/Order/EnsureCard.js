/**
 * Created by sunqi on 2018/5/21.
 */
/**
 * Created by sunqi on 2018/5/21.
 */
/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

import Header from 'components/Card/Header'
import Card from 'components/Card'
import { Select, Input, Row,Col } from 'antd';
const Option = Select.Option;

import XOption from 'components/XOption'

import XInput from '../XForm/XInput'

import XText from 'components/XText'
import OrderEnsureList from '../../components/OrderEnsureList'

import OrderCoupon from '../Coupon/OrderCoupon'
import Sum from './Sum'

import helper from '../../utils/helper'

export default class InvoiceCard extends React.PureComponent {
  render() {
    const styles = {
      input: {
        width: '100%',
        height: '100%',
        border: '1px solid #e6e6e6',
        paddingLeft:12
      }
    }


    return (
      <section>
        <Header
          borderBottom={false}
        >
          <span>确认订单信息</span>
        </Header>
        <div className="mb12 bbl">
          <OrderEnsureList></OrderEnsureList>
        </div>
        <div className="mb12">
          <p style={{fontSize: 14}}>添加订单备注</p>
          <div style={{padding: '0 12px'}}>
            <Row>
              <Col span={12}>
                <XInput
                  placeholder="限45个字（定制类商品，请将购买需求在备注中做详细说明)"
                  data-path="order.mark"
                  mode="input"
                  style={styles.input}
                >
                </XInput>
              </Col>
              <Col span={12} style={{paddingLeft: 12, fontSize: '12px', color: '#999999', lineHeight: '24px'}}>
                提示：请勿填写有关支付、收货、发票方面的信息
              </Col>
            </Row>
          </div>
        </div>
        <OrderCoupon
          coupon={this.props.coupon}
          selectCoupon={this.props.selectCoupon}
          amount={helper.getSum()}
        ></OrderCoupon>
        <div className="mb12">
          <Sum
            processing={this.props.processing}
            discount={(this.props.coupon.money - 0)}
            amount={helper.getSum()}
            pay={this.props.pay}
          ></Sum>
        </div>

      </section>
    )
  }
}
