/**
 * Created by sunqi on 2018/5/20.
 */
/**
 * Created by sunqi on 2018/5/20.
 */
import React from 'react'

import OptionItem from '../OptionItem'

import btn_up_url from './assets/btn-up.png'
import btn_down_url from './assets/btn-down.png'

export default class Counter extends React.PureComponent {
  render() {

    const styles = {
      root: {
        width: '100%',
        float: 'left',
        marginBottom: 12
      },
      name: {
        width: 50,
        fontSize: '1.6em',
        color: '#6f6f6f',
        border: 0,
        textAlign: 'left',
        padding: 0,
        height: 36,
        lineHeight: '36px',
        display: 'inline-block',
        margin: '0 0 5px 5px',
        float: 'left',
        cursor: 'pointer'
      },
      namebox: {
        width: 50,
        display: 'inline-block',
        position: 'relative',
        float: 'left'
      },
      options: {
        width: 'calc(100% - 50px)',
        display: 'inline-block',
        position: 'relative',
        float: 'left'
      },
      inputbox: {
        width: 55,
        padding: 0,
        textAlign: 'left'
      },
      input: {
        width: 51,
        height: 32,
        lineHeight: '32px',
        color: '#6f6f6f',
        textIndent: '0.5em',
        background: 'none',
      },
      btns: {
        width: 24,
        padding: 0,
        background: 'none',
        border: 0,
        display: this.props.disable ? 'none' : 'block'

      },
      img :{
        width: 8,
        position: 'absolute',
        top: '3px',
        left: '7px'
      }
    }

    return (
      <div style={styles.root}>
        <div style={styles.namebox}>
          <span style={styles.name}>
            数量
          </span>
        </div>
        <div style={styles.options}>
          <span className="option-li-span" style={styles.inputbox}>
            <input
              value={this.props.value}
              onChange={this.props.changeCount}
              style={styles.input}></input>
          </span>
          <span className="option-li-span" style={styles.btns}>
            <i
              onClick={this.props.onClickUp}
              className="option-li-span-btn-i"
               style={{position: 'relative'}}>
              <img style={styles.img} src={btn_up_url}/>
            </i>
            <i
              onClick={this.props.onClickDown}
              className="option-li-span-btn-i" style={{position: 'relative',marginTop: 4}}><img style={styles.img} src={btn_down_url}/></i>
          </span>
        </div>
      </div>
    )
  }
}
