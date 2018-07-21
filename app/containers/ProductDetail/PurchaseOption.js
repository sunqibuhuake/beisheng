/**
 * Created by sunqi on 2018/5/20.
 */
import React from 'react'

import OptionItem from '../OptionItem'
export default class PurchaseOption extends React.PureComponent {
  render() {



    const styles = {
      root: {
        width: '100%',
        float: 'left',
        marginBottom:12
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
        display:'inline-block',
        position:'relative',
        float: 'left'
      },
      options: {
        width: 'calc(100% - 50px)',
        display:'inline-block',
        position:'relative',
        float: 'left'
      }
    }


    const option_btns = this.props.options.map(o => {

      return (
        <OptionItem
          {...o}
          setProductOption={this.props.setProductOption}
          key={Math.random()}
          target={this.props.name}
          optionStyle={this.props.optionStyle}
          active={o.item_id == this.props.active}
        ></OptionItem>
      )
    })


    return (
      <div style={styles.root}>
        <div style={styles.namebox}>
          <span style={styles.name}>
            {this.props.name}
          </span>
        </div>
        <div style={styles.options}>
          {option_btns}

        </div>
      </div>
    )
  }
}
