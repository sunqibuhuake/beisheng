/**
 * Created by sunqi on 2018/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Input, Icon, Button} from 'antd'

import sizer from '../../utils/sizer'

export default class OrderItemBodyContainer extends React.PureComponent {
  render() {

    const styles = {
      root: {
        fontSize: 14,
        borderBottom: '1px solid #e1e2e3',
        borderRight: '1px solid #e1e2e3',
        borderLeft: '1px solid #e1e2e3',
        boxSizing: 'content-box'
      }
    }

    return (
      <div style={styles.root}>
        {this.props.children}
      </div>
    )
  }
}
