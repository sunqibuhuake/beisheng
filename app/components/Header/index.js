import React from 'react';
import {Col, Row} from 'antd'

import NavBtn from './NavBtn'

import './style.css'
class Header extends React.Component {

  render() {

    console.log(this);
    const styles = {
      root: {
        height: '56px',
        background: 'rgba(0,0,0,0.8)',
        width: '100%'
      },
      container: {
        width: '1000px',
        height: '100%',
        margin: '0 auto'
      }
    }
    return (
      <header style={styles.root}>
        <section style={styles.container}>
          <NavBtn
            path="/login"
            name="请登录"
          ></NavBtn>
          <NavBtn
            path="#"
            name="使用技巧"
          ></NavBtn>
        </section>
      </header>
    );
  }
}

export default Header;
