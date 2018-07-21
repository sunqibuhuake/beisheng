/**
 * Created by sunqi on 2018/5/25.
 */
import React from 'react';
import {Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Icon, Row, Col} from 'antd'
import IconBox from './IconBox'
export default class SearchInput extends React.Component {

  constructor(props) {
    super()
    this.state = {
      value: ''
    }
  }


  search() {

    if (this.state.value.trim() === '') {
      console.log('搜索输入为空')
      return false;
    }

    this.props.history.push({
      pathname : '/search/' +encodeURI(this.state.value) + '/1'
    })
    //this.props.search(this.state.search)
  }
  onEnter(e) {
    if (e.keyCode === 13) {
      this.search()
    }
  }

  onChange(evt) {
    const value = evt.target.value;
    this.setState({
      value: value
    })

  }
  clear() {
    const cur = this.state.value;
    if (!cur) {
      this.props.hide();
      return false
    }
    this.setState({
      value: ''
    })
  }

  componentWillMount() {
  }

  componentDidMount() {


  }


  render() {

    return (
      <Row className="xxx-input-xxx">
        <Col span={4} className="bs-nav-search-open">
          <Icon
            onClick={() => {this.search()}}
            style={{color:'white'}}
            type="search" />

          <Link to={'/search/' + encodeURI(this.state.value) + '/1'}>
          </Link>
        </Col>
        <Col span={16}>
          <input
            className="bs-nav-search-input"
            placeholder="搜索 iPhone"
            onKeyUp={this.onEnter.bind(this)}
            onChange={this.onChange.bind(this)}
            value={this.state.value}
          ></input>
        </Col>
        <Col span={4} className="bs-nav-search-close">
          <Icon onClick={this.clear.bind(this)} type="close"  />
        </Col>

      </Row>
    );
  }
}

