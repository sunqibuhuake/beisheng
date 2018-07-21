/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import './style.css'
export default class BigOption extends React.PureComponent {
  render() {
    const styles = {
      root: {
        height: 62,
        width: 128,
        background: 'white',
        fontSize: 20,
        lineHeight: '64px',
        color: 'black',
        display: 'inline-block',
        textAlign: 'center',
        border: '1px solid #bbbbbb',
        position: 'relative',
        boxSizing: 'content-box',
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
