import React from 'react';
import PropTypes from 'prop-types';
import sizer from '../../utils/sizer'
import { Link } from 'react-router-dom';


import PageSection from '../../components/Section/PageSection'

import IntorCard from './IntorCard'
import {Button, Col,Row} from 'antd'

import entry_img_url from './assets/entry.png'

import './style.css'

export class EntryPage extends React.PureComponent {

  componentDidMount() {
    //if (this.props.username && this.props.username.trim().length > 0) {
    //  this.props.onSubmitForm();
    //}
  }


  render() {

    const styles = {
      root: {
        width: '100%',
        background: 'white',
        padding: '48px 0',
        color: 'black',
        minHeight: window.innerHeight - 45
      },
      intro: {
        textAlign: 'center'
      },
      img: {
        width: '420px',
        margin: '6px auto 32px'
      },
      start: {
        fontSize: 16,
        margin: '12px auto 48px'
      }
    }

    const cards = [
      {
        index: 1,
        title: '选择你喜爱的产品',
        l1: (<p>在我们定制的门户网站<span>(www.employeechoice.cn)</span>中</p>),
        l2: (<p>选择你喜欢的产品</p>)
      },
      {
        index: 2,
        title: '选择你学习的途径.',
        l1: (<p>有多种优秀的资源可供选择,比如简报</p>),
        l2: (<p>教程和讲座,帮助你快速上手,逐步精通</p>)
      },
      {
        index: 3,
        title: '选择你工作的方式',
        l1: (<p>使用自己熟悉和喜爱的产品</p>),
        l2: (<p>感受超乎想象的工作效率</p>)
      }
    ]
    return (
      <section style={styles.root}>
        <PageSection>
          <div style={styles.intro}>
            <p style={{fontSize: 18, marginBottom: 24}}>
              Apple Employee Choice
            </p>
            <p style={{fontSize: 24, fontWeight: 'bold', marginBottom: 24}}>
              迎接新的工作方式,一切由你做主.
            </p>
            <div>
              <img
                style={styles.img}
                src={entry_img_url}>
              </img>
            </div>
            <p style={{fontSize:14, marginBottom: 24}}>
              想用 Apple 产品来工作？现在，我们的 Apple Employee Choice 方案让你能够轻松选择自己喜爱的产品来办公。
            </p>
            <div style={styles.start}>
              <Link to="/login">
                {'立即开始 >'}
              </Link>
            </div>
          </div>
          <Row>
            <Col span={8}>
              <IntorCard
                data={cards[0]}
              >
              </IntorCard>
            </Col>
            <Col span={8}>
              <IntorCard
                data={cards[1]}
              >
              </IntorCard>
            </Col>
            <Col span={8}>
              <IntorCard
                data={cards[2]}
              >
              </IntorCard>
            </Col>
          </Row>
        </PageSection>
      </section>

    );
  }
}

EntryPage.propTypes = {};

export default EntryPage
