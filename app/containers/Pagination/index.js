/**
 * Created by sunqi on 2018/5/23.
 */
import React from 'react'
import {Row, Col, Icon} from 'antd'
export default class Pagination extends React.PureComponent {


  prevPage() {
    if (this.props.data.index == 1) {
      return false;
    }
    this.props.prevFunc()
  }

  nextPage() {

    if (this.props.data.index == this.props.data.total) {
      return false;
    }
    this.props.nextFunc()
  }


  render() {

    if (this.props.data.index == this.props.data.total && this.props.data.total == 1) {
      return null;
    }
    const styles = {
      root: {
        height: 32,
        lineHeight: '32px',
        fontSize: 14,
        width: '50%',
        minWidth: '500px',
        margin: '0 auto',
        textAlign: 'center'
      },
      cur: {
        textAlign: 'center',
        border: '1px solid rgb(183, 183, 183)',
        padding: '0 6px',
        borderRadius: '2px'
      },
      split: {
        padding: '0 6px',
        textAlign: 'center',
      },
      total: {
        padding: '0 6px',
        textAlign: 'center',
      },
      btn: {
        padding: '0 12px',
        cursor: 'pointer'
      },
      disable: {
        color: '#dcdcdc',
        padding: '0 12px'
      }

    }


    return (
      <Row style={styles.root}>
        <Col span={8}>
          <span
            style={this.props.data.index == 1 ? styles.disable : styles.btn}
            onClick={this.prevPage.bind(this)}
          >
          <Icon type="left"/>
          </span>
        </Col>
        <Col span={8}>
          <span style={styles.cur}>
            {this.props.data.index}
          </span>
          <span style={styles.split}>/</span>
          <span style={styles.total}>
            {this.props.data.total}
          </span>
        </Col>
        <Col span={8}>
            <span
              style={(this.props.data.index == this.props.data.total) ? styles.disable : styles.btn}
              onClick={this.nextPage.bind(this)}
            >
              <Icon type="right"/>
            </span>
        </Col>
      </Row>
    )

  }
}
