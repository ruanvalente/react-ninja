'use strict'

import React from 'react'

const Title = ({ name, lastName }) => {
  return <h1>Olá {`${name} ${lastName}`}</h1>
}
// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       skils: ['Javascript']
//     }
//   },

//   render: function () {
//     return <h1>Olá {this.props.name + ' Skils: ' + this.props.skils}</h1>
//   }
// })

export default Title
