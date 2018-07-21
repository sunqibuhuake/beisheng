/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row ,Col, Checkbox, Popconfirm} from 'antd'

import phone_img_url from './assets/phone.png'
export default class CartItem extends React.PureComponent{
  render() {

    const styles = {
      root: {
        height: 120,
        padding: '10px 0',
        color: '#656565',
        fontSize: '1.4em',
        background: 'white'
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
        border: '1px solid #e8e8e8',
        cursor:'pointer'
      }

    }

    if (this.props.visibility === 'hidden') {
      styles.root.display = 'none'
    }

    const {item} = this.props;
    return (
      <Row style={styles.root}>
        <Col span={2} className="fh">
          <div className="vertical-center">
            <Checkbox
              checked={item['bs-checked']}
              value={item.uid}
              onChange={this.props.changeItemCheckbox}
            ></Checkbox>
          </div>
        </Col>
        <Col span={13} className="fh">
          <div style={styles.imgbox}>
            <div className="vertical-center">
              <img style={styles.img} src={item.original_img}/>
            </div>
          </div>
          <div style={styles.meta}>
            <div style={styles.pname}>
              {item.goods_name}
            </div>
            <div style={{fontSize:12}}>
              {item.spec_key_name ? item.spec_key_name.map(l => (
                <div key={Math.random()}>
                  {l.name}:{l.item}
                </div>
              )) : ''}
            </div>
          </div>
        </Col>
        <Col span={3} className="fh">
          <div className="vertical-center">
            ￥{Math.round((item.member_goods_price - 0) * (item.goods_discount - 0)) * (item.goods_num - 0)}
          </div>
        </Col>
        <Col span={3} className="fh">
          <div className="vertical-center">
            <Row style={{width: '70%', margin: '0 auto'}}>
              <Col span={8}>
                <div
                  onClick={this.props.changeItemCount}
                  data-uid={item.uid}
                  data-mode={-1}
                  style={styles.countBtn}>
                  -
                </div>
              </Col>
              <Col span={8} style={{textAlign:'center'}}>
                {item.goods_num}
              </Col>
              <Col span={8}>


                <div
                  onClick={this.props.changeItemCount}
                  data-uid={item.uid}
                  data-mode={1}
                  style={styles.countBtn}>
                  +
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={3} className="fh">
          <div className="vertical-center">
            <div style={{textAlign:'center'}}>
              <div className="cart-list-action-delete">移入收藏夹</div>

              <Popconfirm title="是否要删除该商品?" onConfirm={this.props.onClickDelete.bind(null, item.id)} onCancel={null} okText="确认" cancelText="取消">
                  <span
                    data-id={item.id}
                    data-uid={item.uid}
                    //onClick={this.props.onClickDelete}
                    style={{cursor: 'pointer', lineHeight: 2}}
                  >
                    删除
              </span>
              </Popconfirm>

            </div>
          </div>
        </Col>
      </Row>
    )
  }

}
