/**
 * Created by sunqi on 2018/6/12.
 */
/**
 * Created by sunqi on 2018/5/28.
 */

import React from 'react'
import img_url from './assets/footer.png'
import {Row, Col} from 'antd'
export default function(props) {

  if (!props.seller) {
    window.location.reload()
  }
  return (
    <div className="frame-containter">
      <div className="footer w100pct color-gray">
        <div className="con">
          <div className="block">
            <ul className="title">
              <li id="user-guide"  className="cursor down">用户指南</li>
            </ul>
            <ul className="text">
              <li className="tit">购物流程</li>
              <li className="txt">用户登录&gt;浏览商品&gt;放入购物车&gt;提交订单&gt;确认付款&gt;用户签收</li>
            </ul>
          </div>
          <div className="block">
            <ul className="title">
              <li id="payment-intro"  className="cursor down">付款方式</li>
            </ul>
            <ul className="text">
              <li className="tit">支付方式/发票说明</li>
              <li className="txt">
                Employee Choice商城支持多种支付方式，订购中您可以选择以下付款方式来支付您的订单<br/><br/>
                <img src={img_url}/><br/><br/>
                Employee Choice商城支持为您开具普通发票和增值税专用发票，请选择你需要开具的发票种类，然后填入对应信息。商城会将开具好的发票与订单商品一同进行配送。
              </li>
              <li className="tit">优惠券说明</li>
              <li className="txt">
                优惠券使用限活动页面制定商品，限时购、特价商品等商品不在使用优惠券范围之内<br/>
                每一张优惠券只能使用一次，不支持重复使用<br/>
                过期的优惠券不能使用
              </li>
            </ul>
          </div>
          <div className="block">
            <ul className="title">
              <li id="delivery-intro"  className="cursor down">配送方式</li>
            </ul>
            <ul className="text">
              <li className="tips">Employee Choice商城为您提供两种配送方式，分别是送货上门与店面自提，与顺丰速递合作，保证您购入的产品能够按时送到您的手中。您也可以选择距您最近的店面进行商品提取。</li>
              <li className="tit">配送运费</li>
              <li className="txt">您的商品的配送费用，全部由与您企业签约的Apple授权经销商来承担。</li>
              <li className="tit">配送范围</li>
              <li className="txt">您的产品支持配送到所有顺丰速递支持的配送范围，具体配送范围请点击<span className="lanse underline"><a href="JavaScript:void(0);">这里</a></span>查看。</li>
              <li className="tit">配送时间</li>
              <li className="txt">
                下订单并付款后，你将收到确认订单的电子邮件，以确认订单详细信息，包括每件商品的预计发货时间或送达日期。当你的商品已发货并准备配送时，商城会通过电子邮件来向你发送包含承运商和商品跟踪信息的发货通知。<br/><br/>
                "有现货"的商品预计在当天或下一个工作日配送。<br/>
                预计发货时间较长的商品将在指定期限内从库房发运(比如：7-10 个工作日)。
              </li>
            </ul>
          </div>
          <div className="block">
            <ul className="title">
              <li className="cursor down">
                <a id="shouhou-intro" className="maodian" href="#">售后服务</a>
              </li>
            </ul>
            <ul className="text">
              <li className="tips">Employee Choice商城为您提供两种配送方式，分别是送货上门与店面自提，与顺丰速递合作，保证您购入的产品能够按时送到您的手中。您也可以选择距您最近的店面进行商品提取。</li>
              <li className="tit">退货政策</li>
              <li className="txt">如果您的产品有任何的质量问题，请您提供对应的证明内容内容，经Employee Choice商城审批核实通过后，商城将为您进行退货服务</li>
              <li className="tit">退货流程</li>
              <li className="txt">
                ⑴在订单页面点击申请售后，进入退款页面<br/>
                ⑵填写退货信息，并提供官方检测机构报告单照片（如划痕类外观损坏，请提供设备损坏照片）<br/>
                ⑶填写退货快递公司及运单号<br/>
                ⑷如果你申请并收到了产品对应的发票，则须将其与商品一并退回。<br/>
                ⑸与您企业签约的苹果授权企业经销商收到退还的物品并检测无误后，会立即处理你的退款。你收到退款的时间会根据订购时的付款方式而有所不同。具体退款时间请咨询您的经销商。
              </li>
              <li className="tit">常见问题</li>
              <li className="txt">点击<span className="lanse underline"><a target="_blank" href="https://www.apple.com/cn/search/常见问题?src=globalnav">这里</a></span>查看。</li>
            </ul>
          </div>
          <div className="block">
            <ul className="title">
              <li id="about-intro"  className="cursor down">关于 Employee Choice</li>
            </ul>
            <ul className="text">
              <li className="tips">Apple Employee Choice 是我们最新推出的一项 IT 支持方案， 由你来选择喜爱的 Apple 产品，让它们在工作中助你一臂之力。</li>
              <li className="tit">经销商公司</li>
              <li className="txt">{props.seller ? props.seller.seller_name : null}</li>
              <li className="tit">经销商门店</li>
              <li className="txt">
                <Row>
                  {props.delivery.ready ? props.delivery.list[1].list.map(o => (
                    <Col
                      key={Math.random()}
                      span={12}>
                      <div style={{width: '92%', marginBottom: 12}}>
                        地址: { o.province_name + o.city_name + o.district_name + ' ' + o.address}
                        <br/>
                        电话：{o.mobile}
                      </div>
                    </Col>
                  )) : ''}
                </Row>
              </li>
              <li className="tit">服务介绍</li>
              <li className="txt">{props.seller ? props.seller.desc : ''}</li>
              <li className="tit">联系我们</li>
              <li className="txt">{props.seller ? props.seller.seller_contact : null}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
