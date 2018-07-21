/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

export default class Card extends React.PureComponent {
  render() {
    const styles = {
      root: {
        padding: 24,
        background: 'white',
        minHeight: this.props.mh ? this.props.mh : 96,
        ...this.props.style || {}
      }
    }
    return (
      <section style={styles.root}>
        {this.props.children}
      </section>
    )
  }
}
