/**
 * Created by sunqi on 2018/5/21.
 */
/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

export default function InfoCard(props) {

  const styles={
    root: {
      fontSize: 12,
      marginBottom: 6
    }

  }
  return(
    <div style={styles.root}>
      {props.name + ': ' + props.value}
    </div>
  )
}
