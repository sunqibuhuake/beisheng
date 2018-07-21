/**
 * Created by sunqi on 2018/7/4.
 */
import React from 'react'

export default class Container extends React.PureComponent{
  render() {
    return (
      <div style={{
            padding: '48px 0',
            textAlign: 'center',
            width: '80%',
            margin: '0 auto',
            minHeight: '100%'

          }}>
        {this.props.children}
      </div>
    )
  }
}
