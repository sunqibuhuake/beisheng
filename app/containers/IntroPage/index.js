/**
 * Created by sunqi on 2018/5/31.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga'

import {
  changeSimpleValue,
  fetchListData,
  getDelivery,
selectDelivery
} from '../App/actions'
import Content from './Content'
import './style.css'

import {makeSelectNormal, makeSelectValue} from '../App/selectors'

export class IntroPage extends React.PureComponent {

  componentDidMount() {
    this.props.loadData();
  }

  render() {

    return (
      <Content
        {...this.props}
      >
      </Content>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(getDelivery()),
  };
}

const mapStateToProps = createStructuredSelector({
  delivery: makeSelectNormal('delivery'),
  seller: makeSelectNormal('account.data.seller')
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({key: 'footerguide', saga});
export default compose(
  withSaga,
  withConnect
)(IntroPage);
