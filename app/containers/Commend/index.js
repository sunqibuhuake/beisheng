import React from 'react';
import PropTypes from 'prop-types';
import PageSection from '../../components/Section/PageSection'
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Row,Col} from 'antd'
import { createStructuredSelector } from 'reselect';


import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  getCommendList,
} from './actions'

import {makeSelectCommendData, makeSelectCommendReady, makeSelectCommendError} from './selectors'

import reducer from './reducer';
import saga from './saga';

import Loading from '../../components/Loading'

import Card from '../../components/Card'
import CardHeader from '../../components/Card/Header'
import RecommendCard from './RecommendCard'

import './style.css'


export class Commend extends React.PureComponent {

  componentWillMount() {

  }

  componentDidMount() {

    this.props.loadData()

  }

  componentWillUnmount() {
  }


  render() {

    const {data,ready, error}  = this.props;
    const styles = {
      root: {
        background: '#F4F5F6',
        padding: '80px 0'
      },
      title: {
        height: 48,
        fontSize: 24,
        lineHeight: '48px',
        color: 'black',
      }
    }

    let content = null;
    if (!ready) {
      content = (
        <Loading></Loading>
      )
    } else if(error) {
      content = (<h3>请求出错</h3>)
    }else {
      content = data.map(p => (
        <Col
          span={12}
          key={Math.random()}
        >
          <RecommendCard
            {...p}
          ></RecommendCard>
        </Col>
      ))
    }


    return (
      <section style={{margin: '48px auto'}}>
        <Card>
          <CardHeader
            borderBottom={true}
          >
            为你推荐
          </CardHeader>
          <Row>
            {content}
          </Row>
        </Card>
      </section>


    );
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      return dispatch(getCommendList())
    }
  };
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectCommendData(),
  ready: makeSelectCommendReady(),
  error: makeSelectCommendError()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'commend', reducer});
const withSaga = injectSaga({key: 'commend', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Commend);


