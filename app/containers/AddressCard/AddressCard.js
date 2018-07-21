/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

import Header from 'components/Card/Header'
import Card from 'components/Card'

import AddressItem from './AddressItem'

export default class AddressCard extends React.PureComponent{
  render() {
    const styles = {
      add: {
        fontSize: 14,
        float: 'right',
        color: 'rgb(2, 112, 201)',
        cursor: 'pointer'
      }
    }
    return (
      <Card>
        <Header
          borderBottom={true}
        >
          <span>我的地址</span>
          <span
            onClick={this.props.onAdd}
            style={styles.add}
          >
            +新增地址
          </span>
        </Header>

        {this.props.address_state.list.map(address => (
          <AddressItem
            confirmDelete={this.props.confirmDelete}
            cancleDelete={this.props.cancleDelete}
            onEdit={this.props.onEdit}
            onSetDefault={this.props.onSetDefault}
            key={Math.random()}
            {...address}
          ></AddressItem>
        ))}
      </Card>
    )
  }
}
