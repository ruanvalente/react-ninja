'use strict'

import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container' onClick={e => console.log('click')}>
        {['#ffff00', '#1a8cff', '#40bf40', '#ffff00'].map(
          (squareColor, index) => (
            <Square key={index} color={squareColor} />
          )
        )}
      </div>
    )
  }
}

App.defaultProps = {
  courseName: 'React Ninja'
}

export default App
