/**
 * Created by sunqi on 2018/5/29.
 */
import React from 'react'
import NormalFormRow from './NormalFormRow'
export default class ApplyForm extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      form: false
    }
  }

  componentDidMount() {
    const data = [
      {
        label: '提交原因',
        required: true,
        prop: {
          'data-path': 'aftermarket.apply.form.reason.value',
          mode: 'input',
          placeholder: '',
          type: 'text'
        }
      },
      {
        label: '序列号',
        required: true,
        prop: {
          'data-path': 'aftermarket.apply.form.id.value',
          mode: 'input',
          placeholder: '',
          type: 'text'
        }
      },
      {
        label: '序列号',
        required: true,
        prop: {
          mode: 'textarea',
          placeholder: '10-500字',
          'data-path': 'aftermarket.apply.form.desc.value',
          type: 'text'
        }
      }
    ]
    const form = data.map(i => {
      return (
        <NormalFormRow
          key={Math.random()}
          {...i}
        ></NormalFormRow>
      )
    })

    this.setState({
      form: form
    })
  }

  render() {
    return (
      <section>
        {this.state.form}
      </section>
    )
  }



}
