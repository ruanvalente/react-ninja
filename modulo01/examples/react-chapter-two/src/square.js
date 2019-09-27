'use strict'
import React from 'react'

const Square = ({ color, handleClick }) => (
  <div
    style={{
      backgroundColor: color,
      height: '100px',
      width: '100px'
    }}
  />
)

Square.defaultProps = {
  color: '#333'
}

export default Square
