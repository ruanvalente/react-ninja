import React, { Component } from 'react'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Texto'
    }
  }

  render () {
    return (
      <form>
        <textarea
          value={this.state.value}
          onChange={e =>
            this.setState({
              value: e.target.value
            })
          }
        />
      </form>
    )
  }
}

export default Form
