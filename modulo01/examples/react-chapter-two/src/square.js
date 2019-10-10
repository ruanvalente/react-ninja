'use strict'
import React from 'react'

const Square = ({ color }) => (
  <div
    style={{
      backgroundColor: color,
      height: '100px',
      width: '100px'
    }}
  />
)

Square.defaultProps = {
  color: '#000'
}

export default Square
