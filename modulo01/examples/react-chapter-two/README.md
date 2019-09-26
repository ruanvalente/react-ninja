# React Ninja Módulo 01 - Parte dois.

# Props.

Neste módulo iremos continuar com a estrutura já vista no módulo passado.

# O que são props ?

Props dentro react são como argumentos de função e atributos em HTML.

Para que possamos enviar uma props para um componente usamos a mesma syntax de atributos HTML.

Ex:

```js
'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Title name="Ruan Valente" />
      </div>
    )
  },
})

export default App
```

Neste exemplo, além do nosso componente **app** agora temos um novo componente chamado **Title**.

Por convenção os componentes são escritos com a primeira letra maiúscula, assim diferenciando das demais tags do HTML.

Então dentro da nosso componente **Title** passamos uma props chamada **name** com o valor **Ruan Valente** entre aspas.

Agora dentro do nosso componente **Title** podemos referenciar está props dentro do nosso componente, usando o objeto **this.props.nomeDaProp**.

Ex:

```js
'use strict'

import React from 'react'

const Title = React.createClass({
  render: function() {
    return <h1>Olá {this.props.name}</h1>
  },
})

export default Title
```

Perceba que para que possamos referenciar a nossa prop dentro do nosso componente, precisamos usar **{}** o par de chaves, para que assim possamos escrever códigos Javascript dentro do JSX.

E assim temos o nosso componente renderizado **Olá, Ruan Valente**, ou qualquer outro nome passado via props. :tada:
