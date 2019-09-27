'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <Button>Botão</Button>
      </div>
    )
  }
}

App.defaultProps = {
  courseName: 'React Ninja'
}

export default App
