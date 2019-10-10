'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }
    this.value
  }

  componentDidMount () {
    this.value = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.value)
  }

  render () {
    return <div>Timer: {this.state.time}</div>
  }
}

export default Timer
