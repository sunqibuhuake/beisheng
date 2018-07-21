/**
 * Created by sunqi on 2018/6/3.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import NavFrame from './NavFrame'
import './style.css'
export default function (props) {

  const id = props.match.params.id;

  return (

    <NavFrame>
      <div className="vertical-center">
        <div>

          <div className="nav-icon-warning">
            <Icon type="close" />
          </div>
          <div>
            支付失败,请
            <Link to={"/order/" + id}>
          <span>
            {'继续支付>'}
          </span>
            </Link>
          </div>
        </div>

      </div>

    </NavFrame>
  )
}
