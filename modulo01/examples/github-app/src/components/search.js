'use strict'

import React from 'react'
import ajax from '@fdaciuk/ajax'

const Search = () => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite seu usuário no Github'
      onKeyUp={e => {
        const value = e.target.value
        const keyCode = e.which || e.keyCode
        const ENTER = 13

        if (keyCode === ENTER) {
          ajax()
            .get(`https://api.github.com/users/${value}`)
            .then(result => {
              console.log('Result:', result)
            })
        }
      }}
    />
  </div>
)

export default Search
