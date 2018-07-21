/**
 * Created by sunqi on 2018/5/20.
 */
import React from 'react'
import product_img from './assets/pic-2.jpg'
import {Link } from 'react-router-dom'
import {Row, Col} from 'antd'
export default function ({product}) {
  const styles = {
    row: {
      marginBottom: 12
    },
    imgBox: {
      width: 140,
      height: 140,
      position: 'relative',
      display: 'inline-block',
      float: 'left'
    },
    img: {
      width: '100%',
      height: '100%',
    },
    meta: {
      width: 'calc(100% - 140px)',
      position: 'relative',
      display: 'inline-block',
      float: 'left',
      paddingLeft: '1.6em'

    },
    pname: {
      fontSize: '2em',
      fontWeight: 'bold',
      lineHeight: 1,
      padding: '0.4em 0'
    },
    pintro: {
      fontSize: '1.4em',
      padding: '0.4em 0',
      lineHeight: '2.2em'
    },
    pbuy: {
      fontSize: '1.4em',
      padding: '0.4em 0',
      color: '#1890ff'
    }

  }
  return (
    <section>
      <Row style={styles.row}>
        <div style={styles.imgBox}>
          <img style={styles.img} src={product.img}/>
        </div>
        <div  style={styles.meta}>
          <div style={styles.pname}>
            {product.name}
          </div>
          <div style={styles.pintro}>
            {product.intro}
          </div>
          <div style={styles.pbuy}>
            <Link to={"/productdetail/" + product.id} >
              {'选购 >'}
            </Link>
          </div>
        </div>
      </Row>
    </section>
  )
}
