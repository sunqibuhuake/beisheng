/**
 * Created by sunqi on 2018/5/24.
 */
import React from 'react'
import {Carousel} from 'antd'
import {Link} from 'react-router-dom'

import './style.css'

const styles = {
  root: {

  },
  imgContainer: {
    height: '100%',
    width: '100%'
  },
  img: {
   // backgroundImage: `url(${l.ad_code})`,
    //height: window.innerWidth / 1600 * 690
  }

}

export default function({list}) {
  //let height = window.innerWidth / 1600 * 690;
  let height = window.innerWidth / 1600 * 692
  //if (height > 810) {
  //  height = 810;
  //}
  //if (height > 600) {
  //  height = 600;
  //}
  return (
    <Carousel
      dots={true}
      autoplay={true}
    >

      {list.map(l => (
        <div
          key={Math.random()}
          style={styles.imgContainer}>


          {
            l.ad_link ? (
            <a href={l.ad_link} target="_blank">
              <div className="fakeimg" style={{
    backgroundImage: `url(${l.ad_code})`,
    height: height
  }} src={l.ad_code}></div>
            </a>
            ) : (
            <div className="fakeimg" style={{
              backgroundImage: `url(${l.ad_code})`,
              height: height
            }} src={l.ad_code}></div>
            )
          }

        </div>
      ))}

    </Carousel>
  )
}
