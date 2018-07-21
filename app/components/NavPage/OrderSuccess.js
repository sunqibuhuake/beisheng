/**
 * Created by sunqi on 2018/6/3.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import NavFrame from './NavFrame'
import './style.css'
export default function (props) {

  return (
    <NavFrame>
      <div className="vertical-center">
        <div>

          <div className="nav-icon">
            <Icon type="check-circle-o" />
          </div>
          <div>
            您已支付成功,查看
            <Link to="/orders/1">
          <span>
            我的订单>
          </span>
            </Link>
          </div>
        </div>

      </div>

    </NavFrame>
  )
}
