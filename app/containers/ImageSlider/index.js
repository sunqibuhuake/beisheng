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
  getSliderList,
} from './actions'

import {makeSelectSliderData, makeSelectSliderError, makeSelectSliderReady} from './selectors'

import reducer from './reducer';
import saga from './saga';

import Loading from '../../components/Loading'

import ImageSlide from '../../components/ImageSlide'

import './style.css'


export class SliderContainer extends React.PureComponent {

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
        height: 'auto',
        width: '100%',
        margin: '0 auto',
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
      content = (
        <ImageSlide
          list={data}
        ></ImageSlide>
      )
    }


    return (
      <section
        style={styles.root}
      >
        {content}
      </section>


    );
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    loadData: () => {
      return dispatch(getSliderList())
    }
  };
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectSliderData(),
  ready: makeSelectSliderReady(),
  error: makeSelectSliderError()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({key: 'slider', reducer});
const withSaga = injectSaga({key: 'slider', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SliderContainer);


