/**
 * Created by sunqi on 2018/6/20.
 */
/**
 * Created by sunqi on 2018/5/26.
 */
import {Modal,Icon} from 'antd'

import React from 'react'
import {Row,Col} from 'antd'

export default class ShouHouModal extends React.PureComponent {

  render() {
    const styles = {
      root: {
        color: 'black',
        textAlign: 'center',
        width: '100%',
        paddingTop: 32
      },
      card: {
        padding: '32px 24px 24px',
        background: '#E5E6E7',
        width: '100%',
        lineHeight: 1.5
      },
      title: {
        fontSize: 14,
        color: 'black'
      },
      info: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
      },
      box: {
        padding: 12
      }
    }
    return (
      <Modal
        title={null}
        footer={null}
        width={680}
        visible={this.props.visible}
        onCancel={this.props.handleClose}
      >
        <div style={styles.root}>
          <p style={{fontSize: 20, marginBottom: 24}}>申请退换货服务请咨询客服电话或在线客服</p>
          <Row>
            <Col span={12} style={styles.box}>
              <div style={styles.card}>
                <p style={styles.title}> 客服电话</p>
                <p style={styles.info}>
                  <Icon type="phone" style={{marginRight: 12}} />
                  {this.props.account.data.seller.seller_contact}
                </p>

              </div>
            </Col>
            <Col span={12} style={styles.box}>
              <div style={styles.card}>
                <p style={styles.title}> 在线客服</p>
                <p style={styles.info}>
                  <Icon type="customer-service" style={{marginRight: 12}} />
                  联系在线客服
                </p>

              </div>
            </Col>

          </Row>


        </div>
      </Modal>
    )
  }


}
