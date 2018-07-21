import React from 'react';
import PropTypes from 'prop-types';
import PageSection from '../../components/Section/PageSection'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';


import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  getOrderList,
  cancleOrder,
  confirmReceive
} from './actions'

import {
  globalPay,
} from '../App/actions'

import { makeSelectPagination, makeSelectOrderList} from './selectors'
import {makeSelectAccount} from '../App/selectors'

import reducer from './reducer';
import saga from './saga';

import OrderListItem from './OrderListItem'
import Pagination from '../Pagination'
import Loading from '../../components/Loading'

import './style.css'


export class OrderListPage extends React.PureComponent {

  componentWillMount() {


  }

  componentDidMount() {

    this.getListFromLocation()

  }

  getListFromLocation() {

    const page = this.getPage();
    this.props.getOrderList(page)

  }

  componentWillReceiveProps(np) {

    const cur_page = this.props.match.params.page;

    const next_page = np.match.params.page;

    // 如果查询参数出现差异
    if (cur_page !== next_page) {
      // todo 优化
      this.props.getOrderList(next_page)
    }
  }


  componentWillUnmount() {
  }

  getCat() {
    return this.props.match.params.cat;
  }

  getPage() {
    // todo 校验
    return (this.props.match.params.page - 0);
  }

  nextPage() {
    const index = this.getPage() + 1;
    this.updateLocation(index)
  }

  prevPage() {
    const index = this.getPage() - 1;
    this.updateLocation(index)
  }

  updateLocation(page) {

    this.props.history.push({
      pathname: `/orders/${page}`
    })
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
      content = this.props.orders.list.length == 0 ? (
        <h3>暂无订单</h3>
      ) : this.props.orders.list.map(order => {

        return (
          <OrderListItem
            date={order.create_time}
            key={Math.random()}
            order={order}
            account={this.props.account}
            onCancleClick={this.props.cancleOrder}
            onConfirmReceive={this.props.confirmReceive}
            pay={this.props.pay.bind(null,order.order_sn,order.pay_code)}
          ></OrderListItem>
        )
      })
    }

    return (
      <div style={styles.root}>
        <PageSection
          mh={480}
        >
          <section style={{minHeight: 360}}>
            {content}
          </section>

          <Pagination
            data={this.props.pagination}
            nextFunc={this.nextPage.bind(this)}
            prevFunc={this.prevPage.bind(this)}
          ></Pagination>
        </PageSection>
      </div>
    );
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    getOrderList: (page) => {
      return dispatch(getOrderList(page))
    },
    cancleOrder: (sn) => dispatch(cancleOrder(sn)),
    pay: (id, pay_way) => dispatch(globalPay(id, pay_way)),
    confirmReceive: (id) => dispatch(confirmReceive(id))
  };
}

const mapStateToProps = createStructuredSelector({
  orders: makeSelectOrderList(),
  account: makeSelectAccount(),
  pagination: makeSelectPagination()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'orders', reducer});
const withSaga = injectSaga({key: 'orders', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OrderListPage);


