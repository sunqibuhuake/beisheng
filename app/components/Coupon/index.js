/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

import disable_img from './assets/mask-1.png'
import enable_img from './assets/mask-0.png'
import active_img from './assets/mask.png'

import helper from '../../utils/helper'

export default class Coupon extends React.PureComponent {
  selectCoupon() {
    if (this.props.status == 'disable') {
      return false;
    }

    this.props.selectCoupon(this.props.id, this.props.money - 0);
  }
  render() {
    const styles = {
      root: {
        height: 102,
        width: 203,
        fontSize: 14,
        color: 'black',
        lineHeight: '22px',
        textAlign: 'left',
        display: 'inline-block',
        position: 'relative',
        marginRight: 12,
        cursor: 'pointer'
      },
      imgbox: {
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0,
      },
      textbox: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        zIndex: 1
      },
      img: {
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0,
      }
    }

    let imgContainer = null;

    if (this.props.status == 'disable') {
      imgContainer = (
        <div
          style={styles.imgbox}
        >
          <div style={{width: '100%', position: 'relative'}}>
            <img style={styles.img} src={disable_img}/>
          </div>
        </div>
      )
    }
    if (this.props.status == 'enable') {
      imgContainer = (
        <div
          style={styles.imgbox}
        >
          <div style={{width: '100%', position: 'relative'}}>
            <img style={styles.img} src={enable_img}/>
          </div>
        </div>
      )
    }

    if (this.props.status == 'active') {
      imgContainer = (
        <div
          style={styles.imgbox}
        >
          <div style={{width: '100%', position: 'relative'}}>
            <img style={styles.img} src={enable_img}/>
            <img style={styles.img} src={active_img}/>

          </div>
        </div>
      )
    }


    return (
      <div style={styles.root}
           onClick={this.selectCoupon.bind(this)}
      >
        {imgContainer}
        <div style={styles.textbox}>
          <div style={{width: '100%', position: 'relative', padding: '6px 12px', height: '100%'}}>
            <div>
              <span style={{fontSize: 28,lineHeight: 'normal', color: '#fff'}}>
          ￥{this.props.money}
        </span>
               <span style={{fontSize: 14,lineHeight: 'normal', color: '#fff', paddingLeft: 12}}>
                  满{this.props.condition}
                </span>
            </div>
            <div style={{fontSize: 14,lineHeight: 'normal', color: '#fff'}}>
              有效期至{helper.timestampToTime(this.props.use_end_time - 0)}
            </div>
            <div style={{position: 'absolute', left: '12px', bottom: '6px',color: '#a4a4a4'}}>
              [{this.props.name}]
            </div>
          </div>

        </div>

      </div>
    )
  }
}
