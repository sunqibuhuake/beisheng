import React from 'react'

import XInput from '../XForm/XInput'

export default class DefaultCheckBox extends React.PureComponent{

  render() {
    return (
      <div style={{textAlign:'center', margin: '12px auto'}}>
        <XInput
          data-path={this.props['data-path']}
          mode="checkbox"
          text="设为默认"
        >
        </XInput>
      </div>
      )

  }

}
