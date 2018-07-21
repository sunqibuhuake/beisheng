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
import {makeSelectXInputValue, makeSelectValue} from '../App/selectors'
import NormalOption from './NormalOption'

function init_real_component(props) {
  class XOption extends React.PureComponent {

    componentWillMount() {
    }

    componentDidMount() {

    }


    render() {

      const styles = {

      }

      return (
        <NormalOption
          {...this.props}
        >

        </NormalOption>
      )


    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      _onClick: (evt) => {
        const path = props['data-path'];
        const id = evt.target.getAttribute('data-id')
        return dispatch(changeSimpleValue(path, id))
      }
    };
  }
  const mapStateToProps = createStructuredSelector({
    'data-activeid':  makeSelectValue(props['data-path'])
  });
  const withConnect = connect(mapStateToProps, mapDispatchToProps);
  return compose(
    withConnect
  )(XOption);
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

