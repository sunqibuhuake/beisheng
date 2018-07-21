/**
 * Created by sunqi on 2018/5/13.
 */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import PageSection from 'components/Section/PageSection'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';


import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';


import {Spin} from 'antd';


import {search, setPagination} from '../App/actions'
//import {getCat, changeActiveCat, nextPage, prevPage} from './actions'
import {makeSelectSearch,makeSelectPagination } from '../App/selectors';

//import {makeSelectCat, makeSelectPagination, makeSelectActive, makeSelectProducts} from './selectors'

//import reducer from './reducer';
import saga from './saga';
import SearchList from '../../components/SearchList'
import SearchBlock from './SearchBlock'
import Pagination from '../Pagination'
import './style.css'

export class SearchPage extends React.PureComponent {


  componentDidMount() {
    console.log(this);
    this.updateSearchFromLocation()
  }

  updateSearchFromLocation() {
    // 从 url 取得关键词
    const key = this.props.match.params.key;
    // 判断关键词是否为空
    if (!key) {
      console.log('搜索关键词为空')
      return false
    }

    let page = this.props.match.params.page;

    // 更新分页
    // todo 完善 total 参数
    //this.props.setPagination(index, 10)

    // 更新关键词,触发saga
    this.props.search(key, page)

  }

  updateLocation(key, page) {

    if (key.trim() === '') {
      console.log('输入搜索关键词为空!');
      return false
    }

    this.props.history.push({
      pathname : `/search/${key}/${page}`
    })

  }



  componentWillReceiveProps(np) {
    // 页面第一次加载也会运行
    const cur_search_key = this.props.match.params.key;
    const cur_search_page = this.props.match.params.page;

    const next_search_key = np.match.params.key;
    const next_search_page = np.match.params.page;

    // 如果查询参数出现差异
    if ((cur_search_key !== next_search_key) || (cur_search_page !== next_search_page)) {
      // todo 优化
      this.props.search(next_search_key, next_search_page)
    }
  }


  search(key) {

    // 更新state 存储的搜索关键词
    this.props.search(key);

    // 更新页面路径




  }


  parseKey(s) {
    // todo 完善验证


  }

  parsePagination(s) {
    // todo 完善验证
    if (s.split('page=').length !== 2) {
      return 1;
    }
    const index = s.split('page=')[1].split('&')[0]
    return index || 1;
  }

  getKey() {
    return this.props.match.params.key;
  }
  getPage() {
    // todo 校验
    return (this.props.match.params.page - 0);
  }

  nextPage() {
    const key = this.getKey();
    const index = this.getPage() + 1;
    this.updateLocation(key, index)
  }
  prevPage() {
    const key = this.getKey();
    const index = this.getPage() - 1;
    this.updateLocation(key, index)
  }

  jump() {

  }

  componentWillUnmount() {
  }

  //component

  render() {
    //const { loading, error } = this.props;

    const styles = {
      root: {
        background: 'white',
        padding: '0px 0 80px'
      }
    }
    return (
      <div style={styles.root}>
        <SearchBlock
          searchinfo={this.props.searchinfo}
          updateLocation={this.updateLocation.bind(this)}
        ></SearchBlock>
        <PageSection>

          {
            this.props.searchinfo.ready ? (
              <section style={{paddingTop: 48}}>
                <SearchList
                  list={this.props.searchinfo.result}
                ></SearchList>
              </section>
            ) : (
              <div style={{
                width: '100%',
                height: 480,
                marginTop: 160,
                textAlign: 'center'
              }}>
                <Spin></Spin>
              </div>
            )
          }
        </PageSection>
        <Pagination
          data={this.props.pagination}
          nextFunc={this.nextPage.bind(this)}
          prevFunc={this.prevPage.bind(this)}
        ></Pagination>
      </div>
    );
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    search: (key, page) => {
      return dispatch(search(key, page))
    },
    setPagination: (index, total) => dispatch(setPagination('search', index, total))
  };
}

const mapStateToProps = createStructuredSelector({
  searchinfo: makeSelectSearch(),
  //cat: makeSelectCat(),
  //products: makeSelectProducts(),
  //active: makeSelectActive(),
  pagination: makeSelectPagination()
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

//const withReducer = injectReducer({key: 'search', reducer});
const withSaga = injectSaga({key: 'search', saga});

export default compose(
  //withReducer,
  withSaga,
  withConnect,
)(SearchPage);

