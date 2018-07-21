/**
 * Created by sunqi on 2018/5/21.
 */
/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import './style.css'
export default class MidOption extends React.PureComponent {
  render() {
    const styles = {
      root: {
        height: 54,
        background: 'white',
        fontSize: 12,
        lineHeight: 1,
        color: 'black',
        padding: '0 24px',
        display: 'inline-block',
        textAlign: 'center',
        border: '1px solid #bbbbbb',
        position: 'relative',
        boxSizing: 'content-box',
        marginRight: 12,
        cursor: 'pointer'
      },
      in: {
        display:'block'
      }
    }
    return (
      <div style={styles.root}>
        <div className="vertical-center">
          {this.props.children}
        </div>
      </div>
    )
  }
}
