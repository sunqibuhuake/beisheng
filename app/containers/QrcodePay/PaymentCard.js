/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

import {Row, Col} from 'antd'
import Header from 'components/Card/Header'
import Card from 'components/Card'
import XText from 'components/XText'

import XOption from '../XForm/XOption'

import XSelect from '../XForm/XSelect'

import helper from '../../utils/helper'


export default class PaymentCard extends React.PureComponent {


  installmentDetect() {

  }

  render() {
    const styles = {
      select: {
        width: '100%',
        height: '100%',
        lineHeight: '32px'
      },
      icon: {
        display: 'inline-block',
        height: 16,
        marginRight: 4
      }
    }

    const paymentOption = this.props.payment.list.map(l => (
      <Col
        key={Math.random()}
        span={5}>
        <div style={{width: '90%'}}>
          <XOption
            data-path="payment.selected.id"
            data-id={l.type}
            //onClick={this.props.onSelectWay.bind(null, l.delivery_id)}
          >
            {l.icon ? (
              <img style={styles.icon} src={l.icon}/>
            ) : ''}
            {l.name}
          </XOption>
        </div>
      </Col>
    ));

    //if (!helper.installmentDetect()) {
    //  paymentOption.pop()
    //}

    return (
      <Card>
        <Header
          borderBottom={true}
        >
          <span>支付方式</span>
        </Header>

        <Row className="mb12">
          {paymentOption}
        </Row>

      </Card>
    )
  }
}
/**
 * Created by sunqi on 2018/5/21.
 */
