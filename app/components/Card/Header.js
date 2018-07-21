/**
 * Created by sunqi on 2018/5/21.
 */
/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

export default class Header extends React.PureComponent{
  render() {
    const styles = {
      header: {
        height:36,
        fontSize: 20,
        color: 'black',
        lineHeight: '32px',
        textAlign: 'left',
        marginBottom:12,
        borderBottom: this.props.borderBottom ? '1px solid #dddddd' : 'none'
      }
    }
    return (
      <header style={styles.header}>
        {this.props.children}
      </header>
    )
  }
}
