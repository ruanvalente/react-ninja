import React, { Component } from 'react'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      value: ''
    }
  }

  render () {
    return (
      <form>
        <input
          type='text'
          placeholder='Digite seu nome'
          value={this.state.value}
          onChange={e => {
            console.log(e)
            this.setState({
              value: e.target.value
            })
          }}
        />
      </form>
    )
  }
}

export default Form
