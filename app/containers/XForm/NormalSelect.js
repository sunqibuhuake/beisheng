/**
 * Created by sunqi on 2018/5/31.
 */
/**
 * Created by sunqi on 2018/5/29.
 */

import React from 'react'
import {Row, Col, Select} from 'antd'

const Option = Select.Option

export default class NormalSelect extends React.PureComponent{

  constructor(props) {
    super(props)
    this.state = {
      elem: false
    }
  }


  componentDidMount() {

  }



  render() {


    return (
      <Select
        {...this.props}
        onChange={this.props.onChange || this.props._onChange}
      >
        {this.props.options.map(option => (
          <Option
            key={Math.random()}
            value={option.value}
          >
            {option.name}
          </Option>
        ))}
      </Select>
    )
  }
}
