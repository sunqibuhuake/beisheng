/**
 * Created by sunqi on 2018/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Row,Col} from 'antd'
import sizer from '../../utils/sizer'

import img_url from './assets/phone.png'
export default function OrderListItemIntro(props) {

  const styles = {
    root: {
      padding: '0px 8px',
      height: '100%',
      width: '100%'
    },
    imgbox: {
      width: 90,
      height: 90,
      border:'1px solid #e6e6e6'
    },

    img: {
      width: sizer.ORDER_LIST_IMG_SIZE,
      height: sizer.ORDER_LIST_IMG_SIZE,
    },
    meta: {
      color: '#999A9B',
      fontSize: 12,
      lineHeight: 1.5,
    },
    name: {
      color: 'black',
      fontSize: 14,
      lineHeight:1,
      margin: '7px 0px'
    }
  }

  const meta_intro = props.meta ? props.meta.split(' ').map(m => (
    <div key={Math.random()}>
      {m}
    </div>
  )) : ''
  return (
    <section style={styles.root}>
      <div className="vertical-center">
        <div style={styles.imgbox}>
          <img style={{width: '100%', height: '100%'}} src={props.img}/>
        </div>
        <div style={{width:'calc(100% - 90px)', paddingLeft:12}}>
          <div style={styles.name}>
            {props.name}
          </div>
          <div style={styles.meta}>
            {meta_intro}
          </div>
        </div>
      </div>
    </section>
  )
}
