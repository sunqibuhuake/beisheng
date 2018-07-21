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

import {changeSimpleValue, deleteInvoice, selectInvoiceItem} from '../App/actions'
import {makeSelectXInputValue, makeSelectValue} from '../App/selectors'
import EditableOption  from './EditableOption'
import NormalInput from './NormalInput'

function init_real_component(props) {
  class XOption extends React.PureComponent {

    componentWillMount() {
    }

    componentDidMount() {

    }


    render() {


      return (
        <EditableOption
          _onClick={this.props._onClick}
          active={props.id == this.props['data-activeid']}
        >
          <NormalInput
            mode="input"
            onChange={this.props.onChange}
            onFocus={this.props.onFocus.bind(null, this.props['data-activeid'])}
            value={props.id == this.props['data-activeid'] ? this.props.value : this.props.staticValue}
            active={props.id == this.props['data-activeid']}
            style={props.input_style}
          >
          </NormalInput>

        </EditableOption>
      )


    }
  }



  function mapDispatchToProps(dispatch) {

    function handleClickAndFocus(activeID) {
      const id = props.id;

      if (activeID == id) {
        return false
      }

      const path = props['data-path'];
      dispatch(changeSimpleValue(path, id))
      dispatch(selectInvoiceItem(id))
    }


    return {
      _onClick: handleClickAndFocus,

      onChange: (evt) => {
        console.log('change')
        const path = props['input-data-path']
        const value = evt.target.value;
        return dispatch(changeSimpleValue(path, value))
        //dispatch()
      },
      onFocus: handleClickAndFocus

    };
  }

  const mapStateToProps = createStructuredSelector({
    'data-activeid': makeSelectValue(props['data-path']),
    staticValue: makeSelectValue(props['input-static-data-path']),
    value: makeSelectValue(props['input-data-path'])
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

