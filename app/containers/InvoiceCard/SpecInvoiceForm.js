/**
 * Created by sunqi on 2018/6/1.
 */
import React from 'react'

import FormRow from './FormRow.js'
import DefaultCheckBox from './DefaultCheckBox.js'
import SubmitBtn from './SubmitBtn'
export default class SpecInvoiceForm extends React.PureComponent{


  render() {
    const styles = {
      root: {
        width: 680,
        margin: '0 auto'
      }
    }

    return (
      <section style={styles.root}>

        <FormRow
          label="发票抬头	"
          data-path="invoice.form.invoice_title"
          data-valid-path="invoice.valid.valid.invoice_title"
        ></FormRow>

        <FormRow
          label="单位名称"
          data-path="invoice.form.company"
        ></FormRow>

        <FormRow
          label="纳税人识别号"
          data-path="invoice.form.taxpayer"
          data-valid-path="invoice.valid.valid.taxpayer"
        ></FormRow>

        <FormRow
          label="注册地址"
          data-path="invoice.form.regaddress"
          data-valid-path="invoice.valid.valid.regaddress"
        ></FormRow>

        <FormRow
          label="注册电话"
          data-path="invoice.form.regmobile"
          data-valid-path="invoice.valid.valid.regmobile"
        ></FormRow>

        <FormRow
          label="开户银行"
          data-path="invoice.form.kaihubank"
          data-valid-path="invoice.valid.valid.kaihubank"

        ></FormRow>

        <FormRow
          label="银行账户"
          data-path="invoice.form.bankacc"
          data-valid-path="invoice.valid.valid.bankacc"

        ></FormRow>

        <DefaultCheckBox
          data-path="invoice.form.is_default"
        ></DefaultCheckBox>

        <SubmitBtn
          onClick={this.props.onSubmit}
        ></SubmitBtn>

      </section>
    )
  }
}
