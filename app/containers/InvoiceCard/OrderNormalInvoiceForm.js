

/**
 * Created by sunqi on 2018/6/1.
 */
import React from 'react'

import FormRow from './FormRow.js'
import DefaultCheckBox from './DefaultCheckBox.js'
import FromRowSpec from './FormRowSpec'
import SubmitBtn from './SubmitBtn'
export default class OrderNormalInvoiceForm extends React.PureComponent{


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
          type="1"
          label="发票抬头"
          onSelectItem={this.props.onSelectItem}
          list={this.props.list.filter((l,i) => {
            l.index = i;
            return (l.type == 1 || l.type == 0)
          })}
          event={this.props.event}
        ></FromRowSpec>

        {this.props.spec ? '' : (
          <FormRow
            label="纳税人识别号"
            data-path="invoice.form.taxpayer"
          ></FormRow>
        )}

        <DefaultCheckBox
          data-path="invoice.form.is_default"
        ></DefaultCheckBox>

        <SubmitBtn
          key="btn2"
          onClick={this.props.onSubmit}
        ></SubmitBtn>

      </section>
    )
  }
}
