/**
 * Created by sunqi on 2018/5/21.
 */
/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

import { Row,Col, Popconfirm } from 'antd';
import LogisticFlow from './LogisticFlow'
import ActionBtn from './ActionBtn'

export default class StatusCard extends React.PureComponent {
  render() {
    const styles = {
      root: {
        height: 192,
        padding: '24px 0px',
        border: '1px solid #eeeeee'
      },
      btn: {
        width: 96,
        height: 32,
        lineHeight: '32px',
        fontSize: 14,
        color: 'white',
        background:'#0070c9',
        margin: '0 auto'
      },
      scrollBox: {
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
        padding: '0 32px'
      }

    }

    const {order_sn} = this.props.order;
    return (
      <section className="mb12" style={styles.root}>
        <Row className="fh">
          <Col span={6} className="fh">
            <section style={{textAlign:'center'}}>
              <p style={{color: '#818181',marginBottom: 28}}>
                订单号:{order_sn}
              </p>
           <ActionBtn
             {...this.props}
           ></ActionBtn>
            </section>

          </Col>
          <Col span={17} className="fh" style={{borderLeft: '1px solid #eeeeee'}}>
            <div style={styles.scrollBox}>
              <LogisticFlow
                express={this.props.express}
              ></LogisticFlow>
            </div>
          </Col>
        </Row>

      </section>
    )
  }
}


