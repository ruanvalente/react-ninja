'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
    this.time
  }

  componentDidMount () {
    this.time = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.time)
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps: timer', this.state.time, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    // console.log('shouldComponentUpdate: timer', this.state, nextState)
    // return this.state.time !== nextState.time
    return this.props.time !== nextProps.time
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate: timer', this.props, nextProps.time)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate: timer', this.props, prevProps)
  }

  render () {
    return <div>Timer: {this.state.time}</div>
  }
}

export default Timer
