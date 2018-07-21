/**
 * Created by sunqi on 2018/5/28.
 */
/**
 * Created by sunqi on 2018/5/28.
 */
/**
 * Created by sunqi on 2018/5/28.
 */

import React from 'react'
import {Link} from 'react-router-dom'
import img_url from '../assets/pic-skill-5.png'
export default function () {
  return (
    <div className="frame-containter">

      <div className="skill w100pct color-gray">
        <div className="con">
          <div className="title">
            <ul>
              <li className="tit">Full Life Cycle Service（全生命周期服务）</li>
              <li className="tit-sub">从购买到回收，为您提供全方位一体化服务</li>
              <li className="pic-1"><img src={img_url}/></li>
            </ul>
          </div>
          <div className="list-3 heise">
            <ul>
              <li className="tit">采购</li>
              <li><a href="">设备供应</a></li>
            </ul>
            <ul>
              <li className="tit">激活</li>
              <li><a href="">开机激活</a></li>
              <li><a href="">DOA检测</a></li>
            </ul>
            <ul className="a0">
              <li className="tit">部署</li>
              <li><a href="">设备初始化</a></li>
              <li><a href="">Apple及企业APP配置</a></li>
              <li><a href="">移动设备配置</a></li>
            </ul>
            <ul>
              <li className="tit">运维</li>
              <li><a href="">设备延保</a></li>
              <li><a href="">移动设备管理</a></li>
            </ul>
            <ul>
              <li className="tit">维修</li>
              <li><a href="">咨询热线</a></li>
              <li><a href="">预约服务</a></li>
              <li><a href="">设备维修</a></li>
            </ul>
            <ul className="a1">
              <li className="tit">回收</li>
              <li><a href="">设备评估</a></li>
              <li><a href="">设备回收</a></li>
            </ul>
          </div>

          <p className="endtext">
            <Link to="/intro" >
              请联系您附近的苹果授权企业客户经销商联系，他们会为您解决您的问题。
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
