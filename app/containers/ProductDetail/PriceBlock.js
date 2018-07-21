/**
 * Created by sunqi on 2018/5/20.
 */
import React from 'react'
import helper from '../../utils/helper'
export default function(props) {
  const styles  ={
    root: {
      width: '100%',
      float: 'left',
      marginBottom:12,
      textAlign: 'right'
    }
  }

  const s_price =  Math.round(helper.add(props.priceChange - 0,props.data.goods.shop_price - 0));
  const count = props.count;
  const sum = (s_price ) * count;

  const flag = props.data.goods.is_pay && props.option.payment && props.option.fenqi && props.payment.ready;

  let term
  if (flag) {
    term = props.payment.data[2].list[props.option.payment - 0 - 1].item[props.option.fenqi - 0 - 1]
  }
  return (
    <div style={styles.root}>
      <div style={{fontSize: '3.2em', color: '#313131'}}>
        <span style={{fontSize: 16, marginRight: 12}}>零售价: <span style={{
          textDecoration: 'line-through'
        }}>RMB {(props.data.goods.market_price - 0) + (props.marketPriceChange - 0) }</span></span>
          RMB {sum}
      </div>


      <div style={{fontSize: '1.4em'}}>
        {flag ? (`分期价:￥${term.each_term_money}起 x ${term.term}期`) : ''}
      </div>
    </div>
  )
}
