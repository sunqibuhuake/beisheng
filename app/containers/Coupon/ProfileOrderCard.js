import React from 'react';
import PropTypes from 'prop-types';
import PageSection from '../../components/Section/PageSection'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Header from 'components/Card/Header'
import Card from 'components/Card'

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  getOrderList
} from './actions'

import { makeSelectPagination, makeSelectOrderList} from './selectors'

import reducer from './reducer';
import saga from './saga';

import OrderListItem from './OrderListItem'
import Loading from '../../components/Loading'

import './style.css'


export class ProfileOrderCard extends React.PureComponent {

  componentWillMount() {
  }

  componentDidMount() {

    this.getOrderList()

  }

  getOrderList() {

    this.props.getOrderList(1)

  }

  componentWillReceiveProps(np) {

  }


  componentWillUnmount() {
  }


  render() {
    const styles = {
      root: {
        background: '#F4F5F6',
        padding: '80px 0'
      }
    }

    let content = null;
    if (!this.props.orders.ready) {
      content = (
        <Loading></Loading>
      )
    } else {
      content = this.props.orders.list.map(order => (
        <OrderListItem
          key={Math.random()}
          order={order}
        ></OrderListItem>
      ))
    }

    return (
      <Card>
        <Header
          borderBottom={true}
        >
          <span>我的订单</span>
        </Header>
        <section className="mb12">
          {content}
        </section>
      </Card>
    );
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    getOrderList: (page) => {
      return dispatch(getOrderList(page))
    }
  };
}

const mapStateToProps = createStructuredSelector({
  orders: makeSelectOrderList()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'orders', reducer});
const withSaga = injectSaga({key: 'orders', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProfileOrderCard);


