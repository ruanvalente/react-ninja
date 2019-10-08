'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      text: 'Texto'
    }
  }

  render () {
    return (
      <div
        className='container'
        onClick={() =>
          this.setState({
            text: 'Novo Texto'
          })
        }
      >
        <h2>{this.state.text}</h2>
      </div>
    )
  }
}

export default App
