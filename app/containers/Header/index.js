import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Link} from 'react-router-dom'
import $ from 'jquery'
import { createStructuredSelector } from 'reselect';
import {makeSelectAccount, makeSelectLocation} from '../App/selectors'
import {Icon, Row, Col, Menu, Dropdown} from 'antd'
const MenuItem = Menu.Item;
import {loginSuccess} from '../App/actions'
import NavBtn from './NavBtn'

import SearchInput from './SearchInput'
import IconBox from './IconBox'
import WebLogo from './WebLogo'
import fuwu_menu from './FuwuMenu'
import './style.css'
import icon5_1 from './assets/05 blue.png'
import icon5_2 from './assets/05 black.png'
import icon6_1 from './assets/06 blue.png'
import icon6_2 from './assets/06 black.png'
import icon7_1 from './assets/07 blue.png'
import icon7_2 from './assets/07 black.png'
import icon8_1 from './assets/08 blue.png'
import icon8_2 from './assets/08 black.png'

class Header extends React.Component {

  constructor(props) {
    super()
    this.state = {
      search: {
        open: false,
        value: ''
      }
    }
  }


  componentWillMount() {
  }

  bindSearchCloseEvent() {
    const self = this;
    $('.bs-webpage-body').on("click", (e) => {
      if (self.state.search.open) {
        if ($(e.target) && $(e.target).parents(".xxx-input-xxx").length == 0) {
          self.setState({
            search: {
              open: false,
              value: ''
            }
          })
        }
      }
    });
  }

  hideSearch() {
    this.setState({
      search: {
        open: false,
        value: ''
      }
    })
  }

  componentDidMount() {
    //this.authControl()
    this.bindSearchCloseEvent()
  }

  openSearch() {
    this.setState({
      search: {
        open: true,
        value: ''
      }
    })
  }

  logout() {
    window.localStorage.setItem('account', '');
    window.location.href = '/'
    //this.props.history.location.push({
    //  pathname: '/'
    //})
  }


  componentWillReceiveProps(np) {


  }


  authControl() {
    const account_str = localStorage.getItem('account');
    if (account_str) {
      const account = JSON.parse(account_str);
      this.props.login(account)
    }
  }


  render() {

    const styles = {
      root: {
        height: '45px',
        background: 'rgba(0,0,0,0.8)',
        width: '100%'
      },
      container: {
        width: '100%',
        height: '45px',
        margin: '0 auto'
      },
      logo1: {
        width: '100%',
        marginTop: 16
      },
      logo2: {
        width: '90%',
        marginTop: 12
      },
      diliver: {
        height: 1,
        width: '100%',
        background: '#e6e6e6',
        marginTop: 4
      }
    }


    let search_input = (
      <SearchInput
        hide={this.hideSearch.bind(this)}
        history={this.props.history}
      ></SearchInput>
    )

    const menu = (
      <Menu>
        <MenuItem key="0">
          <Link to='/profile'>
              <span style={{marginRight: 6}}>
                            <img className="nav-item-icon" src={icon5_1}/>
              <img className="nav-item-icon-active" src={icon5_2}/>
            </span>
            个人中心
          </Link>
          <div style={styles.diliver}></div>
        </MenuItem>
        <MenuItem key="1">
          <Link to='/collects/1'>
                <span style={{marginRight: 6}}>
                          <img className="nav-item-icon" src={icon6_1}/>
              <img className="nav-item-icon-active" src={icon6_2}/>
            </span>
            我的收藏
          </Link>
          <div style={styles.diliver}></div>
        </MenuItem>
        <MenuItem key="2">
          <Link to='/orders/1'>

            <span style={{marginRight: 6}}>
                            <img className="nav-item-icon" src={icon7_1}/>
              <img className="nav-item-icon-active" src={icon7_2}/>
            </span>
            我的订单
          </Link>
          <div style={styles.diliver}></div>
        </MenuItem>
        <MenuItem key="3">

            <span style={{marginRight: 6}}>
                       <img className="nav-item-icon" src={icon8_1}/>
              <img className="nav-item-icon-active" src={icon8_2}/>
            </span>
          <span onClick={this.logout.bind(this)}>
            退出
          </span>
        </MenuItem>
      </Menu>
    );



    let nav_content = null;


    if (this.props.account.ready) {

      if (this.state.search.open) {
        nav_content = search_input

      } else {
        nav_content = (
          <span>
              <IconBox>
                <Dropdown placement="bottomCenter" overlay={menu}>
                  <Icon className="ant-dropdown-link" type="user"/>
                </Dropdown>

              </IconBox>



           <IconBox>
             <Link to="/cart">
               <Icon type="shopping-cart"/>
             </Link>
           </IconBox>
           <IconBox >
             <Icon onClick={this.openSearch.bind(this)} type="search"/>
           </IconBox>

            <NavBtn
              path="/static/6"
              name="使用技巧"
            ></NavBtn>
            <NavBtn
              path="/dev"
              name="换新计划"
            ></NavBtn>
            <NavBtn
              path="/dev"

              name="财务方案"
            ></NavBtn>
            <NavBtn
              dropdown={true}
              menu={fuwu_menu}
              path="#"
              name="服务"
            ></NavBtn>
          <NavBtn
            path="/cats/all/1"
            name="商品分类"
          ></NavBtn>
              <NavBtn
                path="/land"
                name="首页"
              ></NavBtn>
        </span>
        )
      }

    } else {
      nav_content = (
        <span>
          <NavBtn
            path="/login"
            name="请登录"
          ></NavBtn>

        </span>
      )
    }
    return (
      <header style={styles.root}>

        <Row style={{width: '80%',
        margin: '0 auto'}}>
          <Col span={3} style={{textAlign: 'center'}}>
            <WebLogo
              location={this.props.location}
              account={this.props.account}
            ></WebLogo>
          </Col>

          <Col span={21}>
            <section style={styles.container}>
              {nav_content}
            </section>
          </Col>
        </Row>


      </header>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    login: (account) => {
      return dispatch(loginSuccess(account))
    }

  };
}

const mapStateToProps = createStructuredSelector({
  account: makeSelectAccount(),
  location: makeSelectLocation()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

//const withReducer = injectReducer({ key: 'header', reducer });
//const withSaga = injectSaga({ key: 'header', saga });

export default compose(
  //withReducer,
  //withSaga,
  withConnect,
)(Header);


