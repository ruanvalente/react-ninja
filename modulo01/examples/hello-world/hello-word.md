# React Ninja Modulo 01 - Primeira parte.

## O que é o React ?

O React é uma biblioteca para criação de interfaces, isso significa que ele não é um framework e sim um lib.

Ele funciona como o V do MVC, permitindo criar seus próprios componentes. Em uma aplicação React, você deve quebrar os diferentes elementos dela em pequenos componentes reutilizáveis.

Podendo ser usado com qualquer outro framework em conjunto.

O React é usando principalmente para resolver problemas que envolvem muita manipualçao de DOM, onde o desenvolvedor se concentra em apenas nos dados da aplicação. O restante fica em cargo da lib.

### Alguns links:

- [Documentação - ReactJS](https://reactjs.org/)
- [Começando com o React - Willian Justen](https://willianjusten.com.br/comecando-com-react/)

## Alguns exemplos de como começar com o React v15.1.0 - versão do curso.

Podemos começar escrevendo nossos componentes em React usando ES5.

Mas para isso precisamos de alguns links, podemos usar um cdn que irá ter o react, react-dom e o babel.

O babel fará a leitura do nosso código para que o browser entenda o nosso código em JSX.

Ex:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>React Ninja</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.js"></script>
    <script type="text/babel"></script>
  </body>
</html>
```

Agora com isso podemos criar nosso primeiros componentes.

## Componentes em React e componentes aninhados.

Podemos criar os nosso componentes usando ES5 da seguinte maneira.

Ex:

```js
var h1 = React.createElement('h1', null, 'Texto do meu h1 em React')
```

Com isso temos o nosso primeiro componente criado, porém precisamos entender algumas coisas.

Primeiro, a função _React.createElement(element, prop, children)_, ela recebe o elemento, a propriedade e os filhos daquele elemento.

Agora com isso em mente precisamos renderizar isso em algum lugar, para isso temos a nossa _div_ com o id _app_. Onde iremos dizer para o React que iremos renderizar os nossos elementos.

Para isso precisamos da nossa função chamada _ReactDOM_, com ela podemos chamar um método chamado _render_ que fará a renderização do elemento passado para essa função.

Ex:

```js
ReactDOM.render(h1, document.querySelector('#app'))
```

A função _ReactDOM.render(element, target)_ recebe o elemento a ser renderizado e a onde o mesmo será renderizado.

Com isso podemos criar quandos componentes forem necessários.

## Componentes aninhados.

Podemos aninhar os nossos componentes.

Ex:

```js
var exemple = React.createElement(
  'h2',
  null,
  React.createElement('span', null, 'Texto do Span'),
  'Texto do H2'
)
```

Pode parecer um pouco confuso mas agora temos dentro do _h2_ um _span_ com o texto _Texto do span_.

Para aninhar mais elementos poderiamos passar um array após a definição de propriedade que por hora é dada com _null_ assim teriamos N elementos aninhados.

Ex:

```js
var exemple2 = React.createElement('h2', null, [
  React.createElement('span', null, 'Texto do span 1'),
  React.createElement('span', null, 'Texto do span 2')
])
```

Com isso temos dois _span's_ dentro do nosso h2. E com isso poderiamos ter mais e mais componentes.

Porém percebemos que isso não é uma boa tática, pois se tivermos vários componentes em uma aplicação isso ira virar uma tremenda zoa ! Para isso temos o JSX.

## JSX.

JSX é uma extensão da sintaxe do JavaScript que é Javascript mais XML.

Tem uma semelhança com as tags HTML, porém não se engane, isso é Javascript :tada: !

Para que possamos escrever um código mais limpo foi criado o JSX, para podemos usar em nosso exemplo precisamos do babel que fará a leitura do nosso código para que o nosso browser consigar entender.

Porém agora vamos criar componentes usando _React.createClass({func, jsx})_

A função _React.createClass({func, jsx})_ recebe uma função chamada _render_ e que por sua vez o seu retorno deve ser sempre um elemento React.
Ex:

```js
var Title = React.createClass({
  render: function() {
    return <h1>Hello World</h1>
  }
})

ReactDOM.render(<Title />, document.querySelector('#app'))
```

Com isso temos o nosso componente de título, o retorno da função não é um HTML e sim um JSX.

Precisamos também entender alguns detalhes de como JSX funciona.

Também para que possamos retornar um componente dentro do outro de forma aninhada precisamos envolvê-los dentro de _()_.

Para que possamos renderizar um elemento um abaixo do outro precisamos envolvê-los
pro uma tag que englobe os demais como uma _div_.

Ex:

```js
var Example = React.createClass({
  render: function() {
    return (
      <h1>
        <span>Span</spa>
      </h1>
    )
  }
})

var Example2 = React.createClass({
  render: function() {
    return (
      <div>
        <h1>H1</h1>
        <span>Span</spa>
      </div>
    )
  }
})
```
