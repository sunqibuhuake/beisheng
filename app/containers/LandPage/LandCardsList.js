/**
 * Created by sunqi on 2018/5/18.
 */
import React from 'react'
import PropTypes from 'prop-types';
import LandCard from './LandCard'
import {Row} from 'antd'
import mac_img from './assets/mac.png'
import ipad_img from './assets/ipad.png'
import iphone_img from './assets/iphone.png'
import iwatch_img from './assets/iwatch.png'

export default function LandCardsList(props) {

  const data = [
    {
      name: 'Mac',
      desc: '一身才华,演绎你的奇思妙想',
      img: mac_img,
      link: '/cats/10/1'
    },
    {
      name: 'iPad',
      desc: '力量很强大,用起来却很简单',
      img: ipad_img,
      link: '/cats/12/1'

    },
    {
      name: 'iPhone',
      desc: '将智慧的世界,放在你手上',
      img: iphone_img,
      link: '/cats/5/1'

    },
    {
      name: 'Watch',
      desc: '工作轻松自如,管理尽在腕间',
      img: iwatch_img,
      link: '/cats/15/1'

    }
  ]

  const list = data.map(d => {
    return (
      <LandCard
        key={Math.random()}
        {...d}
      ></LandCard>
    )
  })
  return (
    <div style={{width: '100%', marginBottom: 64}}>

      <Row style={{marginLeft: -4}}>
        {list}
      </Row>
    </div>
  )
}
