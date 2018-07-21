/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row ,Col, Checkbox} from 'antd'

import phone_img_url from './assets/phone.png'
export default class ProductCardBody extends React.PureComponent {
  render() {

    const styles = {
      root: {
        height: 120,
        padding: '0',
        color: '#656565',
        fontSize: '1.4em',
        background: 'white',
        borderLeft: '1px solid #ececec',
        borderRight: '1px solid #ececec',
        borderBottom: '1px solid #ececec'
      },
      imgbox: {
        display: 'inline-block',
        position: 'relative',
        width: 96,
        height: 96,
        overflow: 'hidden',
        float: 'left'
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
        lineHeight: '1.4',
        fontSize: '14px',
        float: 'left'
      },
      pname: {
        fontSize: 20,
        color: '#424242',
        lineHeight: '28px'
      },
      countBtn: {
        width: 20,
        height: 20,
        margin: '0 auto',
        lineHeight: '20px',
        textAlign: 'center',
        border: '1px solid #e8e8e8'
      },
      mainblock: {
        padding: '10px 0px',
        borderLeft: '1px solid #e6e6e6',
        borderRight: '1px solid #e6e6e6',
        boxSizing: 'border-box',
      }

    }
    return (
      <Row style={styles.root}>

        <Col span={5} className="fh">
          <div className="vertical-center">
            12345678
          </div>
        </Col>
        <Col span={14} className="fh" style={styles.mainblock}>
          <div style={styles.imgbox}>
            <div className="vertical-center">
              <img style={styles.img} src={phone_img_url}/>
            </div>
          </div>
          <div style={styles.meta}>

            <div style={styles.pname}>iPhone 8 Plus</div>
            外观：银色<br/>
            服务：无<br/>
            配置：64GB
          </div>
        </Col>

        <Col span={5} className="fh tac">
          <div className="vertical-center">
            2018-01-01<br/>
            11:30:34
          </div>
        </Col>
      </Row>
    )
  }

}
