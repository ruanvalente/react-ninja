'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.teste = this.teste.bind(this)
  }
  teste () {
    console.log(this)
    console.log('click')
  }

  render () {
    return (
      <div onClick={this.teste}>
        <h1>App</h1>
      </div>
    )
  }
}

export default App
