/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import './style.css'
export default class XOption extends React.PureComponent {
  render() {
    const styles = {
      root: {
        height: 32,
        background: 'white',
        fontSize: 14,
        lineHeight: '36px',
        color: 'black',
        display: 'inline-block',
        textAlign: 'center',
        border: '2px solid #bbbbbb',
        position: 'relative',
        boxSizing: 'content-box',
        padding: '0 28px',
        marginRight: 12,
        cursor: 'pointer'
      },
      in: {
        display:'block'
      }
    }
    return (
      <div style={styles.root} className="xoption">
        {this.props.text}
      </div>
    )
  }
}
/**
 * Created by sunqi on 2018/5/21.
 */
