/**
 * Created by sunqi on 2018/5/18.
 */
/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import corner from './assets/corner.png'
import './style.css'

import yinse from './assets/ico-color-0.png'
import jinse from './assets/ico-color-1.png'
import huise from './assets/ico-color-2.png'
import hongse from './assets/ico-color-3.png'

import mayihuabei from './assets/huabei.png'

export default class OptionItem extends React.PureComponent {


  getOptionItem() {

  }
  render() {

    const styles = {
      root: {
        //fontSize: '1.6em'
      },
      corner: {
        position: 'absolute',
        width: '10px',
        bottom: 0,
        right: 0
      },
      colorImg: {
        height: 16,
        width: 16,
        verticalAlign: 'middle',
        marginRight: 5,
        marginBottom: 1,
      },
      colorSpan: {
        height: 16,
        width: 16,
        verticalAlign: 'middle',
        display: 'inline-block',
        marginRight: 5,
        marginBottom: 6,
        borderRadius: '50%'
      }

    }

    const colorHelper = {
      '红色': hongse,
      '金色': jinse,
      '玫瑰金': jinse,
      '银色': yinse,
      '深空灰': huise,
      '黑色': huise


    }

    const cornerElem = (
      <img style={styles.corner} src={corner}/>
    )

    let content = (
      <span style={styles.root}>
          {this.props.item}
        </span>
    );

    if (this.props.target == '颜色') {

      content = (
        <span style={styles.root}>
          <img style={styles.colorImg} src={colorHelper[this.props.item]}/>
          {this.props.item}
        </span>
      )
    }

    if (this.props.color) {

      content = (
        <span style={styles.root}>
          <div style={{...styles.colorSpan, background: this.props.color}}></div>
          {this.props.item}
        </span>
      )
    }




    if (this.props.target == '分期') {
      content = (
        <span>
          <i style={{    fontStyle: 'normal',color: '#262626'}}>￥{this.props.text.p}起</i>x{this.props.text.c}期<br/>(含手续费)
        </span>
      )
    }

    if (this.props.item.match('花呗')) {

      content = (
        <img style={{height: 30}} src={mayihuabei} />
      )

    }

    return (
      <span
        data-itemid={this.props.item_id}
        data-item={this.props.target}
        data-src={this.props.src}
        onClick={this.props.setProductOption}
        className={'normal_option_item ' + this.props.optionStyle + '_option_item' + (this.props.active ? ' option_item_active' : '')}
      >
        {content}
        {this.props.active ? cornerElem : ''}
      </span>
    );
  }
}
