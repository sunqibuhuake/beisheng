/**
 * Created by sunqi on 2018/7/3.
 */
import React from 'react'
import {Row, Col,Icon} from 'antd'
import {Link} from 'react-router-dom'

import default_img_src from './assets/seller_img.png';


export default function(props) {


  let img_src = '';
  if (props.delivery.ready
    && props.delivery.list[1]
    && props.delivery.list[1].list
    && props.delivery.list[1].list[0]

  ) {
    img_src = props.delivery.list[1].list[0].pic
  }
  return (
    <div style={{
            padding: '0px',
            textAlign: 'left',
            marginBottom: 48,
          }}>

      <div
        style={{textAlign: 'center'}}
      >
        <div
          style={{fontSize: 32, marginBottom: 24}}
        >
          你所需的专业服务支持，已近在咫尺。

        </div>
        <div
          style={{fontSize: 14,marginBottom: 48}}
        >
          企业解决方案中心现已入驻国内众多园区，随时随地为你提供丰富的线下体验和专业咨询，让你的工作方式耳目一新。
        </div>
      </div>


      <Row style={{height: 360, overflow: 'hidden'}}>
        <Col span={8} className="fh">
          <div style={{
            padding: '72px 12px 24px 48px',
            height: '100%',
            background: '#F2F2F2'
          }}>
            <div style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 6
            }}>
              Apple 企业解决方案中心列表
            </div>
            <a href="/intro#about-intro">
              <span style={{color: '#6DBFF8'}}>

                      点击查看
              <Icon type="right"/>
              </span>
            </a>

            <div style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 24,
              marginTop: 42
            }}>
              营业时间:
            </div>

            <div style={{
              fontSize: 14
            }}>
              星期一至星期日<br/>
              10:00 - 22:00
            </div>
          </div>

        </Col>
        <Col span={16} className="fh">
          <div className="seller-img"
               style={{
                backgroundImage: img_src ? `url(${img_src})` : `url(${default_img_src})`
               }}
          ></div>
        </Col>
      </Row>


    </div>

  )
}
