/**
 * Created by sunqi on 2018/5/20.
 */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import PageSection from 'components/Section/PageSection'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Card from 'components/Card'
import Loading from 'components/Loading'
import Error from 'components/Error'

import StatusCard from './StatusCard'
import InfoCard from './InfoCard'
import CartCard from './CartCard'
import SumCard from './Sum'

import reducer from './reducer';
import saga from './saga';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {getOrderDetail, confirmReceive,cancleOrder} from './actions'
import {globalPay} from '../App/actions'
import {makeSelectNormal, makeSelectValue} from '../App/selectors'
import {makeSelectData, makeSelectError, makeSelectReady, makeSelectExpress} from './selectors'


import './style.css'

export class OrderDetail extends React.PureComponent {

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getDetail(id)
  }

  render() {

    const {data, ready, error} = this.props;
    const styles = {
      root: {

      }
    }

    let content = '';
    if (!ready) {
      content = (<Loading></Loading>)
    } else if (error) {
      content = (<Error></Error>)
    } else {
      content = (
        <Card>
          <StatusCard
            express={this.props.express}
            pay={this.props.pay}
            confirmReceive={this.props.confirmReceive}
            cancleOrder={this.props.cancleOrder}
            order={this.props.data}
          ></StatusCard>
          <InfoCard
            {...data}
          ></InfoCard>
          <CartCard
            {...data}
          ></CartCard>
          <SumCard
            {...data}
          ></SumCard>
        </Card>
      )
    }



    return (
      <PageSection>
        {content}
      </PageSection>
    )


  }
}

OrderDetail.propTypes = {};


export function mapDispatchToProps(dispatch) {
  return {
    getDetail: (id) => {
      return dispatch(getOrderDetail(id))
    },
    cancleOrder: (sn) => dispatch(cancleOrder(sn)),
    pay: (id, pay_way) => dispatch(globalPay(id, pay_way)),
    confirmReceive: () => dispatch(confirmReceive())
  };
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  error: makeSelectError(),
  ready: makeSelectReady(),
  express: makeSelectExpress()
  //pagination: makeSelectPagination()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'orderdetail', reducer});
const withSaga = injectSaga({key: 'orderdetail', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(OrderDetail);

