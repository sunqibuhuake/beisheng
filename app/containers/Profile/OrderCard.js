/**
 * Created by sunqi on 2018/5/21.
 */
/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

import {Row, Col} from 'antd'

import OrderListItem from '../OrderList/OrderListItem'

export default class OrderCard extends React.PureComponent {
  render() {
    const styles = {}
    return (
      <Card>
        <Header
          borderBottom={true}
        >
          <span>我的订单</span>
        </Header>
        <section className="mb12">
          <OrderListItem
            date={'2018-1-1'}
            orderID="18327476273"
          ></OrderListItem>
        </section>
        <section className="mb12">
          <OrderListItem
            date={'2018-1-1'}
            orderID="18327476273"
          ></OrderListItem>
        </section>
        <section className="mb12">
          <OrderListItem
            date={'2018-1-1'}
            orderID="18327476273"
          ></OrderListItem>
        </section>
      </Card>
    )
  }
}
/**
 * Created by sunqi on 2018/5/21.
 */
