/**
 * Created by sunqi on 2018/5/31.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga'
import './style.css'

import {startEditAccountInfo, editAccountInfo,changeSimpleValue, fetchListData} from '../App/actions'
import {makeSelectNormal, makeSelectValue} from '../App/selectors'

import MetaModal from './MetaModal'
import MetaCard from './MetaCard'

export class MetaCardContainer extends React.PureComponent {

  componentDidMount() {
  }

  render() {
    return (
      <section>
        <MetaCard
          avatar={this.props.info.data.head_pic}
          coupon={this.props.info.data.coupon_count}
          collect={this.props.info.data.collect_count}
          company={this.props.account_info.data.store.store_name}
          email={this.props.info.data.email}
          title={this.props.info.data.job || '未设置职位'}
          nickname={this.props.info.data.nickname || '未设置昵称'}
          onEdit={this.props.onEdit}
        ></MetaCard>
        <MetaModal
          token={this.props.account_info.data.user.token}
          changeAvatar={this.props.changeAvatar}
          avatar={this.props.info.form.head_pic || this.props.info.data.head_pic}
          visible={this.props.info.modal}
          onClose={this.props.onClose}
          onSubmit={this.props.onSubmit}
        ></MetaModal>

      </section>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onClose: () => {
      dispatch(changeSimpleValue('info.modal', false));
    },
    onSubmit: () => {
      dispatch(editAccountInfo())
    },
    onEdit: () => {
      dispatch(startEditAccountInfo())
    },
    changeAvatar: (value) => {
      dispatch(changeSimpleValue('info.form.head_pic', value))
    }
  };
}

const mapStateToProps = createStructuredSelector({
  info: makeSelectNormal('info'),
  account_info: makeSelectNormal('account')
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({key: 'info', saga});
export default compose(
  withSaga,
  withConnect
)(MetaCardContainer);
