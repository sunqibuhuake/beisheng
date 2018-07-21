/**
 * Created by sunqi on 2018/5/17.
 */
/**
 * Created by sunqi on 2018/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
import sizer from '../../utils/sizer'

export default class OrderListItemNormal extends React.PureComponent {
  render() {

    const styles = {
      root: {
        fontSize: sizer.ORDER_LIST_BODY_FONTSIZE,
        color: 'black'
      }
    }

    return (
      <div className="vertical_text" style={styles.root}>
        {this.props.children}
      </div>
    )
  }
}
