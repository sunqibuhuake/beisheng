/**
 * Created by sunqi on 2018/5/23.
 */
/**
 * Created by sunqi on 2018/5/17.
 */
/**
 * Created by sunqi on 2018/5/13.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'antd'



export default class CatNav extends React.PureComponent{

  constructor(props) {
    super(props)
    this.state = {
      curCatName: 'iPhone'
    }
  }
  render() {
    const styles = {
      root: {
        width: '100%',
        marginBottom:24
      },
      navContainer: {
        width: '50%',
        minWidth: 600,
        margin: '24px auto'
      },
      navItemBox: {
        textAlign: 'center',
        fontSize: 14,
        width: '14.28%',
        float: 'left',
        display: 'inline-block',
        lineHeight: '24px',
        cursor: 'pointer'
      },
      curCatBox: {
        fontSize:36,
        textAlign:'center',
        borderBottom: '1px solid #e6e6e6',
        lineHeight:'48px',
        padding: '24px 0'
      }
    }


    //const arr = [
    //  {
    //    name: 'iPhone',
    //    cat_id: 1,
    //  },
    //  {
    //    name: 'iPad',
    //    cat_id: 2,
    //  },
    //  {
    //    name: 'Mac',
    //    cat_id: 3,
    //  },
    //  {
    //    name: 'Apple Watch',
    //    cat_id: 4,
    //  },
    //  {
    //    name: 'Music',
    //    cat_id: 5,
    //  },
    //  {
    //    name: '配件',
    //    cat_id: 6,
    //  }
    //]

    const cat_nav_list = this.props.cat.map( c => {
        return (
          <div
            key={Math.random()}
            span={4}
            style={styles.navItemBox}
          >
            <span
              onClick={this.props.onCatClick}
              data-name={c.name}
              data-catid={c.id}
              className={"cat-nav-span" + (this.props.active.id == c.id ? ' active': '')}
            >
              {c.name}
            </span>
          </div>
        )
    }

    )

    return (
      <div
        style={styles.root}>
        <Row style={styles.navContainer}>
          {cat_nav_list}
        </Row>
        <div style={styles.curCatBox}>
          {this.props.active.name}
        </div>
      </div>
    )

  }
}
