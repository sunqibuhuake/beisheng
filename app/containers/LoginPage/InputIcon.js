/**
 * Created by sunqi on 2018/5/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import username_n from './assets/username_n.png'
import username_e from './assets/username_e.png'
import password_n from './assets/password_n.png'
import password_e from './assets/password_e.png'

export default function InputIcon(props) {

  const styles = {
    iconbox: {
      width: '50px',
      height: '50px'
    },
    icon: {
      width: 26,
      height: 28,
      position: 'absolute',
      top: 11,
      left: 12
    }
  }

  const helper = {
    username_n: username_n,
    username_e: username_e,
    password_n: password_n,
    password_e: password_e
  }
  return (
    <div style={styles.icon}>
      <img src={helper[props.status]} style={{width: '100%', height: '100%'}}/>
    </div>
  )
}
