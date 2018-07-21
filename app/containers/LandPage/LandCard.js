/**
 * Created by sunqi on 2018/5/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link } from 'react-router-dom'
import {Col, Icon} from 'antd'
import product_img from './assets/pic-home-0.png'
export  default function LandCard(props) {


  const styles = {
    title: {
      fontSize: '16px',
      fontWeight: 'bold',
      textAlign: 'center',
      lineHeight: 2
    },
    btn: {
      color: '#4a93d1'
    },
    card: {
      background: '#f2f2f2',
      paddingTop: 12,
      paddingBottom: 24
    },
    meta: {
      fontSize:14,
      textAlign: 'center',
      padding: '32px 0',
      lineHeight: 2
    }

  }
  return (
    <Col md={6} sm={12} xs={12} style={{paddingLeft: 6}}>
      <div style={styles.card}>
        <div style={{
          width: '80%',
          margin: '0 auto',
          textAlign: 'center',
          padding: '48px 0'
        }}>
          <img style={{height: 144,maxWidth: '100%'}} src={props.img}/>
        </div>
        <div  style={styles.title}>
          {props.name}<br/>
          {props.desc}
        </div>
        <div style={styles.meta}>
          了解更多可选的{props.name}产品
          <Link to={props.link}>
            <div style={styles.btn}>
              开始选购
              <span style={{marginRight: 2}}>
                <Icon type="right"/>
              </span>
            </div>
          </Link>
        </div>

      </div>

    </Col>
  )
}
