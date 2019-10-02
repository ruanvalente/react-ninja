'use strict'

import React, { Component } from 'react'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}

App.defaultProps = {
  courseName: 'React Ninja'
}

export default App
