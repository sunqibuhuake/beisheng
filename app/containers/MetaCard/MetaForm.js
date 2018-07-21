/**
 * Created by sunqi on 2018/6/1.
 */
import React from 'react'

import FormRow from './FormRow.js'
import DefaultCheckBox from './DefaultCheckBox.js'
import SubmitBtn from './SubmitBtn'
import ImageUploadRow from './ImageUploadRow.js'
export default class MetaForm extends React.PureComponent {
  render() {
    const styles = {
      root: {
        width: 480,
        margin: '0 auto'
      }
    }

    return (
      <section style={styles.root}>


        <ImageUploadRow
          token={this.props.token}
          label="头像"
          changeAvatar={this.props.changeAvatar}
          avatar={this.props.avatar}
        >
        </ImageUploadRow>


        <FormRow
          label="姓名"
          data-path="info.form.nickname"
        ></FormRow>

        <FormRow
          label="职位"
          data-path="info.form.job"
        ></FormRow>

        <FormRow
          label="手机号码"
          data-path="info.form.mobile"
        ></FormRow>

        <SubmitBtn
          onClick={this.props.onSubmit}
        ></SubmitBtn>

      </section>
    )
  }
}
