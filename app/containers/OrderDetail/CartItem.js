/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row ,Col, Checkbox} from 'antd'

import OrderListItemLeft from '../OrderList/OrderListItemLeft'
export default class CartItem extends React.PureComponent{
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
        height:20,
        margin: '0 auto',
        lineHeight: '20px',
        textAlign:'center',
        border: '1px solid #e8e8e8'
      }

    }
    return (
      <Row style={styles.root}>
        <Col span={20}>
          <OrderListItemLeft
            {...this.props}
          >
          </OrderListItemLeft>
        </Col>
        <Col span={4} className="fh" style={{borderLeft: '1px solid #e6e6e6'}}>
          <div className="vertical-center">
            <div style={{textAlign:'center'}}>

            </div>
          </div>
        </Col>
      </Row>
    )
  }

}
