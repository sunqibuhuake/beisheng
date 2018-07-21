/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row ,Col, Checkbox} from 'antd'

import phone_img_url from './assets/phone.png'

import ProductDetail from './ProductDetail'
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

    const detail_data = {
      img: phone_img_url,
      name: 'iPhone X Plus',
      info: [
        {
          name: '颜色',value: '金色'
        },
        {
          name: '内存',value: '128G'
        },
        {
          name: '服务',value: 'AppleCare'
        }
      ]
    }
    return (
      <Row style={styles.root}>

        <Col span={5} className="fh">
          <div className="vertical-center">
            12345678
          </div>
        </Col>
        <Col span={14} className="fh" style={styles.mainblock}>
          <ProductDetail
            data={detail_data}
          ></ProductDetail>
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
