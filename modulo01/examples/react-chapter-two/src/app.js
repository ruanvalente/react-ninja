'use strict'

import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <h2>{this.props.courseName}</h2>
        <Title />
      </div>
    )
  }
}

App.defaultProps = {
  courseName: 'React Ninja'
}

export default App
