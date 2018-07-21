/**
 * Created by sunqi on 2018/5/27.
 */
import React from 'react'

export default function({location, account}) {


  const styles = {
    seller: {
      height: 36,
      marginTop: 4
    },
    store: {
      //width: '100%',
      height: 36,
      marginTop: 4
    }
  };

  let logo = null;
  if (account.ready) {

    logo = (
      <img style={styles.store} src={account.data.store.store_logo}/>
    )
    if (location.pathname == '/land') {
      logo = (
        <img style={styles.seller} src={account.data.seller.seller_logo}/>
      )
    }
    if (location.pathname == '/' ||  location.pathname == '/login') {
      logo = '';
    }

  } else {
    logo = ''
  }
  return (
    <span>{logo}</span>
  )
}
