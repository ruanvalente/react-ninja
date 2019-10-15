import React, { Component } from 'react'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      value: '2'
    }
  }

  render () {
    return (
      <form>
        <select
          multiple
          value={['1', '2']}
          onChange={e =>
            this.setState({
              value: e.target.value
            })
          }
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
      </form>
    )
  }
}

export default Form
