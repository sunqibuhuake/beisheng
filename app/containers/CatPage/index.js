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
  getCat,
  changeActiveCat,
  nextPage,
  prevPage,
  getProducts
} from './actions'
//import {makeSelectLoading, makeSelectError, makeSelectAccountStatus } from 'containers/App/selectors';

import {makeSelectCat, makeSelectPagination, makeSelectActive, makeSelectProducts} from './selectors'

import reducer from './reducer';
import saga from './saga';

import CatNav from './CatNav'
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

    // 加载分类
    this.props.getCat()

    //this.getProductsFromLocation()

  }

  getProductsFromLocation() {

    const cat = this.getCat();
    const page = this.getPage();
    this.props.getProducts(cat, page)

  }

  componentWillReceiveProps(np) {

     //刚刚加载完分类时
    if (!this.props.cat.ready && np.cat.ready) {
      this.getProductsFromLocation();
      return false;
    }


    // 路径变换时
    const cur_cat_id = this.props.match.params.cat;
    const cur_page = this.props.match.params.page;

    const next_cat_id = np.match.params.cat;
    const next_page = np.match.params.page;

    // 如果查询参数出现差异
    if ((cur_cat_id !== next_cat_id) || (cur_page !== next_page)) {
      // todo 优化
      this.props.getProducts(next_cat_id, next_page)
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
    const cat = this.getCat();
    const index = this.getPage() + 1;
    this.updateLocation(cat, index)
  }

  prevPage() {
    const cat = this.getCat();
    const index = this.getPage() - 1;
    this.updateLocation(cat, index)
  }

  updateLocation(cat, page) {

    this.props.history.push({
      pathname: `/cats/${cat}/${page}`
    })

  }
  onCatClick(evt) {

    const cat_id = evt.target.getAttribute('data-catid');
    this.props.history.push({
      pathname: `/cats/${cat_id}/1`
    })
  }

  render() {
    const { loading, error } = this.props;


    const styles = {
      root: {
        background: '#F4F5F6',
        padding: '32px 0'
      }
    }

    const nav = this.props.cat.ready ? (
      <CatNav
        cat={this.props.cat.data}
        active={this.props.active}
        onCatClick={this.onCatClick.bind(this)}
      ></CatNav>
    ) : ''
    return (
      <div style={styles.root}>
        {nav}
        <PageSection
          mh={720}
        >
          <section style={{minHeight: 360}}>
            <ProductList
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
    getProducts: (cat, page) => {
      return dispatch(getProducts(cat, page))
    },
    getCat: () => {
      return dispatch(getCat())
    },

    changeActiveCat: (active_cat) => {
      return dispatch(changeActiveCat(active_cat))
    },
    //onCatClick: (evt) => {
    //  return dispatch(changeActiveCat({
    //    name: evt.target.getAttribute('data-name'),
    //    id: evt.target.getAttribute('data-catid')
    //  }))
    //},
    onNextPageClick: () => {
      return dispatch(nextPage())
    },
    onPrevPageClick: () => {
      return dispatch(prevPage())
    }
  };
}

const mapStateToProps = createStructuredSelector({
  cat: makeSelectCat(),
  products: makeSelectProducts(),
  active: makeSelectActive(),
  pagination: makeSelectPagination()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'cat', reducer});
const withSaga = injectSaga({key: 'cat', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CatPage);

