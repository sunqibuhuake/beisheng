/**
 * Created by sunqi on 2018/5/28.
 */

import React from 'react'
import img_url from '../assets/pic-skill-4.png'
import {Link} from 'react-router-dom'

export default function() {
  return (
    <div className="frame-containter">
      <div className="skill w100pct color-gray">
        <div className="con">
          <div className="title">
            <ul>
              <li className="tit">Apple Authorized Service Provider（Apple 授权服务提供商）</li>
              <li className="tit-sub">将优质、专业的Apple售后服务带到您身边</li>
              <li className="pic"><img src={img_url} /></li>
            </ul>
          </div>
          <div className="list-2 heise">
            <ul className="a0">
              <li className="tit">iPad</li>
              <li><a href="">电池、电源与充电</a></li>
              <li><a href="">Apple ID 和密码</a></li>
              <li><a href="">设置和使用</a></li>
              <li><a href="">App Store、iTunes Store 和“音乐”</a></li>
              <li><a href="">Internet 与 AirPlay</a></li>
              <li><a href="">iOS 和 应用程序</a></li>
              <li><a href="">iPad 配件</a></li>
              <li><a href="">维修和物理损坏</a></li>
            </ul>
            <ul className="a1">
              <li className="tit">iPhone</li>
              <li><a href="">维修和物理损坏</a></li>
              <li><a href="">电池、电源与充电</a></li>
              <li><a href="">Apple ID 和密码</a></li>
              <li><a href="">系统性能</a></li>
              <li><a href="">蜂窝移动网络和 Wi-Fi</a></li>
              <li><a href="">App Store、iTunes Store和“音乐”</a></li>
              <li><a href="">iOS 和 应用程序</a></li>
              <li><a href="">iCloud、Facetime 与信息</a></li>
            </ul>
            <ul className="a2">
              <li className="tit">Mac</li>
              <li><a href="">启动或开机</a></li>
              <li><a href="">硬件问题</a></li>
              <li><a href="">安装与更新</a></li>
              <li><a href="">软件与使用</a></li>
              <li><a href="">Apple ID 和密码</a></li>
              <li><a href="">iTunes Store 与 App Store</a></li>
              <li><a href="">Internet 与连接性 邮件</a></li>
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
