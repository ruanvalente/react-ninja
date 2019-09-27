'use strict'

import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container'>
        {['#ffff00', '#1a8cff', '#40bf40'].map(squareColor => (
          <Square key={squareColor} color={squareColor} />
        ))}
      </div>
    )
  }
}

App.defaultProps = {
  courseName: 'React Ninja'
}

export default App
