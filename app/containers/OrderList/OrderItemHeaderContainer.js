/**
 * Created by sunqi on 2018/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Input, Icon, Button} from 'antd'

import sizer from '../../utils/sizer'

export default class OrderItemHeaderContainer extends React.PureComponent {
  render() {

    const styles = {
      root: {
        background: '#DFE0E1',
        height: sizer.ORDER_LIST_HEADER_HEIGHT,
        fontSize: sizer.ORDER_LIST_HEADER_FONTSIZE,
        lineHeight: sizer.ORDER_LIST_HEADER_HEIGHT / sizer.ORDER_LIST_HEADER_FONTSIZE,
        color: 'black',
        textAlign: 'center'
      }
    }

    return (
      <div style={styles.root}>
        {this.props.children}
      </div>
    )
  }
}
