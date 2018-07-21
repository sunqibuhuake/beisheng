/**
 * Created by sunqi on 2018/5/31.
 */
import React from 'react'
import {Modal, Button} from 'antd'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';


import {makeSelectModalStatus} from '../App/selectors'
import {changeSimpleValue} from '../App/actions'

import saga from './saga';

export default class AddressModal extends React.PureComponent{
  render() {
    return (
      <Modal
        title={null}
        header={null}
        footer={null}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    )
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangeCode: (evt) => dispatch(changeCode(evt.target.value)),
    onSubmitForm: (evt) => {
      // TODO LOGIN
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      return dispatch(loadRepos());
    },
    onGetCode: (evt) => {
      return dispatch(getVerifyCode())
    }
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'address_modal', reducer });
const withSaga = injectSaga({ key: 'address_modal', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(HomePage);
