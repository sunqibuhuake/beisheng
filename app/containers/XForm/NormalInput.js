/**
 * Created by sunqi on 2018/5/29.
 */

import React from 'react'
import {Row, Col, Select, Checkbox} from 'antd'


export default class NormalInput extends React.PureComponent{

  constructor(props) {
    super(props)
    this.state = {
      elem: false
    }
  }


  componentDidMount() {

  }

  getElem() {
    let elem = '';
    if (this.props.mode == 'input') {
      elem = (
        <input
          {...this.props}
        ></input>
      )
    }

    if (this.props.mode == 'textarea') {
      elem = (
        <textarea
          {...this.props}
        ></textarea>
      )
    }

    if (this.props.mode == 'select') {
      elem = (
        <Select
          {...this.props}
        ></Select>
      )
    }

    if (this.props.mode == 'checkbox') {
      elem = (
        <Checkbox
          {...this.props}
          checked={this.props.value ? true : false}
        >
          {this.props.text}
        </Checkbox>
      )
    }

    return elem
  }


  render() {


    return (
      <span>
        {this.getElem()}
      </span>
    )
  }
}
