/**
 * Created by sunqi on 2018/6/3.
 */
import React from 'react'

export default class NavFrame extends React.PureComponent {
  render() {

    const styles = {
      root: {
        height: window.innerHeight - 280,
        width: '100%',
        textAlign: 'center',
        fontSize: 14,
        padding: 48
      }
    }
    return (
      <section
        style={
          styles.root
        }
      >
        {this.props.children}

      </section>
    )
  }
}
