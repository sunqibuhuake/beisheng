/**
 * Created by sunqi on 2018/5/24.
 */
import { Link } from 'react-router-dom';
import React from 'react'

export default function NavBtn(props) {
  return (

    <div
      className="bs-nav-link"
      style={{
        minWidth: 60,
        padding: '0 0 0 36px',
        lineHeight: '56px',
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
