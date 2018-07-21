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

import CardHeader from 'components/Card/Header'

import Card from 'components/Card/index'

import ProductCard from 'components/ShouHou/ProductCard'

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import './style.css'

export default class ShenQingShouHou extends React.PureComponent {

  componentDidMount() {

    // todo 检测是否存有订单数据
  }

  render() {

    const styles = {
      root: {
        background: 'white',

      },
      pic: {
        width: 520,
        height: 730,
        float: 'left',
      }
    }
    return (
      <PageSection style={styles.root}>
        <Card>
          <CardHeader>
            申请售后
          </CardHeader>
          <ProductCard></ProductCard>
        </Card>

      </PageSection>
    )


  }
}

ShenQingShouHou.propTypes = {};

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

const mapStateToProps = createStructuredSelector({});


//const withConnect = connect(mapStateToProps, mapDispatchToProps);
//const withReducer = injectReducer({ key: 'productDetail', reducer });
//const withSaga = injectSaga({ key: 'productDetail', saga });

//export default ProductDetail;
