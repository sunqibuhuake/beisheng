/**
 * Created by sunqi on 2018/5/20.
 */
import React from 'react'
export default class PageSection extends React.PureComponent{

  constructor(props) {
    super(props)
  }
  render() {

    const styles = {
      root: {
        minHeight: 20
      }
    }

    if (this.props.mh) {
      styles.root.minHeight = this.props.mh + 'px';
    }
    return (
      <section style={styles.root} className="bs-conatiner">
        {this.props.children}
      </section>
    )
  }
}
