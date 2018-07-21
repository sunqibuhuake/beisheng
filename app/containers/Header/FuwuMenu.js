/**
 * Created by Administrator on 2018-07-21.
 */
import React from 'react'
import {Menu} from 'antd'
const MenuItem  = Menu.Item;
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import icon1_1 from './assets/01 blue.png'
import icon1_2 from './assets/01 black.png'

import icon2_1 from './assets/02 blue.png'
import icon2_2 from './assets/02 black.png'

import icon3_1 from './assets/03 blue.png'
import icon3_2 from './assets/03 black.png'

import icon4_1 from './assets/04 blue.png'
import icon4_2 from './assets/04 black.png'
const styles = {
  diliver: {
    height: 1,
    width: '100%',
    background: '#e6e6e6',
    marginTop: 4
  }
}

const menu = (
  <Menu>
    <MenuItem key="0">
      <Link to='/service/trainning'>

            <span style={{marginRight: 6}}>
              <img className="nav-item-icon" src={icon1_1}/>
              <img className="nav-item-icon-active" src={icon1_2}/>
            </span>
        专家培训服务
      </Link>
      <div style={styles.diliver}></div>
    </MenuItem>
    <MenuItem key="1">
      <Link to='/service/saas'>
             <span style={{marginRight: 6}}>
              <img className="nav-item-icon" src={icon2_1}/>
              <img className="nav-item-icon-active" src={icon2_2}/>
            </span>
        专家上门服务
      </Link>
      <div style={styles.diliver}></div>

    </MenuItem>
    <MenuItem key="2">
      <Link to='/service/life'>

            <span style={{marginRight: 6}}>
       <img className="nav-item-icon" src={icon3_1}/>
              <img className="nav-item-icon-active" src={icon3_2}/>
            </span>
        设备生命周期管理服务
      </Link>
      <div style={styles.diliver}></div>

    </MenuItem>
    <MenuItem key="3">
      <Link to='/service/shouhou'>
            <span style={{marginRight: 6}}>
    <img className="nav-item-icon" src={icon4_1}/>
              <img className="nav-item-icon-active" src={icon4_2}/>
            </span>
        Apple 授权维修服务
      </Link>
    </MenuItem>
  </Menu>
)
export default menu;
