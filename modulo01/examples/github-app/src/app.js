'use strict'

import React, { Component } from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Search />
        <UserInfo />
        <Actions />
        <Repos
          className='repos'
          title='Repositórios'
          repos={[{ link: '#', name: 'Nome do repositório' }]}
        />
        <Repos
          className='starred'
          title='Favoritos'
          repos={[{ link: '#', name: 'Nome do repositório' }]}
        />
      </div>
    )
  }
}

export default App
