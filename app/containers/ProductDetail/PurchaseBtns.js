/**
 * Created by sunqi on 2018/5/20.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {message} from 'antd'
export default class PurchaseBtns extends React.PureComponent {
  render() {

    const styles = {
      btn1: {
        width: 170,
        height: 48,
        color: '#0070c9',
        border: '1px solid #0070c9',
        borderRadius: '5px',
        textAlign: 'center',
        lineHeight: '48px',
        display: 'inline-block',
        float: 'right',
        marginRight: '2.4em',
        fontSize: '1.6em',
        cursor: 'pointer',
        display: this.props.fenqi ? 'none': 'block'
      },
      btn2: {
        width: 170,
        height: 48,
        background: '#0070c9',
        color: 'white',
        borderRadius: '5px',
        textAlign: 'center',
        lineHeight: '48px',
        display: 'inline-block',
        float: 'right',
        fontSize: '1.6em',
        cursor: 'pointer'
      },
      disableBtn: {
        width: 170,
        height: 48,
        background: '#e6e6e6',
        color: 'white',
        borderRadius: '5px',
        textAlign: 'center',
        lineHeight: '48px',
        display: 'inline-block',
        float: 'right',
        fontSize: '1.6em',
        cursor: 'default'
      },
      disableBtn2: {
        width: 170,
        height: 48,
        marginRight: 24,
        background: '#e6e6e6',
        color: 'white',
        borderRadius: '5px',
        textAlign: 'center',
        lineHeight: '48px',
        display: 'inline-block',
        float: 'right',
        fontSize: '1.6em',
        cursor: 'default'
      }
    }
    return (
      <div>
        <div
          style={this.props.disable ? styles.disableBtn : styles.btn2}
          onClick={this.props.disable ? () => {message.warning('库存不足!')} : this.props.pay}>
          <span style={{color:'white'}}>
            {this.props.fenqi ? '分期购买' : '立即支付'}
          </span>
        </div>
        <div
          className="detail-add-cart-btn"
          onClick={this.props.disable ? () => {message.warning('库存不足!')} :this.props.addCart}
          style={this.props.disable ? styles.disableBtn2 : styles.btn1}>
          加入购物袋
        </div>

      </div>
    )
  }
}
