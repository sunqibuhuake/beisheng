/**
 * Created by sunqi on 2018/6/1.
 */
import React from 'react'

import FormRow from './FormRow.js'
import DefaultCheckBox from './DefaultCheckBox.js'
import SubmitBtn from './SubmitBtn'
export default class NormalInvoiceForm extends React.PureComponent{


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
          label="发票抬头"
          data-path="invoice.form.invoice_title"
          data-valid-path="invoice.valid.valid.invoice_title"
        ></FormRow>

        <FormRow
          label="纳税人识别号"
          data-path="invoice.form.taxpayer"
          data-valid-path="invoice.valid.valid.taxpayer"
        ></FormRow>

        <DefaultCheckBox
          data-path="invoice.form.is_default"
        ></DefaultCheckBox>

        <SubmitBtn
          key="btn1"
          onClick={this.props.onSubmit}
        ></SubmitBtn>

      </section>
    )
  }
}
