/**
 * Created by sunqi on 2018/5/20.
 */
/**
 * Created by sunqi on 2018/5/18.
 */
/**
 * Created by sunqi on 2018/5/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import api from '../../utils/api'
import { Link } from 'react-router-dom';
import {Icon} from 'antd'

import product_img from './assets/pic-commodity-0.png'
export  default function ProductCard(props) {

  const styles = {
    root: {
      width: '96%',
      margin: '0 auto',
      textAlign: 'center',
      fontSize: '1em',
      background: 'white',
      paddingBottom: '1em',
      paddingTop: '1em',
      marginBottom: '1em'
    },
    imgBox: {
      width: '240px',
      height: '230px',
      margin: '1em auto 0'
    },
    img: {
      height: '100%'
    },
    meta: {
      fontSize: 19,
      marginTop: '1em',
      color: 'black',
      height: 58,
      overflow: 'hidden'
      //fontWeight: 'bold'
    },
    btn: {
      margin: '3em auto 1em',
      width: '34%',
      lineHeight: 3,
      color: 'white',
      background: '#AEB6BA'
    },
    heart: {
      position: 'absolute',
      top: '4px',
      right: '20px',
      color: '#0070c9',
      fontSize: 24,
    }

  }
  return (
    <section style={styles.root}>
      <div style={styles.imgBox}>
        <img style={styles.img} src={props.product.original_img}/>
      </div>
      <div style={styles.meta}>
        {props.product.goods_name}
      </div>
      <Link to={'/productdetail/' + props.product.goods_id}>
        <div style={styles.btn} className="cat-select-btn">
          选择
        </div>
      </Link>

      {(props.mode == 'collect') ? (
        <span style={styles.heart}>
              <Icon type="heart" />
      </span>) : '' }

    </section>
  )
}
