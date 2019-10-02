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
