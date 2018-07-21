/**
 * Created by sunqi on 2018/5/28.
 */
/**
 * Created by sunqi on 2018/5/28.
 */

import React from 'react'
import {Link} from 'react-router-dom'
import img_url from '../assets/pic-skill-7.png'
export default function() {
  return (
    <div className="frame-containter">

    <div className="skill w100pct color-gray">
      <div className="con">
        <div className="title">
          <ul>
            <li className="tit">Workshop（企业培训）</li>
            <li className="tit-sub">从使用技巧开始，感受效率提升的魅力，体验定制化解决方案带来的改变</li>
            <li className="pic"><img src={img_url}/></li>
          </ul>
        </div>
        <div className="list-5 heise">
          <ul>
            <li className="tit">使用技巧</li>
            <li>为你详细讲解 Apple 全设备的使用技巧，提升你的办公效率</li>
          </ul>
          <ul>
            <li className="tit">现场演示</li>
            <li><a href="">现场感受 Apple 设备为你带来的便捷，改变你的生活</a></li>
          </ul>
          <ul>
            <li className="tit">解决方案</li>
            <li><a href="">邀请客户到解决方案中心，亲身体验解决方案给企业带来的改变</a></li>
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
