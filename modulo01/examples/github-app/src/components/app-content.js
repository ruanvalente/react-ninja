'use strict'

import React from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = () => (
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

export default AppContent
