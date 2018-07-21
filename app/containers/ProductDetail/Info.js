/**
 * Created by sunqi on 2018/5/20.
 */
import React from 'react';
import PropTypes from 'prop-types';
import PurchaseOption from './PurchaseOption'
import Counter from './Counter'
import PurchaseBtns from './PurchaseBtns'
import PriceBlock from './PriceBlock'
import CollectBtn from './CollectBtn'
import OptionBlock from './OptionBlock'

import helper from '../../utils/helper'

export default class Info extends React.PureComponent {

  render() {

    const styles = {
      root: {
        width: 482,
        display: 'inline-block',
        position: 'relative',
        paddingTop: 120,
        float: 'left'
      },
      title: {
        fontSize: '3.6em',
      },
      youhuo: {
        paddingLeft: 5,
        fontSize: '1.6em',
        color: '#3B99FC',
        marginBottom: 12
      },
      wuhuo: {
        paddingLeft: 5,
        fontSize: '1.6em',
        color: '#b8b8b8',
        marginBottom: 12
      }
    }


    let zhifuOption = '';
    let fenqiOption = '';
    if (this.props.payment.data && this.props.payment.data[2]) {
      zhifuOption = (
        <PurchaseOption
          name="分期"
          key={Math.random()}
          setProductOption={this.props.setProductOption}
          active={this.props.option.payment}
          optionStyle="mid"
          slug={'payment'}
          options={this.props.payment.data[2].list.map(l => {
          return {
             item: l.fenqi_name,
              item_id: l.fenqi_type_id
          }

          })}
        ></PurchaseOption>
      )
    }
    if (this.props.payment.data && this.props.payment.data[2] && this.props.option.payment) {
      const payment_key = this.props.option.payment;
      fenqiOption = (
        <PurchaseOption
          name=""
          key={Math.random()}
          setProductOption={this.props.setProductOption}
          active={this.props.option.fenqi}
          optionStyle="big"
          slug={'fenqi'}
          options={this.props.payment.data[2].list[(payment_key - 0) - 1].item.map(l => {
          return {
             item: '',
              item_id: l.fenqi_price_id,
              text: {
              p: l.each_term_money,
              c: l.term
            }
          }

          })}
        ></PurchaseOption>
      )
    }

    const youhuo = this.props.store_count > 0;

    return (
      <section style={styles.root}>
        <div style={styles.title}>
          {this.props.data.goods.goods_name}
          <CollectBtn
            collect={this.props.collect}
            is_collect={this.props.data.goods.is_collect}
          ></CollectBtn>
        </div>
        <div style={youhuo ? styles.youhuo : styles.wuhuo}>
          {youhuo ? '有货' : '无货'}
        </div>
        <div>
          <OptionBlock
            list={this.props.data.goods_spec_list}
            setProductOption={this.props.setProductOption}
            option={this.props.option}
          ></OptionBlock>
          <Counter
            disable={this.props.data.goods.is_pay == 1 && this.props.option.payment}
            onClickUp={this.props.onClickUp}
            onClickDown={this.props.onClickDown}
            changeCount={this.props.changeCount}
            value={this.props.count}
          ></Counter>
          {(this.props.data.goods.is_pay == 1 && this.props.payment.data) ? zhifuOption : ''}
          {(this.props.data.goods.is_pay == 1 && this.props.payment.data) ? fenqiOption : ''}

          <PriceBlock
            {...this.props}
          ></PriceBlock>
          <PurchaseBtns
            disable={!youhuo}
            fenqi={this.props.data.goods.is_pay == 1 && this.props.option.payment}
            pay={this.props.pay}
            addCart={this.props.addCart}
          ></PurchaseBtns>
        </div>

      </section>
    )
  }
}
