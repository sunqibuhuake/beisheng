/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Row, Col} from 'antd'
import {Link} from 'react-router-dom'
export default function RecommendCard(props) {

  const styles = {
    root: {
      width: '96%',
      height: 120,
      margin: '0 auto 28px'
    },
    imgbox: {
      width: 120,
      height: 120,
      position: 'relative',
      display: 'inline-block',
      float: 'left'
    },
    img: {
      width: '100%',
      height: '100%'
    },
    info: {
      width: 'calc(100% - 120px)',
      height: 120,
      paddingLeft: 24,
      position: 'relative',
      display: 'inline-block',
      float: 'left'
    },
    btn: {
      width: 145,
      height: 36,
      lineHeight: '36px',
      fontSize: 14,
      textAlign: 'center',
      background: '#F0F0F2',
      border: '1px solid #E1E2E3'



    }
  }
  return (
    <section style={styles.root}>
      <div style={styles.imgbox}>
        <img style={styles.img} src={props.original_img}/>
      </div>
      <div style={styles.info}>
        <div style={{height: 78}}>
          <div style={{fontSize: 20, lineHeight:'28px'}}>
            {props.goods_name}
          </div>
          <div style={{fontSize: 14, lineHeight: '22px'}}>
            ¥{props.shop_price}
          </div>
        </div>
        <div style={styles.btn}>
          <Link to={"/productdetail/" + props.goods_id}>
            立即选购
          </Link>
        </div>

      </div>

    </section>
  )

}
