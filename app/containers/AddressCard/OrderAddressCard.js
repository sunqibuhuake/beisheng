/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

import Header from 'components/Card/Header'
import Card from 'components/Card'

import OrderAddressItem from './OrderAddressItem'

export default class OrderAddressCard extends React.PureComponent{
  render() {
    const styles = {
      add: {
        fontSize: 14,
        float: 'right',
        color: 'rgb(2, 112, 201)',
        cursor: 'pointer'
      }
    }


    const items = this.props.address_state.list.map(address => (
      <OrderAddressItem
        confirmDelete={this.props.confirmDelete}
        cancleDelete={this.props.cancleDelete}
        onEdit={this.props.onEdit}
        onSetDefault={this.props.onSetDefault}
        key={Math.random()}
        {...address}
      ></OrderAddressItem>
    ));

    return (
      <Card>
        <Header
          borderBottom={true}
        >
          <span>收货人信息</span>
          <span
            onClick={this.props.onAdd}
            style={styles.add}
          >
            +新增地址
          </span>
        </Header>

        {items.length > 0 ? items : (
          <h3>请先新增收获地址</h3>
        )}
      </Card>
    )
  }
}
