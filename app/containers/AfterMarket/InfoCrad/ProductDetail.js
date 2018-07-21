/**
 * Created by sunqi on 2018/5/28.
 */
import React from 'react'

export default function({data}) {

  const styles = {
    root: {
      width: '100%',
      height: '100%',
      padding: 0,
      margin: 0,
      position: 'relative',
      display:'block'
    },
    meta: {
      display: 'inline-block',
      position: 'relative',
      width: 'calc(100% - 96px)',
      height: 96,
      lineHeight: '1.4',
      fontSize: '14px',
      float: 'left'
    },
    pname: {
      fontSize: 20,
      color: '#424242',
      lineHeight: '28px'
    },
    imgbox: {
      display: 'inline-block',
      position: 'relative',
      width: 96,
      height: 96,
      overflow: 'hidden',
      float: 'left'
    },
    img: {
      width: '100%',
      height: '100%'
    },
  }
  return (
    <div style={styles.root}>
      <div style={styles.imgbox}>
        <div className="vertical-center">
          <img style={styles.img} src={data.img}/>
        </div>
      </div>
      <div style={styles.meta}>
        <div style={styles.pname}>
          {data.name}
        </div>
        <ul className="bs-meta-ul">
          {data.info.map(i => (
            <li
              key={Math.random()}
            >
              {i.name + ': ' + i.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
