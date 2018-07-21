/**
 * Created by sunqi on 2018/5/13.
 */

import React from 'react';

export default function IntorCard({data}) {
  const styles = {
    root: {
      width: '100%',
      margin: '0 auto',
      padding: 0
    },
    index: {
      height: 24,
      width: 24,
      margin: '0 auto',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 24 / 16,
      borderRadius: '50%',
      border: '2px solid black',
      boxSizing: 'content-box',
      marginBottom: 12
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign:'center'
    },
    text: {
      fontSize: 14,
      textAlign:'center',
      marginTop: 6
    }
  }

  return (
    <div style={styles.root}>
      <div style={styles.index}>
        {data.index}
      </div>
      <div style={styles.title}>
        {data.title}
      </div>
      <div style={styles.text} className="entry-gird-text">
        {data.l1}
        {data.l2}
      </div>
    </div>
  );
}
