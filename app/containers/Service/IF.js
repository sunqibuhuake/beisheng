/**
 * Created by sunqi on 2018/7/4.
 */
import React from 'react'
import {Link} from 'react-router-dom'
export default function(props) {
  return (
    <div style={{padding: '48px 0', lineHeight: 3,borderTop: '1px solid #e6e6e6'}}>
      <div style={{fontSize: 20}}>
        想即刻体验？请联系你附近的 Apple 授权的企业解决方案中心。
      </div>
      <a href="/intro#about-intro">
        <div>
          进一步了解 >
        </div>
      </a>


    </div>
  )
}
