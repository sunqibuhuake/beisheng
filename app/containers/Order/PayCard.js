/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

import Header from 'components/Card/Header'
import Card from 'components/Card'
import { Select } from 'antd';

import XOption from 'components/XOption'
import CustomRadio from 'components/CustomRadio'
import MidOption from 'components/XOption/MidOption'

import XText from 'components/XText'


export default class PayCard extends React.PureComponent {
  render() {
    const styles = {}
    return (
      <section>
        <Header>
          <span>支付方式</span>
        </Header>
        <div className="mb12">
          <XOption
            text="支付宝"
          ></XOption>
          <XOption
            text="微信"
          ></XOption>
          <XOption
            text="分期"
          ></XOption>
        </div>
        <div  className="mb12">
          <CustomRadio
            text="信用卡"
          ></CustomRadio>
          <CustomRadio
            text="蚂蚁花呗"
          ></CustomRadio>
        </div>
        <div className="mb12" style={{paddingLeft:24}}>
          <MidOption>
            ￥1154.38起X6期<br/>
            （含手续费）
          </MidOption>
          <MidOption>
            ￥1154.38起X6期<br/>
            （含手续费）
          </MidOption>

          <MidOption>
            ￥1154.38起X6期<br/>
            （含手续费）
          </MidOption>
        </div>
      </section>
    )
  }
}
