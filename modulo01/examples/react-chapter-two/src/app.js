'use strict'

import React, { Component } from 'react'
import LikeButton from './like-button'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <LikeButton />
      </div>
    )
  }
}

App.defaultProps = {
  courseName: 'React Ninja'
}

export default App
