/**
 * Created by sunqi on 2018/7/4.
 */
import React from 'react'
import Container from './Container'
import Title from './Title'
import BigImage from './BigImage'
import banner from './assets/saas.png'
import XCol from './Col'
import {Row,Col} from 'antd'

import IF from './IF'

import icon10 from './assets/icon10.png'
import icon11 from './assets/icon11.png'


export default class Shouhou extends React.PureComponent{
  render() {
    return (
      <div style={{minHeight: '100%', background: 'white'}}>
        <Container>
          <Title
            title="Service 4 me，专家上门服务"
          >
            走进企业，为你提供现场的设备诊断和检测等服务，带来更多便利和个性化体验。
          </Title>
          <BigImage width="40%" src={banner}></BigImage>

          <div style={{padding: '24px 0 48px'}}>
            <Row>
              <Col offset={4} span={8}>
                <XCol
                  icon={icon10}
                  title=""
                  sub={(<span>问题咨询，硬件检测，诊断报告，<br/>设备清洁，设备维修。 </span>)}
                >
                </XCol>
              </Col>
              <Col  span={8}>
                <XCol
                  icon={icon11}
                  sub={(<span>Mac 基础及使用技巧，<br/>iPhone / iPad 基础及使用技巧，移动应用，<br/> 办公协作前沿技术 </span>)}

                >
                </XCol>
              </Col>

            </Row>
          </div>

          <IF></IF>

        </Container>

      </div>
    )
  }
}
