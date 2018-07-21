/**
 * Created by sunqi on 2018/5/27.
 */
import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import './style.css'
import {getAccountInfo} from '../App/actions'

import {fetchListData, fetchListDataSuccess} from '../App/actions'
import {makeSelectLocation} from '../App/selectors'
export class AuthWrapper extends React.Component{
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }

  componentDidMount() {

    this.props.loadAccountInfo()
  }

  componentWillReceiveProps(np) {

    if (np.location.pathname !== this.props.location.pathname) {
      np.loadAccountInfo()
    }
  }

  render() {
    return (
      <section className="bs-fetch-wrapper">
        {this.props.children}
      </section>
    )
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    loadAccountInfo: () => dispatch(getAccountInfo())
  };
}

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation()

});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'fetch', saga });


export default compose(
  withSaga,
  withConnect
)(AuthWrapper);


