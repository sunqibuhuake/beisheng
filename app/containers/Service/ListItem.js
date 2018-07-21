/**
 * Created by sunqi on 2018/7/4.
 */
import React from 'react'
import {Row, Col} from 'antd'
export default function(props) {
  return (
    <div style={{height: 120, borderTop: '1px solid #e6e6e6'}}>
      <Row className="fh">
        <Col span={5} className="fh">
          <div className="vertical-center">
            <img src={props.img} style={{height: 56}} />
          </div>
        </Col>
        <Col span={5} className="fh">
          <div className="vertical-center">
            <div style={{fontSize: '16', textAlign: 'center'}}>
              {props.title}
            </div>
          </div>
        </Col>
        <Col span={12} className="fh">

          <div className="vertical-center">
            <div style={{fontSize: '14', textAlign: 'left', width: '100%'}}>
              {props.desc}
            </div>
          </div>

        </Col>

      </Row>
    </div>
  )
}
