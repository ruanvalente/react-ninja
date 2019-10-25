'use strict'

import React, { PropTypes } from 'react'

const Search = ({ handleSearch, isDisable }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite seu usuário no Github'
      onKeyUp={handleSearch}
      disabled={isDisable}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
