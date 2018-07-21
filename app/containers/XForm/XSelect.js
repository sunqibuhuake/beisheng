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
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import {changeSimpleValue} from '../App/actions'
import {makeSelectValue, makeSelectNormal} from '../App/selectors'
import NormalSelect from './NormalSelect'

function init_real_component(props) {
  class XSelect extends React.PureComponent {

    componentWillMount() {
      console.log('WILL MOUNT')
    }

    componentDidMount() {

    }


    render() {

      const styles = {

      }

      return (
        <NormalSelect
          {...this.props}
        >
        </NormalSelect>
      )
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      _onChange: (value) => {
        return dispatch(changeSimpleValue(props['data-path'], value))
      }
    };
  }
  const mapStateToProps = createStructuredSelector({
    value: makeSelectValue(props['data-path']),
    options: makeSelectNormal(props['data-options-path'])
  });
  const withConnect = connect(mapStateToProps, mapDispatchToProps);
  return compose(
    withConnect
  )(XSelect);
}

export default class MiddleComponent extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      component: false
    }
  }

  componentDidMount() {
    const Composed = init_real_component(this.props)
    this.setState({
      component: (<Composed {...this.props}></Composed>)
    })
  }

  render() {
    if (!this.state.component) {
      return (<span></span>)
    }
    const Component = this.state.component;
    return (
    <span>
      {Component}
    </span>
    )
  }

}

