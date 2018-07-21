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

import AddressItem from './AddressItem'

export default class AddressCard extends React.PureComponent{
  render() {
    const styles = {

    }
    return (
      <section>
        <Header
          borderBottom={true}
        >
          <span>收货人信息</span>
        </Header>
        <AddressItem></AddressItem>
        <AddressItem></AddressItem>
        <AddressItem></AddressItem>
        <AddressItem></AddressItem>

      </section>
    )
  }
}
