/**
 * Created by sunqi on 2018/5/29.
 */
import React from 'react'

import XInput from './XInput'

import XSelect from './XSelect'

import XOption from './XOption'

import XEditOption from './XEditOption'

//console.log(XInput)


//import MiddleComponent from './MiddleComponent'

export default class XForm extends React.Component {
  render() {
    return (
      <div>
        <XEditOption
          id="1"
          data-path="test.value"
          input-data-path="test.input"
          input-static-data-path="test.list.1.name"

          input_style={{width: '100%'}}
        ></XEditOption>

        <XEditOption
          id="2"
          data-path="test.value"
          input-data-path="test.input"
          input-static-data-path="test.list.2.name"
          input_style={{width: '100%'}}
        ></XEditOption>



      </div>
    )
  }
}
