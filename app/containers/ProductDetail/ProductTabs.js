/**
 * Created by sunqi on 2018/5/21.
 */
import React from 'react'

export default class ProductTabs extends React.PureComponent{


  constructor() {
    super()
    this.state = {
      activeIndex: 0
    }
  }

  handleNavClick(e) {

    const index = e.currentTarget.getAttribute('data-index')
    this.setState({
      activeIndex: index
    })

  }

  render() {

    const styles = {
      root: {
        display: 'inline-block',
        width :'100%',
        marginTop: 24
      },
      body: {
        width: '100%',
        position: 'relative',
        display: 'inline-block',
        lineHeight: 2,
        fontSize: '1.4em',
        color: 'black',
        overflow: 'hidden'
        //padding: 48
      },
      nav: {
        width: '100%',
        height: 45,
        lineHeight: '45px',
        display: 'inline-block',
        borderBottom: '1px solid #0070c9',
        background: '#f2f2f2'
      },
      navItem: {
        width: 160,
        height: 45,
        textAlign: 'center',
        display: 'inline-block',
        float: 'left'
      },
      activeNavItem: {
        width: 160,
        height: 45,
        textAlign: 'center',
        display: 'inline-block',
        float: 'left',
        color: 'white'
      }
    }

    const navItems = [
      {
        index: 0,
        key: 'nav-name',
        text: '商品详情',
        content: this.props.detail.goods.goods_content
      },
      //{
      //  index: 1,
      //  key: 'nav-feature',
      //  text: '规格参数',
      //  content: this.props.detail.goods.goods_specattr
      //},
      //{
      //  index: 2,
      //  key: 'nav-tech',
      //  text: '包装清单',
      //  content: this.props.detail.goods.goods_package
      //},
    ]

    const navs = navItems.map(n => {
      return (
        <div
          onClick={this.handleNavClick.bind(this)}
          data-index={n.index}
          key={n.key}
          className={this.state.activeIndex == n.index ? 'product-tabs-nav-item active' : 'product-tabs-nav-item'}>
          {n.text}
        </div>
      )
    })

    const contents = navItems.map(n => {
      return (
        <section
          key={'tab-content-' + n.key}
          style={styles.body}
          className={this.state.activeIndex == n.index ? 'product-tabs-content' : 'product-tabs-content-hidden'}
        >
          <div
            dangerouslySetInnerHTML={{
                    __html: n.content
                }}
          >
          </div>
        </section>
      )
    })

    return(
      <div style={styles.root}>
        <header style={styles.nav}>
          {navs}
        </header>
        {contents}
      </div>
    )

  }
}
