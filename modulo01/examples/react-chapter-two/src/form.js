import React, { Component } from 'react'

class Form extends Component {
  constructor () {
    super()
    this.state = {
      value: '',
      checked: false
    }
  }

  render () {
    return (
      <form>
        <label>Input: </label>
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
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={e =>
              this.setState({
                checked: !this.state.checked
              })
            }
          />
          CheckBox
        </label>
        <input type='radio' name='rd' defaultChecked value='1' /> Radio 1
        <input type='radio' name='rd' value='2' /> Radio 2
      </form>
    )
  }
}

export default Form
