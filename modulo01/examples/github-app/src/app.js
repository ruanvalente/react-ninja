'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'Ruan Valente',
        photo: 'https://avatars3.githubusercontent.com/u/6674232?v=4',
        login: 'ruanvalente',
        repos: 2,
        followers: 12,
        following: 10
      },
      repos: [
        {
          link: '#',
          name: 'Repositório'
        }
      ],
      starred: [
        {
          link: '#',
          name: 'Repositório'
        }
      ]
    }
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App
