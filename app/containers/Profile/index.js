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

import Card from 'components/Card'
import MetaCard from '../MetaCard'
import AddressCard from '../AddressCard'
import InvoiceCard from '../InvoiceCard'
import ProfileOrderCard from '../OrderList/ProfileOrderCard'

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import './style.css'

export default class Profile extends React.PureComponent {

  componentDidMount() {

    // todo 检测是否存有订单数据
  }

  render() {

    const styles = {
      root: {

      }
    }
    return (
      <PageSection>
        <section className="mb12">
          <MetaCard></MetaCard>
        </section>
        <section className="mb12">
          <AddressCard></AddressCard>
        </section>
        <section className="mb12">
          <InvoiceCard
            mode="profile"
          ></InvoiceCard>
        </section>
        <section className="mb12">
          <ProfileOrderCard></ProfileOrderCard>
        </section>

      </PageSection>
    )


  }
}

Profile.propTypes = {};
