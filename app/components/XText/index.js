/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
export default class XText extends React.PureComponent {
  render() {
    const styles = {
      root: {
        fontSize: 14,
        lineHeight: 2,
        color: 'black',
        display: 'block',
        textAlign: 'left',
        position: 'relative',
        marginBottom:12
      }
    }
    return (
      <div style={styles.root}>
        {this.props.children}
      </div>
    )
  }
}
/**
 * Created by sunqi on 2018/5/21.
 */
