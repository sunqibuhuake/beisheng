/**
 * Created by sunqi on 2018/5/21.
 */
/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import {Radio} from 'antd'
import BigOption from 'components/XOption/BigOption'
export default class CustomRadio extends React.PureComponent {
  render() {
    const styles = {
      root: {
        height: 64,
        color: 'black',
        display: 'inline-block',
        textAlign: 'center',
        position: 'relative',
        boxSizing: 'content-box',
        marginRight: 12,
        cursor: 'pointer'
      },

    }
    return (
      <div style={styles.root}>
        <Radio>
         <BigOption
           text={this.props.text}
         ></BigOption>
        </Radio>
      </div>
    )
  }
}
