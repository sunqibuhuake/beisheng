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


export default class LgisticCard extends React.PureComponent {
  render() {
    const styles = {}
    return (
      <section>
        <Header
          borderBottom={true}
        >
          <span>收货人信息</span>
        </Header>
        <div className="mb12">
          <XOption
            text="顺丰速运"
          ></XOption>
          <XOption
            text="到店自提"
          ></XOption>
        </div>
        <div  className="mb12">
          <Select
            placeholder="请选择店面"
            style={{ width: 480 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
        <XText>
          地址：北京市朝阳区xxxxx路xxxx号<br/>
          电话：010-734766583

        </XText>

      </section>
    )
  }
}
