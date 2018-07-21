/**
 * Created by sunqi on 2018/7/4.
 */
import React from 'react'
import Container from './Container'
import Title from './Title'
import BigImage from './BigImage'
import banner from './assets/train.png'
import XCol from './Col'
import {Row,Col} from 'antd'

import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'

import IF from './IF'


export default class Shouhou extends React.PureComponent{
  render() {
    return (
      <div style={{minHeight: '100%'}}>
        <Container>
          <Title
            title="专家培训服务"
          >
            来自 Apple 的专家将来到你所在的园区或企业，让你在短时间内全面掌握所需技能，<br/>成为工作中的 Apple 达人。。
          </Title>
          <BigImage src={banner}></BigImage>

          <div style={{padding: '48px 0'}}>
            <Row>
              <Col span={8}>
                <XCol
                  icon={icon1}
                  title="使用技巧"
                  sub={(<span>为你详细讲解 Apple 全设备的实用技巧，<br/>提升你的办公效率。</span>)}
                ></XCol>

              </Col>
              <Col span={8}>
                <XCol
                  icon={icon2}
                  title="现场演示"
                  sub={(<span>现场感受 Apple 设备为你带来的便捷，<br/>改变你的生活。</span>)}
                ></XCol>
              </Col>
              <Col span={8}>
                <XCol
                  icon={icon3}
                  title="商务应用"
                  sub={(<span>发现并选择最适合的App，帮助你顺利开展业务，<br/>并大幅提升工作效率。</span>)}
                ></XCol>
              </Col>

            </Row>
          </div>

          <IF></IF>

        </Container>

      </div>
    )
  }
}
