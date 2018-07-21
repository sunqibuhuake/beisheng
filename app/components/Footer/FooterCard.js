/**
 * Created by sunqi on 2018/5/24.
 */
import React from 'react'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'
export default function footerCard(props) {

  const styles = {
    root: {
      width: '100%',
      color: '#2D2D2D',
      fontSize: 12,
      textAlign: 'left',
      lineHeight: 1.7

    },
    title: {
      fontWeight: 'bold',
      marginBottom:6
    },
    text: {
      color: '#2D2D2D',
      width: '100%',

    }
  }
  return (
    <div style={styles.root}>
      <div style={styles.title}>
        {props.data.t}
      </div>
      <div style={styles.text}>
        {props.data.list.map(l =>(
          <div className="footer-link-container" key={Math.random()}>
            <a href={l.path + '#' + props.data.id}>
              {l.name}
            </a>
          </div>
        ))}
      </div>

    </div>
  )
}
