/**
 * Created by sunqi on 2018/5/29.
 */

import React from 'react'
import {Row, Col, Select, Checkbox, Icon} from 'antd'


export default class NormalInput extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      elem: false
    }
  }


  componentDidMount() {

  }

  getElem() {
    let elem = null;
    if (!this.props.valid) {
      return '';
    }
    if (this.props.valid.valid) {
      return '';
    } else {
      elem = (
        <span>
          {this.props.valid.msg}
        </span>
      );

      if (this.props.mode == 'text') {
        elem = (
          <span
            style={this.props.style}
          >
          {this.props.valid.msg}
        </span>
        )
      }

      if (this.props.mode == 'spec') {
        elem = (
          <span
            style={this.props.style}
          >
         <span style={{color:'orange'}}>
           <Icon type="exclamation-circle"/>
         </span>
            {this.props.valid.msg}
        </span>
        )
      }
      return elem
    }
  }


  render() {


    return (
      <div style={{height: 14, fontSize: 12,lineHeight: '14px'}}>
        {this.getElem()}
      </div>
    )
  }
}
