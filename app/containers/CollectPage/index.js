/**
 * Created by sunqi on 2018/5/13.
 */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import PageSection from '../../components/Section/PageSection'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';


import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {
  nextPage,
  prevPage,
  getProducts
} from './actions'

import { makeSelectPagination, makeSelectProducts} from './selectors'

import reducer from './reducer';
import saga from './saga';

import ProductList from '../../components/ProductList'

import Pagination from '../Pagination'

import './style.css'


export class CatPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */

  componentWillMount() {


  }

  componentDidMount() {

    this.getProductsFromLocation()

  }

  getProductsFromLocation() {

    const page = this.getPage();
    this.props.getProducts(page)

  }

  componentWillReceiveProps(np) {

    const cur_page = this.props.match.params.page;

    const next_page = np.match.params.page;

    // 如果查询参数出现差异
    if ( cur_page !== next_page) {
      // todo 优化
      this.props.getProducts(next_page)
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

  updateLocation(cat, page) {

    this.props.history.push({
      pathname: `/collects/${page}`
    })

  }


  render() {
    const { loading, error } = this.props;

    const styles = {
      root: {
        background: '#F4F5F6',
        padding: '80px 0'
      }
    }

    return (
      <div style={styles.root}>
        <PageSection
          mh={480}
        >
          <section style={{minHeight: 360}}>
            <ProductList
              mode="collect"
              products={this.props.products}
            ></ProductList>
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
    getProducts: (page) => {
      return dispatch(getProducts(page))
    },

    onNextPageClick: () => {
      return dispatch(nextPage())
    },
    onPrevPageClick: () => {
      return dispatch(prevPage())
    }
  };
}

const mapStateToProps = createStructuredSelector({
  products: makeSelectProducts(),
  pagination: makeSelectPagination()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'collects', reducer});
const withSaga = injectSaga({key: 'collects', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CatPage);

