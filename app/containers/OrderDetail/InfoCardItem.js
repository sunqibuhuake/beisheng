/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'
import InfoCardItemRow from './InfoCardItemRow'
import helper from '../../utils/helper'
export default function InfoCard(props) {

  const styles={
    root: {
      border: '1px solid #eeeeee',
      height: 192,
      width: '98%',
      margin: '0 auto',
      padding: '12px 12px'
    }
  }



  const item_data = {};

  if (props.type == 'shouhuoren') {
    item_data.title = '收货人信息'

    if (!props.consignee && props.shipping_code == 'ziti') {
      item_data.title = '自提点信息'
      item_data.rows = [
        {
          name: '联系人',
          value: props.shipping_info.consignee
        },
        {
          name: '联系方式',
          value: props.shipping_info.mobile,
        },
        {
          name: '地址',
          value: props.shipping_info.province_name + props.shipping_info.city_name + props.shipping_info.district_name + props.shipping_info.address
        }
      ];
    } else {
      item_data.spec = null;
      item_data.rows = [
        {
          name: '收货人',
          value: props.consignee,
        },
        {
          name: '手机号',
          value: props.mobile
        },
        {
          name: '地址',
          value: props.total_address,
        }
      ];
    }
  }

  if (props.type == 'peisong') {
    item_data.title = '配送信息'
    if (props.shipping_code == 'ziti') {
      item_data.rows = [

      ]

      item_data.spec = '自提,无物流';


    } else {
      item_data.rows = [
        {
          name: '配送方式',
          value: props.shipping_name
        },
        {
          name: '发货时间',
          value: props.shipping_time == null ? '未发货' : helper.timestampToTime(props.shipping_time, true),
        },
        {
          name: '预计送达时间',
          value:  props.shipping_time == null ? '未发货' : helper.timestampToTime((props.shipping_time - 0) +  60 * 60 * 72)
        }
      ]
    }

  }

  if(props.type == 'fukuan') {
    item_data.title = '付款信息';
    item_data.rows = [
      {
        name: '付款方式',
        value: props.pay_name
      },
      {
        name: '付款时间',
        value: props.pay_time == 0 ? '未支付' : helper.timestampToTime(props.pay_time - 0,true)
      },
      {
        name: '商品总额',
        value: props.order_amount
      },
      {
        name: '支付总额',
        value: props.paid_money
      }
    ]

  }

  if (props.type == 'fapiao') {
    item_data.title = '发票信息'
    if (props.invoice_title) {
      item_data.rows = [
        {
          name: '发票类型',
          value: props.invoice_type < 2 ? '普通发票' :'增值税专用发票'
        },
        {
          name: '发票抬头',
          value: props.invoice_title
        },
        {
          name: '发票内容',
          value: '商品明细'
        }
      ]
    } else {
      item_data.rows = [];
      item_data.spec = '未索要发票'
    }

  }

  const rows = item_data.rows.map(row => {
    return (
      <InfoCardItemRow
        key={Math.random()}
        {...row}
      ></InfoCardItemRow>
    )
  })
  return(
    <div style={styles.root}>
      <p style={{fontSize: 16}}>
        {item_data.title}
      </p>
      {rows.length == 0 ? null: rows}
      {item_data.spec ? item_data.spec : ''}
    </div>
  )
}
