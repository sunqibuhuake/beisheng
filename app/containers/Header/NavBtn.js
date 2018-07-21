/**
 * Created by sunqi on 2018/5/24.
 */
import { Link } from 'react-router-dom';
import React from 'react'
import {Menu, Dropdown} from 'antd'

export default function NavBtn(props) {

  if (props.dropdown && props.menu) {
    return (
      <div
        className="bs-nav-link"
        style={{
        minWidth: 60,
        padding: '0 0 0 36px',
        lineHeight: '45px',
        textAlign: 'center',
        color: 'white',
        dislay: 'inline-block',
        float: 'right',
        fontSize: 14
      }}
      >

        <Dropdown overlay={props.menu} placement="bottomCenter">
          <Link to={props.path} className="ant-dropdown-link">
            {props.name}
          </Link>
        </Dropdown>

      </div>
    )
  }
  return (

    <div
      className="bs-nav-link"
      style={{
        minWidth: 60,
        padding: '0 0 0 36px',
        lineHeight: '45px',
        textAlign: 'center',
        color: 'white',
        dislay: 'inline-block',
        float: 'right',
        fontSize: 14
      }}
    >
      <Link to={props.path}>
        {props.name}
      </Link>
    </div>
  )
}
