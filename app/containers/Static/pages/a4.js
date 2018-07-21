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
import img_url from '../assets/pic-skill-6.png'

import {Link} from 'react-router-dom'

export default function() {
  return (
    <div className="frame-containter">

    <div className="skill w100pct color-gray">
      <div className="con">
        <div className="title">
          <ul>
            <li className="tit">Service 4 Me（企业级服务）</li>
            <li className="tit-sub">Service 4 Me 走进企业，为企业带来更多便利。</li>
            <li className="pic"><img src={img_url}/></li>
          </ul>
        </div>
        <div className="list-4 heise">
          <ul className="a0">
            <li><a href="">问题咨询</a></li>
            <li><a href="">硬件检测</a></li>
            <li><a href="">诊断报告</a></li>
            <li><a href="">设备清洁</a></li>
            <li><a href="">设备维修</a></li>
          </ul>
          <ul className="a1">
            <li><a href="">macOS 基础及使用技巧</a></li>
            <li><a href="">iOS 基础及使用技巧</a></li>
            <li><a href="">移动应用</a></li>
            <li><a href="">办公协作</a></li>
            <li><a href="">前沿技术</a></li>
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
