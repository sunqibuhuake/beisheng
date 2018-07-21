/**
 * Created by sunqi on 2018/5/28.
 */
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
import './style.css'


import A1 from './pages/a1'
import A2 from './pages/a2'
import A3 from './pages/a3'
import A4 from './pages/a4'
import A5 from './pages/a5'
import A6 from './pages/a6'


export default class StaticPage extends React.PureComponent {

  componentDidMount() {

  }

  render() {

    const styles = {
      root: {

      }
    }

    const key = this.props.match.params.key

    let content = null;

    if (key == 1) {

      content = (<A1></A1>)

    }
    if (key == 2) {

      content = (<A2></A2>)

    }

    if (key == 3) {

      content = (<A3></A3>)

    }

    if (key == 4) {

      content = (<A4></A4>)

    }

    if (key == 5) {

      content = (<A5></A5>)

    }

    if (key == 6) {

      content = (<A6></A6>)

    }



    return (
      <div style={styles.root}>
        {content}
      </div>

    )


  }
}

