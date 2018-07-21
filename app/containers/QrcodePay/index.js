/**
 * Created by sunqi on 2018/5/31.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga'
import './style.css'
import helper from '../../utils/helper'
import {Row,Col} from 'antd'
import PageSection from 'components/Section/PageSection'
import Card from '../../components/Card'
import Header from '../../components/Card/Header'
import QrcodeHeader from './QrcodeHeader'
import axios from 'axios'
import api from '../../utils/api'
import {
  changeSimpleValue,
} from '../App/actions'
import {makeSelectNormal, makeSelectValue, makeSelectAccount} from '../App/selectors'

export class QrcodePay extends React.PureComponent {

  constructor(props) {
    super(props)
    const query = helper.parseQuery(this.props.location.search)
    this.state = {
      qrcode: query.qrcode,
      order_sn: query.order,
      type: query.type,
      info: {}
    }
  }

  loop() {
    const self = this;
    const token = this.props.account.data.user.token;
    const order_sn = this.state.order_sn;
    axios.post(api.queryPeymentStatus, {order_sn, token})
      .then((response) => {
        if (response.data.status == 1) {
          console.log(123)
          window.location.href = '/order/success'
          //self.props.history.push({
          //  pathname: '/order/success'
          //})
        } else {
          if (response.data.status == '1020') {
            const info = {
              company: response.data.result.company,
              create_time: response.data.result.create_time,
              order_amount: response.data.result.order_amount,
              goods_name: response.data.result.goods[0].goods_name,
              order_sn: response.data.result.order_sn
            }
            self.setState({
              info: info
            })
          }
          self.loop.call(self);
        }
      })
      .catch((error) => {
        console.log(error);
        self.loop.call(self)
      });
  }

  componentDidMount() {
    this.loop()
    //this.props.loadData();
  }

  componentWillUnmount() {
    this.loop = null;
  }

  render() {
    return (
      <PageSection>
        <Card style={{margin: '24px 0'}}>
          <Row>
            <Col span={6} style={{height: 120}}>
              <div className="vertical-center">
                <div style={{width: '100%'}}>
                  <h3 style={{fontSize: 18}}>
                    Employee Choice
                  </h3>
                  <div style={{width: 80, height: 1, background: '#e6e6e6', marginBottom: 12}}></div>
                  <h3 style={{fontSize: 14}}>
                    支付中心
                  </h3>
                  </div>

              </div>
            </Col>
            <Col span={12} style={{height: 120}}>
              <div className="vertical-center">
                <div style={{
                    width: '100%',
                    color: 'rgb(140,140,140)',
                    lineHeight: '28px',
                    fontSize: 14
                }}>
                  <div>
                    商户名称:&nbsp;<span style={{color:'black'}}> {this.state.info.company}</span>
                  </div>
                  <div>
                    商品名称:&nbsp; {this.state.info.goods_name}
                  </div>

                  <div style={{width: 220, height: 1, background: '#e6e6e6', margin: '6px 0'}}></div>

                  <div>
                    订单编号:&nbsp; <span style={{color:'black'}}> {this.state.info.order_sn}</span>
                  </div>
                  <div>
                    订单时间:&nbsp; {this.state.info.create_time}
                  </div>
                </div>

              </div>
            </Col>
            <Col span={6} style={{height: 120}}>
              <div className="vertical-center">
                <div style={{width: '100%',fontSize: 18, color: 'black'}}>
                  <h3>
                    应付金额
                  </h3>
                  <h3>
                  <span style={{fontSize: 32,color: '#EB3941', marginRight: 6}}>
                    {this.state.info.order_amount}
                  </span>
                    元
                  </h3>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
        <Card style={{marginBottom: 24}}>
          <Header
            borderBottom={true}
          >
            {this.state.type == 'wx' ? '微信' : '支付宝'}支付
          </Header>
          <div style={{textAlign:'center'}}>
            <img style={{width: 320}} src={this.state.qrcode}/>
          </div>
        </Card>
      </PageSection>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {};
}

const mapStateToProps = createStructuredSelector({
  account: makeSelectAccount()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({key: 'qrcode', saga});
export default compose(
  withSaga,
  withConnect
)(QrcodePay);
