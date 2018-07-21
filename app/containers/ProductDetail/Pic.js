/**
 * Created by sunqi on 2018/5/20.
 */
import React from 'react'


import pic_url from './assets/pic.png'
export default function(props) {

  const styles = {
    root: {
      width: 520,
      //height: 730,
      float: 'left',
      position: 'relative',
      display: 'inline-block',
      textAlign:'center',
      paddingTop:120,
      paddingBottom: 120
    },
    img: {
      width:420,
      height: 420
    }
  }
  return (
    <div style={styles.root}>
      <img style={styles.img} src={props.img}/>
    </div>
  )
}
