'use strict'

import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <div className='search'>
          <input type='search' placeholder='Digite seu usuário no Github' />
        </div>

        <div className='user-info'>
          <img
            src='https://avatars3.githubusercontent.com/u/6674232?v=4'
            alt='User image'
          />
          <h1>
            <a href='https://github.com/ruanvalente'>Ruan Valente</a>
          </h1>
        </div>

        <div className='repos-info'>
          <ul>
            <li>- Repositórios: 10</li>
            <li>- Seguidores: 11</li>
            <li>- Seguindo: 12</li>
          </ul>
        </div>

        <div className='actions'>
          <button>Ver repositórios</button>
          <button>Ver favoritos</button>
        </div>

        <div className='repos'>
          <h2>Repositórios:</h2>
          <ul>
            <li>
              <a href='#'>Nome do respositório</a>
              <a href='#'>Nome do respositório</a>
            </li>
          </ul>
        </div>

        <div className='starred'>
          <h2>Favoritos:</h2>
          <ul>
            <li>
              <a href='#'>Nome do respositório</a>
              <a href='#'>Nome do respositório</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App
