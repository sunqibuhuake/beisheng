/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';

import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class MyOrders extends React.PureComponent {

  componentDidMount() {

    // todo 检测是否存有订单数据
  }

  render() {
    const { loading, error, repos } = this.props;

    // todo 每次在加载完成后家在一次数据
    // todo


    //return (
    //
    //);
  }
}

MyOrders.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    //onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    //onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    //onSubmitForm: (evt) => {
    //  if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //  dispatch(loadRepos());
    //},
  };
}

const mapStateToProps = createStructuredSelector({
  orders: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});



const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
