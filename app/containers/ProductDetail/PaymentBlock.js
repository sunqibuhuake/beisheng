/**
 * Created by sunqi on 2018/6/6.
 */
/**
 * Created by sunqi on 2018/6/6.
 */
import React from 'react'

export default class PaymentBlock extends React.PureComponent{

  getOptions() {
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

  }

  render() {
    return (
      <span>
        {this.getOptions()}
      </span>
    )

  }
}
