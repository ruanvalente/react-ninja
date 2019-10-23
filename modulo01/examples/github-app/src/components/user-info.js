'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img
      src='https://avatars3.githubusercontent.com/u/6674232?v=4'
      alt='User image'
    />
    <h1>
      <a href='https://github.com/ruanvalente'>Ruan Valente</a>
    </h1>

    <div className='repos-info'>
      <ul>
        <li>Repositórios: 10</li>
        <li>Seguidores: 11</li>
        <li>Seguindo: 12</li>
      </ul>
    </div>
  </div>
)

export default UserInfo
