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
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log('event', e.target)
        }}
        onChange={e => {
          console.log('nome', e.target.name)
          console.log('value', e.target.value)
        }}
      >
        <input type='name' name='name' />
        <input type='email' name='email' />
        <button type='submit'>Enviar</button>
      </form>
    )
  }
}

export default Form
