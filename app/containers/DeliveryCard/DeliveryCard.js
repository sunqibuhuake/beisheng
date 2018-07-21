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


export default class DeliveryCard extends React.PureComponent {
  render() {
    const styles = {
      select: {
        width: '100%',
        height: '100%',
        lineHeight: '32px'
      },
    }

    let select = '';

    let text = ''

    if (this.props.delivery.options) {
      select = (
        <XSelect
          style={styles.select}
          data-path="delivery.seller_address_id"
          data-options-path="delivery.options"
          onChange={this.props.onChangeSellerAddressId}
        ></XSelect>
      )

      this.props.delivery.options.forEach(o => {
        if (o.seller_address_id == this.props.delivery.seller_address_id) {
          text = (
            <XText>
              地址: { o.province_name + o.city_name + o.district_name + ' ' + o.address}
              <br/>
              电话：{o.mobile}
            </XText>
          )
        }
      })
    }
    return (
      <Card>
        <Header
          borderBottom={true}
        >
          <span>运送方式</span>
        </Header>

        <Row className="mb12">
          {this.props.delivery.list.map(l => (
            <Col
              key={Math.random()}
              span={5}>
              <div style={{width: '90%'}}>
                <XOption
                  data-path="delivery.id"
                  data-id={l.delivery_id}
                  onClick={this.props.onSelectWay.bind(null, l.delivery_id)}
                >
                  {l.name}
                </XOption>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mb12">
          <Col span="10">
            {select}

          </Col>
        </Row>
        <div className="mb12">
          {text}
        </div>

      </Card>
    )
  }
}
/**
 * Created by sunqi on 2018/5/21.
 */
