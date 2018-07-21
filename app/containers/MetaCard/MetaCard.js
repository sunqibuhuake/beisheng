/**
 * Created by sunqi on 2018/5/21.
 */
/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

import {Row, Col} from 'antd'
import {Link} from 'react-router-dom'
import Header from 'components/Card/Header'
import Card from 'components/Card'
import ava_img_url from './assets/ava.png'
export default class MetaCard extends React.PureComponent {
  render() {
    const styles = {
      avabox: {
        height: '100%',
        width: 96,
        display: 'inline-block',
        position: 'relative',
        float: 'left'
      },
      metabox: {
        height: '100%',
        padding: '0 24px',
        width: 'calc(100% - 96px)',
        display: 'inline-block',
        position: 'relative',
        float: 'left'
      },
      name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 6
      },
      intro: {
        fontSize: 14,
        color: 'black',
        lineHeight: 2,
        marginBottom: 4
      }
    }
    return (
      <Card>
        <Row style={{height: 112}}>
          <Col span={16} className="fh">

            <div style={styles.avabox}>
              <div className="vertical-center">
                <img style={{height: 80, width: 80, borderRadius: '50%', background: '#e6e6e6'}} src={this.props.avatar || ava_img_url}/>
              </div>
            </div>
            <div style={styles.metabox}>
              <p style={styles.name}>
                {this.props.nickname}
                <span style={{paddingLeft:36}}>{this.props.title}</span>
              </p>
              <p style={styles.intro}>
                {this.props.company}
                <br/>
                企业邮箱: {this.props.email}
              </p>
              <div style={{textAlign:'right'}}>
                <span onClick={this.props.onEdit} style={{color: '#0270c9', cursor: 'pointer'}}>
                                  修改个人信息
                </span>
              </div>

            </div>

          </Col>
          <Col span={8} className="fh" style={{borderLeft: '1px solid #e6e6e6'}}>
            <div className="vertical-center">
              <div style={{fontSize: 14}}>
                <p className="bs-link-normal">
                  <Link to="/coupon">
                    优惠券({this.props.coupon})
                  </Link>
                </p>
                <p className="bs-link-normal">
                  <Link to="/collects/1">
                    收藏({this.props.collect})
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    )
  }
}
