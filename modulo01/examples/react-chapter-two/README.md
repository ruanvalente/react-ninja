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

# Renderizando componentes com funções puras.

Agora vamos ver algumas outras formas de renderização de componentes, existem 3 formas para isso:

- React.createClass();
- Funções Puras;
- Classes (ES2015).

O React.createClass, foi o que vimos até aqui, é era usado para criar componentes usando ES5, porém agora vamos ver como podemos trabalhar com ES6.

# O que são funções puras ?

Uma função para ser pura basicamente ela sempre precisa retornar o mesmo valor, sempre que passarmos os mesmos parâmetros.

Ex:

> função pura

```js
function pureFunction(a, b) {
  return a + b
}

pureFunction(1, 2)
```

Está função é pura, pois mesmo que fossemos chamar essa função inúmeras vezes com os mesmos parâmetros ela sempre irá continuar devolvendo o mesmo valor, que neste caso é 3.

Agora vamos ver um exemplo de função impura.

Ex:

> função impura.

```js
var obj = { a: 1, b: 2 }

function impureFunction(a, b) {
  obj.a = a + b
  return a + b
}

impureFunction(1, 2)
```

Você pode perceber que sempre que eu chamar essa função era irá modificar o valor do objeto que criamos a cima dela, apesar de está sempre retornando o mesmo valor.

A ideia é que no React é trabalhado diversos conceitos de programação funcional.

[Aqui tem um artigo muito bom sobre o assunto](https://medium.com/tableless/entendendo-programa%C3%A7%C3%A3o-funcional-em-javascript-de-uma-vez-c676489be08b)

Voltando, então dentro do React o método render deve ser puro, onde o mesmo não deve fazer nenhum tipo de modificação externa.

Para que o nosso componente possa ser um componente de função usamos a seguinte syntax.

Ex:

```js
import React from 'react'

const Title = () => {
  return <h1>Olá</h1>
}
```

Com isso temos a nossa função pura, porém estamos usando as Arrows Functions.

> Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors). _MDN_

Com isso ainda podemos deixar ainda mais curta a nossa função, pois já que não estamos retornando nada além do Olá, poderiamos omitir as chaves e remover o return e ter uma syntax mais simples.

```js
import React from 'react'

const Title = () => <h1>Olá</h1>
```

Dessa forma a Arrow Function irá entender que `<h1>Olá</h1>` é o retorno da função.

Agora como podemos utilizar as props dentro das Arrow Functions ?

Simples, as Arrow Functions recebem por parâmetro um objeto chamado props e podemos acessá-lo dentro do nosso componente, porém sem o uso do **this** já que como foi dito as Arrow Functions não possuim **this** !

Ex:

```js
import React from 'react'

const Title = props => <h1>Olá, {props.name}</h1>
```

Dessa forma acessamos a nossa prop name e ainda podemos usar a shorthand notation e as backtick.

```js
import React from 'react'

const Title = ({name, lastName}) => (
  <h1>Olá {`${name} ${lastName}`</h1>
)
```

Utilizamos o shorthand notation para as propriedades passadas para os nossos componentes, assim não precisamos ficar acessando via `props.nomeDaPropriedade`.

Utilizamos também as `backtick` as crazes para que dentro da String podemos interpolar as nossas props criadas usando a syntax `${prop} ${prop2}`.

E por fim podemos utilizar o `getDefaultProps` com um método static de Title.

Ex:

```js
'use strict'

import React from 'react'

const Title = ({ name, lastName }) => {
  return <h1>Olá {`${name} ${lastName}`}</h1>
}

Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'Sem sobrenome',
}

export default Title
```

O código fica ainda mais simples :smile:

[Para saber mais sobre as Arrow Functions](https://blog.da2k.com.br/2019/01/07/javascript-tudo-sobre-arrow-functions/)

# Renderizando componentes com classes do ES62015.

Já vimos em aulas passadas como renderizar componentes dentro do React usando:

- React.createClass();
- Funções Puras

E agora vamos ver como o React renderiza componentes usando classes(ES62015).

Para este exemplo, iremos utilizar essa syntax de classe no nosso componente `app.js`, onde mais na frente fará mais sentindo o porque da utilização da syntax de class.

```js
import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Title name="Ruan" lastName="Valente" />
      </div>
    )
  }
}

export default App
```

Basicamente é dessa forma que temos a escrita de um componente usando a syntax de classe do ES6.

Extendemos o nosso `App` de `Component` para que assim possamos criar o nosso componente neste formato de classe. Porém, o que acontece é basicamente a mesma coisa quando usamos o `React.createClass`.

Agora como fica a escrita do método `defaultProps` ?

Da mesma forma como fizemos em funções podemos definir o defaultProps como um método static da nossa class.

```js
import React, { Component } from 'react'
import Title from './title'

class App extends Component {
  render() {
    return (
      <div clasName="container">
        <h2>{this.props.courseName}</h2>
        <Title />
      </div>
    )
  }
}

App.defaultProps = {
  courseName: 'React Ninja',
}

export default App
```

O acesso as nossas props utilizando classe é através do `this`.

# Conhecnedo a prop key.

A prop key dentro React é um atributo de string especial que você precisa incluir quando estiver criando arrays de elementos. As keys ajudam o React a identificar quais items foram alterados, quais foram adicionados, ou quais foram removidos. As keys devem ser dadas a elementos em um array para dar a estes elementos uma identidade estável.

As keys precisam ser únicas entre os elementos de um mesmo array. Eles não precisam ser exclusivos em toda a aplicação ou até mesmo em um único componente.

Vamos supor que queremos criar um componente chamado `Square`, esse componente apenas renderiza um quadrado em tela conforme determinada cor passada para o componente via props.
Ex:

```js
import React from 'react'

const Square = ({ color }) => (
  <div
    styles={{
      height: '100px',
      width: '100px',
      backgroundColor: color,
    }}
  ></div>
)

Square.defaultProps = {
  color: '#333',
}

export default Square
```

Agora dentro do nosso `App.js` importamos o nosso novo componente.

```js
import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Square />
      </div>
    )
  }
}

export default App
```

Pronto, agora será renderizado em nossa tela o nosso componente `Square` com base na cor padrão definida no método static do nosso componente.

Porém e se quisermos renderizar diversas cores dentro do nosso componente ? Sabemos que podemos usar uma `{expression}` expressão dentro do nosso `JSX` com isso podemos passar um `Array` com as cores que queremos que sejam renderizadas em nosso componente.

Ex:

```js
import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render() {
    return (
      <div className="container">
        {['red', 'blue', 'green'].map(squareColor => (
          <Square color={squareColor} />
        ))}
      </div>
    )
  }
}

App.defaultProps = {
  color: '#333',
}

export default App
```

Usando o `map` para pecorrer o nosso Array, com isso podemos usar dentro do nosso componente `Square` o valor pecorrido dentro do nosso Array usando o `squareColor`.

Porém percebemos um `Warning` em nossa aplicação.

> Each child in an array or iterator should have a unique "key" prop. Check the render method of `App`. See https://fb.me/react-warning-keys for more information.

Como foi dito a cima precisamos sempre passar para o nosso componente quando ouver Array's a prop key, que irá dizer para o React a identificar quais items foram alterados, quais foram adicionados, ou quais foram removidos.

Ex:

```js
import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render() {
    return (
      <div className="container">
        {['red', 'blue', 'green'].map(squareColor => (
          <Square key={squareColor} color={squareColor} />
        ))}
      </div>
    )
  }
}

App.defaultProps = {
  color: '#333',
}

export default App
```
