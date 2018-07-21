/**
 * Created by sunqi on 2018/5/18.
 */
/**
 * Created by sunqi on 2018/5/18.
 */
import React from 'react';
import PropTypes from 'prop-types';

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
      paddingTop: '1em'
    },
    imgbox: {
      height: '180px',
      marginTop: '1em'
    },
    img: {
      height: '100%'
    },
    meta: {
      marginTop: '1em',
      color: 'black',
      fontWeight: 'bold'
    },
    btn: {
      margin: '1em auto',
      width: '30%',
      lineHeight: 2.2,
      color: 'white',
      background: '#AEB6BA'
    }

  }
  return (
    <section style={styles.root}>
      <div style={styles.imgbox}>
        <img style={styles.img} src={product_img}/>
      </div>
      <div style={styles.meta}>
        iPhone 8 Plus<br/>
        金色
      </div>
      <div style={styles.btn}>
        选择
      </div>
    </section>
  )
}
