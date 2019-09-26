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

# Atributos do HTML.

Quando precisamos passar para um componente um atributo HTML, podemos passar da forma comum.

Porém alguns atributos temos que passar de forma especifica.

Por exemplo, o atributo **class**, já que estamos trabalhando com Javascript, não podemos utilizar uma palavra reservada da linguagem, porém para esses casos utilizamos o atributo **className**, que no final o React irá renderizar como um atributo **class** normal de css.

Ex:

```js
'use strict'

import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Title name="Ruan Valente" />
      </div>
    )
  },
})

export default Title
```

Outro atributo é o **for**. Dentro da tag **label** usamos o **for** porém sabemos que o for é uma palavra reservada dentro da linguagem Javascript.

Para que possamos usar o for do HTML normalmente podemos usar o **htmlFor**, e assim o React irá renderizar da forma correta, como atributo normal do HTML.

O mesmo serve para os atributos aria. Sempre usando o camelCase.

Ex:

```js
'use strict'

import React from 'react'
import Title from './title'

const Title = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Title name="Ruan Valente" />
        <label htmlFor="input">Input</label>
        <input type="text" id="input" aria-hidden={true} />
      </div>
    )
  },
})

export default Title
```

# getDefaultProps.

Vamos imaginar a seguinte situação, fizemos com que a nossa props chamada **name** fosse renderizada normalmente, porém e si neste não fosse passado o valor nenhum para a nossa props ?

Neste caso não seria renderizado nada, porém poderiamos ter um valor padrão para renderizar o valor da nossa props, fazemos isso usando o método **getDefaultProps**.

Ex:

```js
'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'Desconhecido',
    }
  },

  render: function() {
    return <h1>Olá, {this.props.name}</h1>
  },
})

export default Title
```

O método **getDefaultProps**, que dentro da função o mesmo retorna um **objeto** com as propriedades **default** que forem necessárias.

Então neste exemplo se não tivermos nenhuma prop passada, a prop default será renderizada no lugar, mostrando o valor neste caso de 'Desconhecido'.

# Passando outros tipos de dados via props.

Agora vamos ver como passamos outros tipos de dados via props

Para que possamos passar qualquer tipo de dado via props podemos passar de duas maneiras.

A primeira é usando String, como já vimos nas aulas passadas e a outra forma é via expressão !

Uma expressão dentro Javascript dentro do JSX podemos passar da seguinte maneira:

```
prop={expression}
```

Dessa forma temos a nossa expressão dentro do JSX sendo passada via props para o nosso componente.

Ex:

```js
'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'Desconhecido',
      skils: ['Javascript'],
    }
  },

  render: function() {
    return <h1>{this.props.name + ' ' + this.props.skils}</h1>
  },
})

export default Title
```

Com isso temos uma defaultProps chamada skil que é um Array, sendo passado para o nosso componente Title.
