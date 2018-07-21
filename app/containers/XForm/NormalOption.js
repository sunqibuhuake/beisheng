/**
 * Created by sunqi on 2018/5/29.
 */

import React from 'react'
import {Row, Col, Select, Checkbox} from 'antd'

import corner from './assets/corner.png'

export default class NormalOption extends React.PureComponent{

  constructor(props) {
    super(props)
    this.state = {
      elem: false
    }
  }


  componentDidMount() {

  }

  getElem() {

    const styles = {
      normal: {
        height: 36,
        lineHeight: '32px',
        fontSize: 14,
        boxSizing: 'border-box',
        color: 'black',
        textAlign:'center',
        position: 'relative',
        width: '100%',
        cursor: 'pointer',
        border: this.props['data-activeid'] == this.props['data-id'] ? '2px solid #0070C9' : '2px solid #bbbbbb'
      }
    }

    const cornerElem = (
      <img style={{
        position: 'absolute',
        width: '10px',
        bottom: 0,
        right: 0
      }} src={corner}/>
    )

    const _props = {}

    for (let prop in this.props) {
      _props[prop] = this.props[prop]
    }

    if (_props.onClick) {
      delete _props._onClick
    } else {
      _props.onClick = _props._onClick
      delete _props._onClick
    }



    let elem = (
      <div
        {..._props}
        //onClick={this.props.onClick || this.props._onClick}
        style={styles.normal}

      >
        {this.props.children}

        {this.props['data-activeid'] == this.props['data-id'] ? cornerElem : ''}
      </div>
    );


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
