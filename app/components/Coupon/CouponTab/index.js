/**
 * Created by sunqi on 2018/6/6.
 */
import React from 'react'
import NavBtn from './CouponTabNav'
import CouponItem from '../index'
export default class CouponTab extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      active: 'enable'
    }
  }

  onNavClick(e) {
    const filter = e.target.getAttribute('data-filter')
    this.setState({
      active: filter
    })
  }

  componentDidMount() {

  }

  getNavBtns() {

    const header = [
      {
        text: '可使用',
        index: 1,
        filter: 'enable',
      },
      {
        text: '已使用',
        index: 2,
        filter: 'used',

      },
      {
        text: '已失效',
        index: 3,
        filter: 'disable',
      }
    ]

    const navs = header.map(h => (
      <NavBtn
        onClick={this.onNavClick.bind(this)}
        active={this.state.active}
        key={Math.random()}
        {...h}
      >
      </NavBtn>
    ))

    return navs;
  }

  getCouponCardList() {
    const arr = []
    this.props.data.forEach(c => {

      console.log(c);

      if (c.status == this.state.active) {
        arr.push(
          (
            <CouponItem
              {...c}
              status="enable"
              key={Math.random()}
            >
            </CouponItem>
          )
        )
      }
    })

    if (arr.length == 0) {
      return (<h3>暂无</h3>)
    } else {
      return arr;
    }
  }

  render() {

    const styles = {
      header: {
        border: '1px solid #DEDFE0',
        width: '100%',
        position: 'relative',
        height: 43,
        background: '#EBECED'
      },
      content: {
        borderBottom: '1px solid #e6e6e6',
        borderLeft: '1px solid #e6e6e6',
        borderRight: '1px solid #e6e6e6',
        background: 'white',
        height: 360,
        width: '100%',
        overflowY: 'auto',
        padding: 24
      }
    }

    return (
      <section>
        <header style={styles.header}>
          {this.getNavBtns()}
        </header>
        <div style={styles.content}>
          {this.getCouponCardList()}
        </div>
      </section>
    )


  }
}
