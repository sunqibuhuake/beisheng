/**
 * Created by sunqi on 2018/5/18.
 */
import React from 'react'
import PropTypes from 'prop-types';
import './style.css'
export default class ConSec extends React.PureComponent {
  render() {
    return (
     <section className="bs-container">
       {this.props.children}
     </section>
    );
  }
}
