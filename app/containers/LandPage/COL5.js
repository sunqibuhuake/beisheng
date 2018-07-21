/**
 * Created by sunqi on 2018/7/3.
 */
import React from 'react'
import {Row} from 'antd'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import icon5 from './assets/icon5.png'

export default function(props) {

  const list = [
    {
      icon: icon1,
      title: '选你所爱',
      sub: '畅享移动办公'
    },
    {
      icon: icon2,
      title: '展现自我',
      sub: '应用管理个性化'
    },
    {
      icon: icon3,
      title: '实用技巧培训',
      sub: '日常工作更轻松'
    },
    {
      icon: icon4,
      title: '随需 IT 支持',
      sub: '线上线下高效结合'
    },
    {
      icon: icon5,
      title: '定制财务方案',
      sub: '根据预算灵活组合'
    }
  ]

  const cols = list.map( l => (
    <div
      key={Math.random()}
      className="col-1-5">
      <div
        style={{
          height: 42,
          marginBottom: 24
        }}
      >
        <img style={{height: '100%'}} src={l.icon}/>

      </div>
      <div style={{fontSize: 14,marginBottom: 6, fontWeight: 'bold'}}>
        {l.title}
      </div>
      <div>
        {l.sub}
      </div>
    </div>
  ))
  return (
    <div style={{
            padding: '48px 0',
            borderBottom: '1px solid #e6e6e6',
            borderTop: '1px solid #e6e6e6',
            textAlign: 'center',
            marginBottom: 56

          }}>
      <div>
        <div
          style={{fontSize: 32, marginBottom: 24}}
        >
          由你做主，让工作更富效率和创意。
        </div>
        <div
          style={{fontSize: 14,marginBottom: 48}}
        >
          Apple Employee Choice 是 Apple 在全球推出的一项 IT 支持方案，由你来选择所喜爱的 Apple 产品，<br/>
          在工作中助你一臂之力。
        </div>
      </div>
      <Row>
        {cols}
      </Row>


    </div>

  )
}
