/**
 * Created by sunqi on 2018/6/6.
 */
import React from 'react'
import PurchaseOption from './PurchaseOption'

export default class OptionBlock extends React.PureComponent{

  getOptions() {
    const slugHelper = {
      '颜色': {
        style: 'normal',
        index: 0
      },
      '内存': {
        style: 'long',
        index: 2
      },
      '服务': {
        style: 'normal',
        index: 1
      }
    }
    const options_list = this.props.list.map(option => {
      if (slugHelper[option.spec_name]) {
        option.extra = slugHelper[option.spec_name]
      }
      return option;
    });
    const option_arr = [];
    // 黑科技
    option_arr[100] = '';
    options_list.forEach(option => {

      const elem = (
        <PurchaseOption
          name={option.spec_name}
          key={Math.random()}
          setProductOption={this.props.setProductOption}
          active={this.props.option[option.spec_name]}
          optionStyle={option.extra ? option.extra.style : 'normal'}
          options={option.spec_list}
        ></PurchaseOption>
      )

      if (option.extra ) {
        const index = option.extra.index;

        option_arr[index] = elem;

      } else {
        option_arr.push(elem)
      }
    })
    return option_arr;
  }

  render() {
    return (
      <span>
        {this.getOptions()}
      </span>
    )

  }
}
