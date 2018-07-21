/**
 * Created by sunqi on 2018/6/19.
 */
import React from 'react'

export default class Timer extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      start: new Date(this.props.start),
      limit: props.limit,
      left: props.limit - (new Date() - new Date(this.props.start)) < 0 ? 0 : props.limit - (new Date() - new Date(this.props.start))
    }
  }
  componentDidMount() {
    const self = this;
    setInterval(() => {
      const left = this.state.left - 1000;
      if (left <= 0) {
        self.setState({
          left: 0
        })
      } else {
        self.setState({
          left: left
        })
      }

    }, 1000)

  }

  hourFormat(t) {
    const m = ~~(t / 1000 / 60);
    const s = ~~((t - (m * 1000 * 60)) / 1000);
    return m + '分钟' + s + '秒'
  }

  dayFormat(t) {
    const d = ~~(t / 1000 / 60 / 60 / 24);
    const h = ~~((t - (d * 24 * 60 * 1000 * 60)) / 1000 / 60 / 60);
    return d + '天' + h + '小时'
  }

  render() {
    return (
      <div style={{color: '#818181'}}>
        剩余
        {
          this.props.mode == 'hour'
        ? this.hourFormat(this.state.left)
        : this.dayFormat(this.state.left)
      }
      </div>
    )
  }
}
