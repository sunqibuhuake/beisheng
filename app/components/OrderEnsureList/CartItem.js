/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row ,Col, Checkbox} from 'antd'

import phone_img_url from './assets/phone.png'

import helper from '../../utils/helper'
export default class CartItem extends React.PureComponent{
  render() {

    const styles = {
      root: {
        height: 120,
        padding: '10px 0',
        color: '#656565',
        fontSize: '1.4em',
        background: 'white'
      },
      imgbox: {
        position: 'relative',
        width: 96,
        height: 96,
        margin: '0 auto'
      },
      img: {
        width: '100%',
        height: '100%'
      },
      meta: {
        display: 'inline-block',
        position: 'relative',
        width: 'calc(100% - 96px)',
        height: 96,
        float: 'left'
      },
      pname: {
        fontSize: 20,
        color: '#424242',
        lineHeight: '28px'
      },
      countBtn: {
        width: 20,
        height:20,
        margin: '0 auto',
        lineHeight: '20px',
        textAlign:'center',
        border: '1px solid #e8e8e8'
      }

    }

    const item = this.props.item;
    return (
      <Row style={styles.root}>
        <Col span={6} className="fh">
          <div className="vertical-center">
            <div style={styles.imgbox}>
              <img style={styles.img} src={item.img}/>
            </div>
          </div>
        </Col>
        <Col span={6} className="fh">
          <div className="vertical-center">
            {item.name}
          </div>
        </Col>
        <Col span={4} className="fh">
          <div className="vertical-center">
            <div>
              {item.options.map(option => (
                <div
                  key={Math.random()}
                >
                  {option.name}:{option.value}
                </div>
              ))}
            </div>
          </div>

        </Col>
        <Col span={4} className="fh">
          <div className="vertical-center">
            {item.count}
          </div>
        </Col>
        <Col span={4} className="fh">
          <div className="vertical-center">
            ￥{helper.moneyFormatter((item.price - 0) * (item.count - 0))}
          </div>
        </Col>
      </Row>
    )
  }

}
