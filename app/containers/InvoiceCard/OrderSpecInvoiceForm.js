

/**
 * Created by sunqi on 2018/6/1.
 */
import React from 'react'

import FormRow from './FormRow.js'
import DefaultCheckBox from './DefaultCheckBox.js'
import FromRowSpec from './FormRowSpec'
import SubmitBtn from './SubmitBtn'
export default class OrderSpecInvoiceForm extends React.PureComponent{

  render() {


    const styles = {
      root: {
        width: 680,
        margin: '0 auto'
      }
    }

    return (
      <section style={styles.root}>
        <FromRowSpec
          onOrderAddClick={this.props.onOrderAddClick}
          type="2"
          label="发票抬头"
          onSelectItem={this.props.onSelectItem}
          list={this.props.list}
        ></FromRowSpec>

        <FormRow
          label="单位名称"
          data-path="invoice.form.company"
        ></FormRow>

        <FormRow
          label="纳税人识别号"
          data-path="invoice.form.taxpayer"
        ></FormRow>

        <FormRow
          label="注册地址"
          data-path="invoice.form.regaddress"
        ></FormRow>

        <FormRow
          label="注册电话"
          data-path="invoice.form.regmobile"
        ></FormRow>

        <FormRow
          label="开户银行"
          data-path="invoice.form.kaihubank"
        ></FormRow>

        <FormRow
          label="银行账户"
          data-path="invoice.form.bankacc"
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


