/**
 * Created by sunqi on 2018/5/21.
 */
/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

import Header from 'components/Card/Header'
import Card from 'components/Card'
import { Select } from 'antd';
const Option = Select.Option;

import XOption from 'components/XOption'
import XText from 'components/XText'


export default class InvoiceCard extends React.PureComponent {
  render() {
    const styles = {}
    return (
      <section>
        <Header
          borderBottom={true}
        >
          <span>发票信息</span>
        </Header>
        <div className="mb12">
          <XOption
            text="普通发票"
          ></XOption>
          <XOption
            text="增值税专用发票"
          ></XOption>
        </div>
        <XText>
          北京xxxxx公司
        </XText>

      </section>
    )
  }
}
