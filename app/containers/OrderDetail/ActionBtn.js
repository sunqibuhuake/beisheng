import React from 'react'
import {Popconfirm} from 'antd'
import Timer from './Timer'

export default function(props) {

  const status = getOrderStatus(props)

  return (
    <div>
      {status.action}
    </div>
  )
}

function getOrderStatus(props) {

  const code = props.order.status;
  const id = props.order.order_sn;
  const pay_way = props.order.pay_code;
  const status = {
    text: '',
    action: ''
  }


  if (code == -2) {
    status.action = '订单异常'
  }
  if (code == -1) {
    status.action = '订单已取消'
  }

  if (code == 0) {
    status.action = (
      <div>
        <div
          style={{margin: '0 auto 4px'}}
          onClick={props.pay.bind(null, id, pay_way)}
          className="order-item-pay-btn">立即付款</div>

        <Timer
          start={props.order.create_time}
          limit={1000 * 60 * 30} // 三十分钟
          mode="hour"
        ></Timer>
      </div>
    )
  }
  // 完成支付 尚未收货
  if (code == 1) {
    status.text = (
      <div>
        <div>
          支付成功
        </div>

      </div>
    );
    status.action = (
      <div>
        支付成功
      </div>
    )
  }

  if (code == 2) {

    status.action = (
      <div>
        <Popconfirm title="您确定要确认收货吗?" onConfirm={props.confirmReceive.bind(null, id)} okText="确认" cancelText="取消">
          <div
            style={{margin: '0 auto 4px'}}
            className="order-item-prim-btn">确认收货</div>
        </Popconfirm>
        <Timer
          start={(props.order.shipping_time - 0) * 1000}
          limit={1000 * 60 * 60 * 24 * 7} // 一小时
          mode="day"
        ></Timer>
      </div>
    )
  }
  if (code == 3) {
    status.action = (
      <div>
        <div>
          交易完成
        </div>
      </div>
    );
    //status.action = (
    //  <div>
    //    <Popconfirm title="您确定要退货吗?" onConfirm={this.showModal.bind(this)} okText="确认" cancelText="取消">
    //      <div className="order-item-prim-btn">申请退货</div>
    //    </Popconfirm>
    //  </div>
    //)
  }

  if (code == 4) {
    status.action = (
      <div>
        <div>
          退货中
        </div>
      </div>
    );
  }

  if (code == 5) {
    status.action = (
      <div>
        <div>
          退货完成
        </div>
      </div>
    );
  }

  if (code == 6) {
    status.action = (
      <div>
        <div>
          退货失败
        </div>
      </div>
    );
  }

  return status;

}
