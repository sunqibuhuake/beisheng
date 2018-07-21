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
            <Icon type="tool" />
          </div>
          <div>
            开发中,敬请期待!
          </div>
        </div>

      </div>

    </NavFrame>
  )
}
