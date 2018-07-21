/**
 * Created by sunqi on 2018/5/29.
 */
import React from 'react'
export default function(props) {

  const Component = props.component;
  return (
    <Component
      data-path={props['data-path']}
    ></Component>
  )
}
