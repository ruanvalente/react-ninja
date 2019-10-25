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

# Problema ao duplicar a key.

Na aula anterior aprendemos como funciona a prop key, e com isso geramos um componente chamado `Square` onde passamos um `Array` com cores e com isso renderizamos 3 `Squares` com as cores red, blue e green.

Agora vamos ver o problema ao fazer duplicação dessa mesma key.

Quando fazemos a duplicamos a mesma key o React nos da um warning dizendo que a key foi duplicada e que a mesma deveria ser única !

E com isso o React junta os elementos que deveriam ser renderizados em um só, pois ele entende que o mesmo foi duplicado e não há necessidade de ser renderizado novamente.

Por isso é necessário que tenhamos uma key única quando formos iterar sobre algum elemento.

Ex:

```js
import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render() {
    return (
      <div className="container">
        {['red', 'blue', 'red'].map(squareColor => (
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

Neste exemplo temos uma chave duplicada, no caso `red`, com isso o React não irá renderizar pela segunda vez a chave `red`.

Pois ele entende que é o mesmo componente que está sendo renderizado novamente e por isso não renderiza.

Agora como fariamos para renderizar esse componente nesse caso ? Simples, o método `map` recebe 3 parâmetros que são:

> map(element, index, array)

E neste exemplo para que possamos renderizar novamente o a chave `red` podemos passar mais um parâmetro para o nosso `map` o `index` do nosso array.

E com isso usa o index com nossa `chave`.

```js
import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render() {
    return (
      <div className="container">
        {['red', 'blue', 'red'].map((squareColor, index) => (
          <Square key={index} color={squareColor} />
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

Pronto dessa forma será renderizado perfeitamente e com cada componente de forma única através do seu `index`.

# Eventos.

Agora nessa aula vamos falar um pouco sobre eventos e como eles funcionam dentro do React.

Segundo a documentação da MDN eventos são utilizados para notificar o código de novidades durante a navegação do usuário. Cada evento é representado por um objeto que é baseado na interface `Event`, e pode ter campos customizados adicionados e/ou funções usadas para obter informações adicionais sobre o que aconteceu. Eventos podem representar desde interações básicas do usuário (cliques, rolagem da página...)

Agora como o React lida com eventos ?

Ex:

```js
'use strict'

import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render() {
    return (
      <div className="container" onClick={e => console.log('click')}>
        {['#ffff00', '#1a8cff', '#40bf40', '#ffff00'].map(
          (squareColor, index) => (
            <Square key={index} color={squareColor} />
          )
        )}
      </div>
    )
  }
}

App.defaultProps = {
  courseName: 'React Ninja',
}

export default App
```

Como podemos ver passamos a nosso evento click usando `onClick` todo evento no React é seguido antes da palavra `onNomeDoEvento` com estilo camelCase.

[Para saber mais sobre eventos](https://pt-br.reactjs.org/docs/handling-events.html)

# A prop children.

`props.children` está disponível em todos os componentes. Ele contém o conteúdo entre as tags de abertura e fechamento de um componente.

Podemos imaginar o seguinte cenário, precisamos ter um componente genérico por exemplo um componente de botão.

Em uma aplicação temos diversos botões e com isso podemos ter diversos textos, tamanhos, cores e etc. Para isso precisamos de um componente genérico onde iremos usar a composição um assunto que iremos abortar um pouco mais a frente.

Ex:

```js
'use strict'

import React from 'react'

const Button = ({ children }) => <button>{children}</button>

export default Button
```

Componente criado agora vamos renderizar esse componente dentro do nosso `App`.

```js
'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Button>Meu botão</Button>
      </div>
    )
  }
}

export default App
```

Dessa forma ao invés de passarmos uma props para o nosso componente apenas abrimos e fechamos o nosso componente como uma tag HTML e colocamos o nosso texto dentro do nosso componente que através da prop `children` irá pegar este texto e renderizar em tela.

Com isso em mente vamos aprender um pouco sobre como funciona a componsição de componentes.

# Composição.

É quando podemos reunir várias funções em uma – onde a mesma recebe um número variado de funções por parâmetro, e dentro dela é usado o resultado de uma como entrada para outra.

Um exemplo simples seria uma função que faz a soma de dois parâmetros.

```js
const sum = (a, b) => a + b

sum(1, 2)
// 3
```

Simples não é ? Agora vejamos, vamos supor que precisamos `compor` está função, mediante aos dois parâmetros passados queremos fazer algo com o terceiro valor.

```js
sum(sum(1, 2), 3)

// 6
```

Temos como o resultado da nossa composição o valor `6`, mas o que aconteceu neste código ?

Primeiramente, sabendo o tipo de retorno da função `sum` no qual é um número, podemos passar novamente a nossa função `sum` como primeiro parâmetro.

Como seu retorno da função é somando com o segundo parâmetro da nossa função e com isso temos o valor de `6`.

Então resumidamente a ideia de composição é ter o resultado dos valores passados para retornar um terceiro valor.

Agora como isso se aplica dentro do React e com os nossos componentes ?

Poderiamos usar o exemplo do nosso componente de botão para que possamos criar um composição simples, usando JSX no nosso componente.

Ex:

```js
'use strict'

import React from 'react'
import Button from './button'

const LikeButton = () => <Button>Like</Button>

export default LikeButton
```

Com esse novo componente fazemos o processo básico sobre composição de componentes, onde usamos o nosso componente `Button` para retornar um novo componente `Button` que neste caso `LikeButton`.

Agora dentro do nosso `App` chamamos o nosso novo componente.

```js
'use strict'

import React, { Component } from 'react'
import LikeButton from './like-button'

class App extends Component {
  render() {
    return (
      <div className="container">
        <LikeButton />
      </div>
    )
  }
}

App.defaultProps = {
  courseName: 'React Ninja',
}

export default App
```

Com esse conceito podemos criar diversos componentes para a nossa aplicação, seguindo o conceito de composição.

Podemos ir além fazendo com que cada componente de botão possar ter o seu determinado evento.

Ex:

> button.js

```js
'use strict'
import React from 'react'

const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>{children}</button>
)

export default Button
```

> like-button.js

```js
'use strict'

import React from 'react'
import Button from './button'

const LikeButton = () => (
  <Button handleClick={() => console.log('Like Button')}>Like</Button>
)

export default LikeButton
```

> search-button.js

```js
'use strict'

import React from 'react'
import Button from './button'

const SearchButton = () => (
  <Button handleClick={() => console.log('Search Button')}>Search</Button>
)

export default SearchButton
```

Agora temos um novo componente chamado `SearchButton`, onde fazemos também o uso da composição, também neste exemplo passamos via props para o nosso componente `Button`, o evento `onClick`. E assim, de acordo com cada click em seu respectivo botão ocorrerá uma determinada função de callback.

# State

State dentro do React é um objeto de estado onde você armazena os valores de propriedades que pertence ao componente.

Quando o objeto de estado deste componente é alterado, o componente é renderizado novamente.

Nas versões antigas do React, para fazer manipulação do estado da nossa aplicação era necessário o uso de `class's` pois componentes do tipo função não tinham como manipular estado.

Agora nas versões mais novas do React temos a nova API `hooks`, que são a nova forma de manipular estados dentro da nossa aplicação usando `funções`.

Porém, no início do curso, ainda usamos syntax de `class` para manipulação de estado.

Ex:

```js
'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Texto',
    }
  }

  render() {
    return (
      <div className="container">
        <h2>{this.state.text}</h2>
      </div>
    )
  }
}

export default App
```

Dentro do nosso componente `App` temos um `estado` chamado `text`, no qual o seu valor iniciado é `Texto` e temos o acesso a esse estado usando `this.state.text`.

Até ai, nada de mais, fizemos algo que poderiamos ter feito normalmente, porém como poderiamos alterar o valor desse estado ?

Dentro do React segue um conceito de programação funcional que é chamado de `imutabilidade`, então não podemos alterar esse estado dessa forma:

Ex:

```js
'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Texto',
    }
  }

  render() {
    return (
      <div className="container">
        <h2>{(this.state.text = 'novo Valor')}</h2>
      </div>
    )
  }
}

export default App
```

Isso dentro do React não irá surtir efeito ! Por isso precisamos usar uma função que irá ser responsável por `setar um novo estado em nosso aplicação`, para isso iremos usar a função `setState`.

Ex:

```js
'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Texto',
    }
  }

  render() {
    return (
      <div
        className="container"
        onClick={() =>
          this.setState({
            text: 'Novo Texto',
          })
        }
      >
        <h2>{this.state.text}</h2>
      </div>
    )
  }
}

export default App
```

Neste exemplo alteramos o estado da nossa aplicação usando a função `onClick`, apartir do click no elemento será setado um `novo estado` em nossa aplicação, com o estado de `text` alterado para `Novo Texto` !

# Entendendo as Arrow functions.

As arrow functions, possuem uma sintaxe mais curta quando comparada a uma expressão de função _(function expression)_ e não tem seu próprio _this, arguments, super_ ou _new.target_. Estas expressões de funções são melhor aplicadas para funções que **não sejam métodos**, e elas **não podem ser usadas como construtoras** (constructors).

> Fonte: MDN.

Mas, para que possamos entender melhor o uso das arrows functions precisamos entender como funciona a declaração de uma função dentro do Javascript.

Ex:

```js
'use strict'

function sum(x, y) {
  return x + y
}

var sumTwo = function(x, y) {
  return x + y
}

console.log(sum(1, 2)) // 3
console.log(sumTwo(1, 2)) // 3
```

Neste exemplo temos as duas formar que declaramos uma assinatura de uma função.

A primeira forma consiste que a função tenha um nome que neste caso é `sum`, e não poderiamos escrever ela deforma anônima, o nome da função é obrigatório.

Porém, no segundo exemplo declaramos uma variável chamada `sumTwo` onde atribuímos uma função anônima. E com isso podemos invocar a função que passamos para essa variável apartir do seu nome como no exemplo.

Agora como ficaria estes exemplos usando arrow functions ?

Ex:

```js
'use strict'

var sumArrow = (x, y) => {
  return x + y
}

console.log(sumArrow(1, 2)) // 3
```

Desta forma temos o mesmo comportamente mas com algumas diferenças, a primeira é que quando usamos uma função arrow sempre usamos funções anônimas e não temos a palavra `function`.

A segunda, é que poderiamos deixar a nossa função ainda mais compacta, quando utilizamos as arrow functions se tivermos apenas um retorno como no exemplo, podemos omitir os chaves e o return.

Ex:

```js
var sumArrow = (x, y) => x + y

console.log(sumArrow(1, 2)) // 3
```

Dessa forma a arrow function entende que tudo que for passo após `=>` será um tipo de retorno válido.

E também se tivermos apenas um parâmetro podemos omitir os parênteses.

```js
var addOne = x => sumArrow(x, 1)

console.log(addOne(5)) // 6
```

Mas a grande vantagem de se usar as arrow functions são quando precisamos usar o escopo léxico.

No exemplo onde usamos as arrow functions para o evento de click dentro do nosso componente, se utilizarmos o modelo de function normal poderiamos ter um erro, por conta do `this`.

Pois quando utilizamos functions ao invés de arrow function o valor de `this` pode variar !

E teriamos o seguinte erro:

> Uncaught TypeError: Cannot read property 'setState' of null

Como o proprio erro diz, não conseguimos ler a propriedade setState de null, pois o this está sendo apontado para outro lugar.

Para resolver este problema ainda usando assinatura de function poderiamos criar uma variável que contenha o valor de this.

```js
var self = this
```

Ou ainda poderiamos fazer a injeção do this na nossa função usando a função `bind`

```js
'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Texto',
    }
  }

  render() {
    return (
      <div
        className="container"
        onClick={function() {
          this.setState({
            text: 'Novo Texto',
          })
        }.bind(this)}
      >
        <h2>{this.state.text}</h2>
      </div>
    )
  }
}

export default App
```

[Para saber mais sobre Arrow Functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

# Stateful vs Stateless.

Agora iremos entender o que é um componente Stateful e um componente Stateless, quando utilizar e porque utilizar.

### Stateful.

Usamos um componente Stateful quando precisamos manipular o estado da nossa aplicação, geralmente este tipo de componente tem o controle total do estado da nossa aplicação.

E dentro da nossa aplicação temos o nosso componente `App` que é um componente Stateful.

### Stateless.

Usamos um componente Stateless quando não temos a necessidade de fazer a manipulação de estado.

E dentro da nossa aplicação temos com exemplo o nosso componente `Button`.

> Dentro das versões mais antigas do React não era possível fazer manipulação de estado utilizando funções puras, apenas usando class's. Apenas com a chega dos `Hooks` apartir da versão `16.7.0` se tornou possível fazer manipulação de estado usando funções puras.

Para que possamos entender melhor este funcionamente vamos usar um exemplo. O exemplo em si é simples, iremos importar os nosso componentes `Button` e `Square`. Com isso vamos modificar a cor do nosso componente `Square` através do nosso componente `Button`.

E assim entender o fluxo de dados do React.

```js
'use strict'

import React, { Component } from 'react'

import Button from './button'
import Square from './square'

class App extends Component {
  constructor() {
    super()
    this.state = {
      color: 'green',
    }
  }

  render() {
    return (
      <div>
        <Square color={this.state.color} />
        {['red', 'green', 'blue'].map(color => (
          <Button key={color} handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))}
      </div>
    )
  }
}

export default App
```

Neste exemplo simples conseguimos ver como funciona o fluxo de dados dentro do React, pois definimos um estado inicial dentro da nossa aplicação e dentro do nosso componente pai temos os nosso componentes que serão manipulados. No casso os componentes `Button` e `Square`.

Dentro do React precisamos focar apenas no fluxo de dados e não na manipulação do DOM, pois em nenhum momento estamos preocupados em fazer uma seleção manual de elementos.

Esse processo quem faz é o React, onde apenas dizemos para ele que queremos que uma informação tenha um determinado estado e de acordo com o click do botão essa informação possa ser alterada através da função `setState`.

Que é basicamente o que fizemos neste exemplo.

Com isso precisamos entender alguns conceitos.

O primeiro é que no React sempre trabalhamos com imutabilidade, não podemos fazer atribuição de um valor de forma manual para um estado, sempre iremos utilizar a função setState para setar o estado da nossa aplicação.

O segundo é que a nossa função render sempre retorna uma função pura se for gerado efeitos colaterais, o React não irá conseguir trabalhar de forma correta.

A terceira é que toda modificação de propriedade não iremos fazer no próprio elemento, porque este elemento recebe essa mesma propriedade acima dele e para isso precisamos verificar quem está fazendo acima para fazermos a modificação.

# Lifecycle dos componentes.

Lifecycle dentro do React refere-se ao ciclo de vida de um componente.

Todo componente no React possui um ciclo de vida, dizemos que os componentes são montados em tela, podem sofrer alterações e no fim são desmontados. Assim, a cada passo do ciclo de vida de um componente conseguimos chamar métodos interceptando sua renderização tradicional ou captando informações desse ciclo. Esses métodos são definidos junto à classe do componente, o `render` é um deles.

Temos os seguintes fluxos de ciclo de vida para os nosso componentes são:

- Mounting / Unmounting - ( Montagem e Desmontagem )
- Updating - ( Atualização )

No fluxo de Mounting / Unmounting temos os métodos:

- **componentWillMount**:

  - Usamos esse método para fazer algo antes do nosso componente ser montado.

- **componentDidMount**:

  - Usamos esse método para fazer algo quando esse componente acabou de ser montado.

- **componentWillUnmount**:
  - Usamos esse método para fazer algo quando este componente será desmontado ou removido da tela.

No fluxo de Updating temos os métodos:

- **componentWillReceiveProps (nextProps)**:

  - Usamos esse método para fazer algo no momento que o componente vai receber novas propriedades e por parâmetro conseguimos pegar quais são essas novas propriedades.

- **shouldComponentUpdate (nextProps, nextState) => bool**:

  - Usamos esse método para ser executado quando o componente deve ou não ser atualizado. Recebendo por parâmetro as próximas propriedades e próximos estados da aplicação e no seu retorno deve ser um `boolean`. Neste método podemos fazer a comparação para verificar se o estado anterior está sendo modificado etc, e assim não precisando fazer a renderização do nosso componente novamente caso necessário.

- **componentWillUpdate (nextProps, nextState)**:

  - Usamos este método quando o nosso componente ainda vai ser atualizado.

- **componentDidUpdate (prevProps, prevState)**:
  - Usamos este método quando o nosso componente defato será atualizado, e ainda por meio dos parâmetros recebidos podemos pegar as props anteriores e o estado anterior desse componente.

# Lifecycle fluxo de montagem e desmontagem.

Nesta aula vamos ver na prática os métodos de Mounting / Unmounting do lifecycle do React.

### componentWillMount

Após do constructor o método seguinte executado é o `componentWillMount`, ainda antes do `render`.

Esse método é executado uma vez por componente e pode inclusive realizar alterações no estado:

Ex:

```js
'use strict'

import React, { Component } from 'react'

import Button from './button'
import Square from './square'

class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      color: 'green',
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  render() {
    console.log('render')
    return (
      <div>
        <Square color={this.state.color} />
        {['red', 'green', 'blue'].map(color => (
          <Button key={color} handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))}
      </div>
    )
  }
}

export default App
```

Neste exemplo será mostrado o log do `constructor` pois ele é executado assim que a nossa classe é instânciada e em seguida é executado o método `componentWillMount` que é executado antes do método `render`.

E por fim é executado o método `render`, renderizado o nosso componente.

### componentDidMount

Chamado após o render indica que a renderização inicial do nosso componente foi finalizada, é o local recomendado para fazer qualquer processo assíncrono ou de efeito colateral como chamadas à API, referenciar componentes criados no render ou inclusive alterar o estado, disparando uma nova atualização no fluxo do componente.

Ex:

```js
'use strict'

import React, { Component } from 'react'

import Button from './button'
import Square from './square'

class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      color: 'green',
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
    return (
      <div>
        <Square color={this.state.color} />
        {['red', 'green', 'blue'].map(color => (
          <Button key={color} handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))}
      </div>
    )
  }
}

export default App
```

### componentWillUnmount

Chamado antes de um componente ser desmontado, ótimo para cancelar `EventListeners` ou `setIntervals` que ainda possam estar sendo executados.

Ex:

```js
'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      showTimer: true,
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
    return (
      <div>
        {this.state.showTimer && <Timer />}
        <button
          onClick={() => {
            this.setState({
              showTimer: !this.state.showTimer,
            })
          }}
        >
          Show / hide timer
        </button>
      </div>
    )
  }
}

export default App
```

> timer.js

```js
'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    super()
    this.state = {
      time: 0,
    }
    this.value
  }

  componentDidMount() {
    this.value = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.value)
  }

  render() {
    return <div>Timer: {this.state.time}</div>
  }
}

export default Timer
```

Neste exemplo usamos o método `componentWillUnmount` para que possamos remover a execução do setInterval feita dentro do nosso componente `Timer`.

# Lifecycle fluxo de atualização (componentWillReceiveProps(nextProps)).

Executado automaticamente toda vez que alguma propriedade do componente for atualizada.

Ex:

> App.js

```js
'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      time: 0,
      showTimer: true,
    }
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
    return (
      <div>
        {<Timer time={this.state.time} />}
        <button
          onClick={() => {
            this.setState({
              time: this.state.time + 10,
            })
          }}
        >
          Change props
        </button>
      </div>
    )
  }
}

export default App
```

> Timer.js

```js
'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    super()
    this.state = {
      time: 0,
    }
    this.time
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.time)
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', this.state.time, nextProps)
  }

  render() {
    return <div>Timer: {this.state.time}</div>
  }
}

export default Timer
```

Neste exemplo definimos o nosso estado no caso `time` com o valor `0` por padrão, e quando alteramos esse estado através do click do botão usando o método `componentWillReceiveProps`, podemos ver a propriedade `time` que foi passada para o nosso componente que ela foi alterada.

E com isso podemos comparar o estado atual da nossa aplicação com `nextProps` que fará a atualização dessa nova propriedade.

# Lifecycle fluxo de atualização (shouldComponentUpdate(nextProps, nextState) => bool).

Método responsável por determinar se o componente deve realizar o `render` novamente ou não.

Ex:

```js
'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    super()
    this.state = {
      time: 0,
    }
    this.time
  }

  componentDidMount() {
    this.time = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.time)
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', this.state.time, nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', this.state, nextState)
    return true
  }

  render() {
    return <div>Timer: {this.state.time}</div>
  }
}

export default Timer
```

Usamos está função quando precisamos fazer uma verificação se determinada props/state precisa ou não ser renderizada novamente em nossa aplicação.

Ex:

```js
shouldComponentUpdate (nextProps, nextState) {
  console.log('shouldComponentUpdate', this.state, nextState)
  // return this.state.time !== nextState.time
  return this.props.time !== nextProps.time
}
```

Fazendo sempre verificações simples dentro desse método.

# Lifecycle fluxo de atualização (componentWillUpdate(nextProps, nextState)).

O `shouldComponentUpdate` liberou a atualização, o `componentWillUpdate` realiza a intermediação entre o `render` e dessa forma você poderá realizar alguma preparação antes de realizar o `render`. Esse método também recebe as `novas propriedades` e `estado`. Após esse método, o `render` é disparado novamente com as `alterações`.

Ex:

> timer.js

```js
componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate: timer', this.props, nextProps.time)
}
```

O fluxo da nossa aplicação fica da seguinte forma.

O construtor do app é chamado, o método componentWillMount é executado, assim é executado o render do app.

Após o render é executado o nosso método componentDidMount e caso ouver alterações o render do app é executado novamente.

Os métodos componentWillReceiveProps e componentWillUpdate só são executados quando fazemos a alteração em nosso estado. Onde ele recebe as novas propriedades e o novo estado da aplicação.

# Lifecycle fluxo de atualização (componentDidUpdate(prevPros, prevState)).

Executado após o novo `render` indicando que o componente foi atualizado com sucesso. Recebe as propriedades e estado antigos como parâmetro.

Ex:

> timer.js

```js
componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate: timer', this.props, prevProps)
}
```

Com isso podemos ter os valores antigos do nosso componentes ;)

# PropTypes.

`PropTypes` exporta uma variedade de validadores que podem ser usados para certificar que os dados que você recebe são válidos.

Ex:

```js
'use strict'
import React from 'react'

const Button = ({ children, handleClick }) => (
  <button onClick={handleClick}>{children}</button>
)

Button.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
}

export default Button
```

Neste exemplo estamos validando a propriedade `handleClick`, utilizando as `PropTypes` temos diversas propriedades para realizar a validação.

No exemplo usamos `func` e `isRequired`.

A propriedade `func` é para dizer que estamos dizendo que a propriedade que iremos fazer a validação será uma função e qualquer tipo que não seja uma função será gerado um warning dentro do nosso console.

A propriedade `isRequired` como nome já diz, a propriedade é requerida dentro da nossa aplicação e se a mesma não for passada será também gerado um warning dentro do console da aplicação.

> React.PropTypes foi movido para um pacote diferente desde a versão 15.5 do React. Para isso basta usar a biblioteca prop-types.

[Para saber mais sobre React.PropTypes.](https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html)

# Introdução à formulários no React.

Os elementos de formulário HTML funcionam de maneira um pouco diferente de outros elementos DOM no React, porque os elementos de formulário mantêm naturalmente algum estado interno.

Dentro do React temos um conceito chamado `“componentes controlados”` onde o estado mutável é normalmente mantido na propriedade `state` dos componentes e somente é atualizado apenas através do `setState()`.

Ex:

```js
import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      value: 0,
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={this.state.value}
        />
      </form>
    )
  }
}

export default Form
```

Neste exemplo temos um formulário simples de input porém não temos como alterar o seu valor, pois quando usamos a propriedade `value` que é diferente da propriedade value do HTML o React diz que está alterando uma entrada não controlada.

E para que possamos alterar o valor usamos a função `onChange` setando um novo estado na nossa aplicação através do `setState`.

Ex:

```js
import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={this.state.value}
          onChange={e => {
            console.log(e)
            this.setState({
              value: e.target.value,
            })
          }}
        />
      </form>
    )
  }
}

export default Form
```

Assim temos um componente controlado dentro da nossa aplicação e que é a recomendação da documentação do React.

# Formulários (checkbox e radio).

Assim como no componente de input os componentes de `checkbox` e `radio` também tem o mesmo comportamento, para que possamos fazer a alteração no estado o mesmo necessita ser um componente controlado.

```js
import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      checked: false,
    }
  }

  render() {
    return (
      <form>
        <label>Input: </label>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={this.state.value}
          onChange={e => {
            console.log(e)
            this.setState({
              value: e.target.value,
            })
          }}
        />
        <label>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={e =>
              this.setState({
                checked: !this.state.checked,
              })
            }
          />
          CheckBox
        </label>
        <input type="radio" name="rd" defaultChecked value="1" /> Radio 1
        <input type="radio" name="rd" value="2" /> Radio 2
      </form>
    )
  }
}

export default Form
```

A única diferença entre o componente de `checkbox` e `radio` para o padrão do HTML é que se não passarmos a propriedade `checkead` os mesmos se tornam componente não controlado.

E podemos passar o `defaultChecked` assim o valor do radio é true.

# Formulários (select e option).

Agora vamos ao exemplo usando `select` e `option`.

Ex:

```js
import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      value: '2',
    }
  }

  render() {
    return (
      <form>
        <select
          multiple
          value={['1', '2']}
          onChange={e =>
            this.setState({
              value: e.target.value,
            })
          }
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>
    )
  }
}

export default Form
```

# Formulários (textarea).

Seguindo com os estudos sobre formulários em React agora vamos ver como funciona o `textarea`.

Em HTML, o texto de um elemento `<textarea>` é definido por seus filhos:

```html
<textarea>
  Texto de exemplo.
</textarea>
```

Em React, em vez disso, o `<textarea>` usa um atributo `value`. Desta forma, um formulário usando um `<textarea>` pode ser escrito de forma muito semelhante a um formulário que usa um input de linha única.

Ex:

```js
import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      value: 'Texto',
    }
  }

  render() {
    return (
      <form>
        <textarea
          value={this.state.value}
          onChange={e =>
            this.setState({
              value: e.target.value,
            })
          }
        />
      </form>
    )
  }
}

export default Form
```

# Eventos para componentes de formulário.

Agora vamos ver quais são os principais eventos de formulários dentro do React.

Dentro do React existem alguns eventos para formulário:

- onChange
- onInput
- onSubmit

O onInput não iremos ver pois o seu funcionamente é igual ao `onChange` para elementos input, porém o React recomenda o uso da função `onChange`.

Iremos ver o evento `onSubmit`.

```js
import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          console.log('event', e.target)
        }}
        onChange={e => {
          console.log('nome', e.target.name)
          console.log('value', e.target.value)
        }}
      >
        <input type="name" name="name" />
        <input type="email" name="email" />
        <button type="submit">Enviar</button>
      </form>
    )
  }
}

export default Form
```

Neste exemplo usamos o evento `onSubmit` quando desejamos fazer algo antes de ser feito o submit do formulário da nossa aplicação.

# setState é assíncrono.

A função `setState()` agenda uma atualização para o objeto `state` de um componente. Quando o `state` muda, o componente responde renderizando novamente.

Porém dentro de eventos a função `setState` funciona de forma `assícrona`.

Por exemplo, vamos supor que queremos fazer um componente simples de checkbox que quando o `state` for alterado possamos mostrar uma div com uma mensagem simples ao usuário.

Ex:

```js
'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      checked: false,
      showContent: false,
    }
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={() => {
              this.setState({ checked: !this.state.checked })
              this.setState({ showContent: this.state.checked })
            }}
          />
          Mostrar mensagem
        </label>
        {this.state.showContent && (
          <div>
            <p>Olá, Ruan</p>
          </div>
        )}
      </div>
    )
  }
}

export default App
```

Dessa forma temos um comportamente um tanto estranho, quando clicamos no checkbox e alteramos o estado do nosso componente a mensagem não é exibida porém, quando retiramos o `checked` é que a mensagem é mostrada em tela.

Agora porque este comportamente ?

A função `setState()` é `assícrona` !! Para que possamos pegar as alterações feitas no estado da nossa aplicação poderiamos fazer da algumas formas, porém a forma mais simples e seguindo a documentação do React passando uma outra função como callback dentro do nosso `setState`.

Ex:

```js
'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      checked: false,
      showContent: false,
    }
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={() => {
              this.setState({ checked: !this.state.checked }, () => {
                this.setState({ showContent: this.state.checked })
              })
            }}
          />
          Mostrar mensagem
        </label>
        {this.state.showContent && (
          <div>
            <p>Olá, Ruan</p>
          </div>
        )}
      </div>
    )
  }
}

export default App
```

React intencionalmente “espera” até todos os componentes terem chamado `setState()` em seus manipuladores de evento antes de começar a renderizar novamente. Isso aumenta performance por evitar renderizações desnecessárias.

Com isso podemos fazer a atualização do nosso estado com base na atualização anterior.

[setState - React](https://pt-br.reactjs.org/docs/faq-state.html)

# Formas de fazer bind do this em eventos.

O `bind` resolve um problema causado pelo `contexto do JavaScript`, ele provê uma maneira de garantir que mesmo desacoplando uma função de um objeto o comportamento dele continue o mesmo, garantindo assim uma integridade do comportamento da função. Isso é interessante no caso de `programação funcional`, onde o ideal é termos funções puras, que possuem como parte de sua ideologia ser uma função sem efeito colateral.

Dentro do React podemos fazer bind de algumas formas:

- usando arrow functions
- usando bind na função diretamente.

Ex:

```js
'use strict'

import React, { Component } from 'react'

class App extends Component {
  teste () {
    console.log(this)
    console.log('click')
  }

  render () {
    return (
      <div onClick={this.teste}>
        <h1>App</h1>
      </div>
    )
  }
}

export default App
```

Dessa forma o `this` estará apontando para `undefined` e não para a nossa classe `App`.

Para resolver isso poderiamos ter feito usando Arrow Functions ou fazer o `bind do this` no nosso `construtor`.

Ex:

```js
'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.teste = this.teste.bind(this)
  }
  teste () {
    console.log(this)
    console.log('click')
  }

  render () {
    return (
      <div onClick={this.teste}>
        <h1>App</h1>
      </div>
    )
  }
}

export default App
```

Dessa forma o `this` estará apontando agora para a nossa classe `App`. 

[Para saber mais sobre o this](https://pt.stackoverflow.com/questions/127171/por-qu%C3%AA-%C3%A9-necess%C3%A1rio-usar-bind-quando-se-trabalha-com-es6-e-reactjs)
