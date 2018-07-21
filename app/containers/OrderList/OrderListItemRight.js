/**
 * Created by sunqi on 2018/6/3.
 */
import React from 'react'
import { Col, Row, Popconfirm,Modal } from 'antd'
const confirm = Modal.confirm;
import OrderListItemNormal from './OrderListItemNormal'
import OrderCancleBtn from './OrderCancleBtn'
import { Link } from 'react-router-dom'
import ShouHouModal from '../../components/ShouHouModal'
export default  class OrderListItemRight extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {

      visible: false

    }
  }




  handleClose() {
    this.setState({
      visible: false,
    });
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }
  getOrderStatus() {

    const props = this.props;
    const code = props.order.status;
    const id = props.order.order_sn;
    const status = {
      text: '',
      action: ''
    }


    if (code == -2) {
      status.text = '订单异常';
      status.action = ''
    }
    if (code == -1) {
      status.text = '已取消';
      status.action = ''
    }

    if (code == 0) {
      status.text = '等待买家付款';
      status.action = (
        <div>
          <div
            onClick={props.pay}
            className="order-item-pay-btn">立即付款</div>
          <Popconfirm title="您确定要删除该地址吗?" onConfirm={props.onCancleClick.bind(null, id)} okText="确认" cancelText="取消">
            <div className="order-item-text-btn">取消订单</div>
          </Popconfirm>
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
          <div>
            等待发货
          </div>

        </div>
      );
      status.action = (
        <div>

        </div>
      )
    }

    if (code == 2) {
      status.text = (
        <div>
          <div>
            支付成功
          </div>
          <div>
            等待收货
          </div>
          <Link to={'/order/' + id}>
            查看物流
          </Link>
        </div>
      );
      status.action = (
        <div>
          <Popconfirm title="您确定要确认收货吗?" onConfirm={props.onConfirmReceive.bind(null, id)} okText="确认" cancelText="取消">
            <div className="order-item-prim-btn">确认收货</div>
          </Popconfirm>
        </div>
      )
    }
    if (code == 3) {
      status.text = (
        <div>
          <div>
            交易完成
          </div>
        </div>
      );
      status.action = (
        <div>
          <div className="order-item-prim-btn"
               onClick={this.showModal.bind(this)}
          >申请退货</div>
        </div>
      )
    }

    if (code == 4) {
      status.text = (
        <div>
          <div>
            退货中
          </div>
        </div>
      );
      status.action = ''
    }

    if (code == 5) {
      status.text = (
        <div>
          <div>
            退货完成
          </div>
        </div>
      );
      status.action = ''
    }

    if (code == 6) {
      status.text = (
        <div>
          <div>
            退货失败
          </div>
        </div>
      );
      status.action = ''
    }

    return status;

  }

  render() {

    const status = this.getOrderStatus(props)
    const props = this.props;

    return (
      <Col span={10} style={{ height: props.height }}>
        <Row style={{ height: '100%' }}>
          <Col span={8} className="borderLeft" style={{ height: '100%' }}>
            <OrderListItemNormal>
              ￥{props.sum}
            </OrderListItemNormal>
          </Col>
          <Col span={8} className="borderLeft" style={{ height: '100%' }}>
            <OrderListItemNormal>
              {status.text}
            </OrderListItemNormal>
          </Col>
          <Col span={8} style={{ height: '100%' }} className="borderLeft">
            <OrderListItemNormal>
              {status.action}
            </OrderListItemNormal>
          </Col>
        </Row>

        <ShouHouModal
          visible={this.state.visible}
          account={this.props.account}
          handleClose={this.handleClose.bind(this)}
        >
        </ShouHouModal>
      </Col>
    )
  }

}


