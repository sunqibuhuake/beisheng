/**
 * Created by sunqi on 2018/5/20.
 */
import React from 'react'
import PageSection from 'components/Section/PageSection'
import SearchItem from './SearchItem'
import img_url from './assets/pic-2.jpg'
export default class SearchList extends React.PureComponent{

  render() {

    if (this.props.list.length == 0) {
      return (
        <h1>
          暂无商品
        </h1>
      )
    }
    const list = this.props.list.map(p => {
      const productData = {
        id: p.goods_id,
        name: p.goods_name,
        img: p.original_img,
        intro: p.goods_remark
      }
      return (
        <SearchItem
          product={productData}
          key={(Math.random() + '').split('.')[1]}
        ></SearchItem>
      )
    })

    for (let i = 0; i < 10; i++) {
      list.push(

      )
    }
    return (
      <PageSection>
        {list}
      </PageSection>
    )
  }

}
