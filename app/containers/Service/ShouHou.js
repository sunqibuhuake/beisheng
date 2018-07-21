/**
 * Created by sunqi on 2018/7/4.
 */
import React from 'react'
import Container from './Container'
import Title from './Title'
import BigImage from './BigImage'
import banner from './assets/shouhou.png'
import XCol from './Col'
import {Row,Col} from 'antd'

import ListItem from './ListItem'
import IF from './IF'

import img1 from './assets/p1.png'
import img2 from './assets/p2.png'
import img3 from './assets/p3.png'



const list = [
  {
    img: img1,
    title: 'iPad',
    desc: '电池、电源与充电，Apple ID 和密码，设置和使用，App Store 、iTunes Store 和“音乐” Internet 与 AirPlay ，iOS 和应用程序，iPad 配件，维修和物理损坏。'
  },
  {
    img: img2,
    title: 'iPhone',
    desc: '维修和物理损坏，电池、电源与充电，Apple ID 和密码，系统性能，蜂窝移动网络和 Wi-Fi App Store、iTunes Store 和“音乐”，iOS 和 应用程序，iCloud、Facetime 与信息。'
  },
  {
    img: img3,
    title: 'Mac',
    desc: '启动或开机，硬件问题，安装与更新，软件与使用，Apple ID 和密码， internet 与连接性邮件 iTunes Store 与 App Store 。'
  }
]
export default class Shouhou extends React.PureComponent{
  render() {
    return (
      <div style={{minHeight: '100%', background: 'white',color: '#333333'}}>
        <Container>
          <Title
            mb={1}
            title="Apple 授权维修服务"
          >
            通过近在咫尺的 Apple 授权的企业解决方案中心，即时响应你的设备需求，<br/>将优质、专业的 Apple 售后服务带到你身边。
          </Title>
          <BigImage src={banner} pd={12}></BigImage>

          {list.map(l => (
            <ListItem key={Math.random()} {...l}></ListItem>
          ))}
          <IF></IF>

        </Container>

      </div>
    )
  }
}
