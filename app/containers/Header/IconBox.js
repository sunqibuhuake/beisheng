/**
 * Created by sunqi on 2018/5/25.
 */
import React from 'react'

export default class IconBox extends React.PureComponent{
  render() {
    return (
      <span
        className="bs-nav-link"
        style={{
        minWidth: 42,
        padding: '0 0 0 12px',
        lineHeight: '45px',
        textAlign: 'right',
        color: 'white',
        dislay: 'inline-block',
        float: 'right',
        fontSize: 14,
        cursor: 'pointer'
      }}
      >
      {this.props.children}
    </span>
      )

  }

}
