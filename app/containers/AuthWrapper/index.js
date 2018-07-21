/**
 * Created by sunqi on 2018/5/27.
 */
import React from 'react'
import $ from 'jquery'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {makeSelectAccount, makeSelectLocation} from '../App/selectors'
import {loginSuccess} from '../App/actions'
import './style.css'

export class AuthWrapper extends React.Component{
  constructor(props) {
    super(props)
  }

  componentWillMount() {


    //this.authControl()
  }

  componentDidMount() {

    this.routeControl(this.props)
    this.set400()

  }

  authControl() {
    const account_str = localStorage.getItem('account');
    if (account_str) {
      const account = JSON.parse(account_str);

      if (account.ready && account.data.user && account.data.user.token) {
        this.props.login(account)
      }
    }
  }

  routeControl(props) {
    const publicRoute = [
      {
        path: '/',
        type: 'exact'
      },
      {
        path: 'login',
        type: 'match'
      },
      {
        path: '/entry',
        type: 'exact'
      }
    ]
    const privateRoute = [
      {
        path: 'intro',
        type: 'match'
      },
      {
        path: 'cart',
        type: 'match'
      },
      {
        path: 'order',
        type: 'match'
      },
      {
        path: 'cats',
        type: 'match'
      },
      {
        path: 'product',
        type: 'match'
      },
      {
        path: 'land',
        type: 'match'
      },
      {
        path: 'coupon',
        type: 'match'
      },
      {
        path: 'profile',
        type: 'match'
      }

    ]
    const isLogin = props.account.ready;

    if (isLogin) {
      publicRoute.forEach(route => {
        if (route.type == 'exact') {
          if (props.history.location.pathname == route.path) {
            props.history.push('/land')
          }
        }

        if (route.type == 'match') {
          if (props.history.location.pathname.match(route.path)) {
            props.history.push('/land')
          }
        }
      })
    } else {
      privateRoute.forEach(route => {
        if (route.type == 'exact') {
          if (props.history.location.pathname == route.path) {
            props.history.push('/login')
          }
        }

        if (route.type == 'match') {
          if (props.history.location.pathname.match(route.path)) {
            props.history.push('/login')
          }
        }
      })

    }

  }


  set400() {
    
    let num = '';
    try {
      num = this.props.account.data.seller.seller_contact
    } catch(err) {
      console.log(err)
    }

    if (num) {
      $('#footer-400').html('电话支持：' + num)
    } else {
      $('#footer-400').css({
        display: 'none'
      })
    }

    
  }

  componentWillReceiveProps(np) {

    this.routeControl(np);

  }



  render() {

    let num = '';
    try {
      num = this.props.account.data.seller.seller_contact
    } catch(err) {
      console.log(err)
    }
 
    return (
      <section className="bs-auth-wrapper" style={{minHeight: window.innerHeight}}>
        <input id="hide-400" style={{display: 'none'}} value={num} />
        {this.props.children}
      </section>
    )
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


export default compose(
  withConnect
)(AuthWrapper);


