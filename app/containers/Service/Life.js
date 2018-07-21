/**
 * Created by sunqi on 2018/7/4.
 */
import React from 'react'
import Container from './Container'
import Title from './Title'
import BigImage from './BigImage'
import banner from './assets/life.png'
import XCol from './Col'
import {Row,Col} from 'antd'

import icon4 from './assets/icon4.png'
import icon5 from './assets/icon5.png'
import icon6 from './assets/icon6.png'
import icon7 from './assets/icon7.png'
import icon8 from './assets/icon8.png'
import icon9 from './assets/icon9.png'


import IF from './IF'

import './style.css'


export default class Shouhou extends React.PureComponent{
  render() {


    const list = [
      {
        icon: icon4,
        title: '采购',
        sub: (<span>设备供应</span>)
      },
      {
        icon: icon5,
        title: '激活',
        sub: (<span>开机激活<br/>DOA 检测 </span>)
      },
      {
        icon: icon6,
        title: '部署',
        sub: (<span>设备初始化<br/>Apple 及企业 APP 配置<br/>移动设备配置</span>)
      },
      {
        icon: icon7,
        title: '运维',
        sub: (<span>设备延保<br/>移动设备管理</span>)
      },
      {
        icon: icon8,
        title: '维修',
        sub: (<span>咨询热线<br/>预约服务<br/>设备维修 </span>)
      },
      //{
      //  icon: icon9,
      //  title: '回收',
      //  sub: (<span>设备评估<br/>设备回收</span>)
      //},


    ]
    return (
      <div style={{minHeight: '100%', color: '#333333'}}>
        <Container>
          <Title
            title="设备生命周期管理服务"
          >
            从购买、配置到维修，帮助你快速解决问题，打造 360 度全方位一体化服务体验。
          </Title>
          <BigImage width="60%" src={banner}></BigImage>

          <div style={{padding: '48px 0'}}>
            <Row>

              {list.map(l => (
                <div className="col-1-5" key={Math.random()}>
                  <XCol
                    height={36}
                    {...l}
                  ></XCol>

                </div>
              ))}

            </Row>
          </div>

          <IF></IF>

        </Container>

      </div>
    )
  }
}
