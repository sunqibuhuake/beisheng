/**
 * Created by sunqi on 2018/5/28.
 */

import React from 'react'
import {Link} from 'react-router-dom'
import img_url_3 from '../assets/pic-home-0.png'
import img_url_1 from '../assets/pic-home-1.png'
import img_url_2 from '../assets/pic-home-2.png'
import img_url_4 from '../assets/pic-home-3.jpg'

import {Menu, Icon, Popover} from 'antd'

const content = (
  <div >
    <a target="_blank" href="http://manage.employeechoice.cn/public/images/iOS_Deployment_Overview_for_Business.pdf">
      <div className="deploy-btn">
        IOS
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <Icon  style={{float:'right'}} type="download" />
      </div>
    </a>
    <a target="_blank" href="http://manage.employeechoice.cn/public/images/Mac_Deployment_Overview.pdf">
      <div className="deploy-btn">
        MAC
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <Icon style={{float:'right'}} type="download" />
      </div>
    </a>

  </div>
);


const styles = {
  ul: {
    width: 240,
    marginRight: 10
  }
}
export default function () {
  return (
    <div className="frame-containter">
      <div className="skill w100pct color-gray">
        <div className="con">
          <div className="list">
            <ul style={styles.ul}>
              <li className="pic"><img src={img_url_1}/></li>
              <li className="tit">iPad</li>
              <li className="txt">为移动办公，增添一些乐趣</li>
              <li className="btn qianlan">
              <a  target="_blank" href="https://support.apple.com/zh-cn/ipad">了解更多&gt;</a>
              </li>
            </ul>
            <ul style={styles.ul}>

              <li className="pic"><img src={img_url_2}/></li>
              <li className="tit">iPhone</li>
              <li className="txt">体验新意和心意</li>
              <li className="btn qianlan">
              <a target="_blank" href="https://support.apple.com/zh-cn/iphone">了解更多&gt;</a>
              </li>
            </ul>
            <ul style={styles.ul}>

              <li className="pic"><img src={img_url_3}/></li>
              <li className="tit">Mac</li>
              <li className="txt">专注于让专业与众不同</li>
              <li className="btn qianlan">
              <a  target="_blank" href="https://support.apple.com/zh-cn/mac">了解更多&gt;</a>
              </li>
            </ul>
            <ul style={styles.ul}>

              <li className="pic"><img src={img_url_4}/></li>
              <li className="tit">部署
              </li>
              <li className="txt">我们助你将 iPhone、iPad 和 Mac 轻松引入办公室</li>
              <li className="btn qianlan">

                <Popover placement="bottomRight" title={null} content={content} trigger="click">
                  <a href="#">
                    了解更多<Icon type="right" />
                  </a>
                </Popover>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
