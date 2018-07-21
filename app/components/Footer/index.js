import React from 'react';
import {Col, Row} from 'antd'
import $ from 'jquery'
import FooterCard from './FooterCard'
import './style.css'
function Footer(props) {

  function get400() {
    return $('#hide-400').val()
  }
  const data = [
    {
      t: '用户指南',
      id: 'user-guide',
      list: [
        {
          name: '购物流程',
          path: '/intro'
        },

      ]
    },
    {
      t: '付款方式',
      id: 'payment-intro',

      list: [
        {
          name: '支付方式/发票说明',
          path: '/intro'
        },
        {
          name: '优惠劵说明',
          path: '/intro'
        }
      ]
    },
    {
      t: '配送方式',
      id: 'delivery-intro',

      list: [
        {
          name: '配送运费',
          path: '/intro'
        },
        {
          name: '配送范围',
          path: '/intro'
        },
        {
          name: '配送时间',
          path: '/intro'
        }
      ]
    },
    {
      t: '售后服务',
      id: 'shouhou-intro',

      list: [
        {
          name: '退货政策',
          path: '/intro'
        },
        {
          name: '退货流程',
          path: '/intro'
        },
        {
          name: '常见问题',
          path: '/intro'
        }
      ]
    },
    {
      t: '关于 Employee Choice',
      id: 'about-intro',

      list: [
        {
          name: '经销商公司',
          path: '/intro'
        },
        {
          name: '经销商门店',
          path: '/intro'
        },
        {
          name: '服务介绍',
          path: '/intro'
        },
        {
          name: '联系我们',
          path: '/intro'
        }
      ]
    }


  ]

  let flag = false;
  const pathname = props.history.location.pathname;
  if (pathname == '/' || pathname == '/login' || pathname == '/entry') {
    flag = true;
  }
  return (
    <footer style={{
      width: '100%',
      background: '#F2F2F2'
    }}>
      <div style={{
      width: '78%',
      margin: '0px auto',
      paddingTop: 36,
      display: flag ? 'none' : 'block'
      }}>
        <Row style={{paddingBottom: 42}}>
          <Col span={4}>
            <FooterCard
              data={data[0]}
            ></FooterCard>
          </Col>
          <Col span={5}>
            <FooterCard
              data={data[1]}
            ></FooterCard>
          </Col>
          <Col span={4}>
            <FooterCard
              data={data[2]}
            ></FooterCard>
          </Col>
          <Col span={5}>
            <FooterCard
              data={data[3]}
            ></FooterCard>
          </Col>
          <Col span={6}>
            <FooterCard
              data={data[4]}
            ></FooterCard>
          </Col>

        </Row>


        <div style={{
      borderTop: '1px solid #e6e6e6',
      height: 48,
      lineHeight: '48px',
      fontSize: 12,
      color: 'rgb(140,140,140)',
      display: props.history.location.pathname.match('login') ? 'none': 'block',
      }}>
          <Row>

            <Col span={12} className="tal">
              Copyright © 2018 北京润泽金诚科技有限公司 保留所有权利
            </Col>

            <Col span={12} className="tar" id="footer-400">
              电话支持: <span >{ '400-888-6688'}</span>
            </Col>
          </Row>
        </div>

      </div>

    </footer>
  );
}

export default Footer;
