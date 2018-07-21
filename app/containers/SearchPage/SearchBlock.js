/**
 * Created by sunqi on 2018/5/25.
 */
import React from 'react'
import {Row, Col, Icon, Spin} from 'antd'

export default class SearchBlock extends React.PureComponent{

  constructor(props) {
    super()
    this.state = {
      search: false
    }
  }


  componentWillMount() {
    //const key = this.props.history.location.search.split('=')
  }

  // 清楚输入框
  clear() {
    this.setState({
      search: ''
    })
  }
  // 监听输入
  onChange(evt) {
    this.setState({
      search: evt.target.value
    })
  }

  //搜索业务
  search() {

    // 新搜索时默认从第一页开始显示
    this.props.updateLocation(this.state.search, 1)

  }
  onEnter(e) {
    if (e.keyCode === 13) {
      this.search()
    }
  }
  render() {
    const styles  ={
      root: {
        height: 120,
        borderBottom:'1px solid #e6e6e6'
      },
      input: {
        height: 36,
        paddingLeft: 12,
        lineHeight: '36px',
        display: 'block',
        width: '100%'
      },
      container: {
        width: 1000,
        margin: '0 auto',
        padding: '32px 0 0'
      }
    }
    return (
      <section style={styles.root}>
        <section style={styles.container}>
          <Row style={{width: 360, height: 36}} className="search-result-search-block">
            <Col span={4}>
              <Icon
                onClick={this.search.bind(this)}
                type="search"
                style={{cursor: 'pointer'}}
              />
            </Col>
            <Col span={18}>
              <input
                value={this.state.search === false ? this.props.searchinfo.key : this.state.search}
                onKeyUp={this.onEnter.bind(this)}
                onChange={this.onChange.bind(this)}
                style={styles.input}>
              </input>
            </Col>
            <Col span={2}>
              <Icon
                style={{
                  cursor: 'pointer'
                }}
                onClick={this.clear.bind(this)}
                type="close-circle" />
            </Col>
          </Row>
          <p style={{
          marginTop: 8,
          color: '#e6e6e6',
          //display: this.state.search === false ? 'block' : 'none'
          }}>
            找到{this.props.searchinfo.result.length}个结果
          </p>
        </section>

      </section>
    )
  }
}
