# React + Webpack.

Neste submódulo do curso iremos aprender sobre como configurar o nosso ambiente
para desenvolvimento com o React usando a ferramenta webpack.

# O que é o Webpack.

O webpack é um module bundle de código aberto. O webpack utiliza modulos como
dependências e gera arquivos estáticos representando esses modulos. Ele usa as
dependências e gera um gráfico permitindo que os desenvolvedores usem uma abordagem
modular para seus app web.

O bundle pode ser usado a partir da linha de comando, ou pode ser configurado usando
um arquivo de configuração que é denominado _webpack.config.js_.

> Neste módulo do curso é apresentado o webpack na sua versão 1.

## Os nossos objetivos:

Dito a cima do que se trata o webpack, dentro do curso faremos o seguinte para
configurar o nosso ambiente.

- Instalar o webpack
- Gerar um arquivo final que será usado no HTML, em ES5.
- Subir um servidor para desenvolvimento.
- Utilizar o react hot loader para agilizar o desenvolvimento.

# Configuração básica do Webpack.

## Instalaçao das dependências do Webpack.

- Criar o package.json

  - O _package.json_ terá a lista das nossas dependências do nosso projeto.

- Instalar o webpack como dependência de desenvolvimento.
  - Instalamos como dependência de desenvolvimento em nosso projeto.

Podemos instalar usando o seguinte comando para a v1.

```
npm install --save-dev webpack@1
```

Com isso teremos o webpack instalado, podemos fazer a instalação do webpack de forma global.

```
npm instal -g webpack@1
```

Agora para continuar, precisamos criar um arquivo chamado _webpack.config.js_ que irá conter as configurações do webpack.

```
touch webpack.config.js
```

Com o arquivo criado agora iremos fazer a configuração para que o nosso arquivo possa ler e gerar o bundle.

```js
'use strict'

const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}
```

Primeiro usando a diretiva _'use strict'_ e definimos uma variável _path_ com o módulo path do node.

Depois exportamos esse modulo, e dentro da exportação temos algumas configurações.

#### Entry.

Entry, é onde vamos definir a entrada do nosso arquivo. Usando o módulo path e o método **join**, passamos o **\_\_dirname**, juntamente com o caminho do arquivo, que é **src**, **index**.

O **\_\_dirname** server para que possamos ter uma padrão de path para cada sistema operacional já que sistemas Unix e Linux a barra é diferente em sistemas Windows onde a barra é invertida **\\**.

#### Output.

O output é onde o nosso arquivo será gerado, e com isso usamos novamente o módulo path seguido do método _join_ juntamente com **\_\_dirname** para que o path seja padrão para qualquer sitemas operacional. E assim colocamos o nosso arquivo dentro da pasta **dist**.

#### Filename.

E por fim, podemos dar um nome ao nosso arquivo usando **filename** e passando o nome do nosso arquivo, que no caso se chama 'bundle.js'.

Agora só precisamos criar o nosso arquivo **index.js** dentro de **src**.

```
mkdir src
touch index.js
```

Agora dentro do arquivo index.js, podemos deixar um console.log apenas para teste para ver o nosso bundle funcionando.

> index.js

```js
console.log('Webpack está funcionado')
```

Agora precisamos gerar o bunde com o webpack.

```
webpack

Hash: 8d3b8c5cd6effbfb3362
Version: webpack 1.15.0
Time: 32ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.43 kB       0  [emitted]  main
   [0] ./src/index.js 41 bytes {0} [built]
```

Agora precisamos criar o nosso arquivo **index.html** e adicionar o bundle.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>React Webpack</title>
  </head>
  <body>
    <script src="dist/bundle.js"></script>
  </body>
</html>
```

Com isso se executarmos o index.html veremos o nosso bundle funcionando.

# Usando o server do webpack.

Agora iremos aprender como configurar o server do webpack.

Primeiro precisamos instalar a dependência responsável, que p **webpack-dev-server** dentro do nosso projeto.

```
npm install --save-dev webpack-dev-server@1
```

Agora com o nosso módulo instalado precisamos adicionar o **publicPath** no **webpack.config**

```js
'use strict'

const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  }
}
```

O publicPath é para que o webpack-dev-server fique assistindo as alterações do nossos arquivos. Esses arquivos não serão gerados fisicamente mas sim em memória.

Agora precisamos passar o caminho correto no index.html.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>React Webpack</title>
  </head>
  <body>
    <script src="/static/bundle.js"></script>
  </body>
</html>
```

E agora vamos subir o server de desenvolvimento.

```
webpack-dev-server
```

Esse comando irá servir um servidor dentro de http://localhost:8080 com os arquivos de _static_ que estão sendo gerados em memória pelo webpack-dev-server.

Porém dentro de um projeto que temos um arquivo para produção e outro para desenvolvimento, é comum termos essa separção e fazer o build final do projeto.

Porém como estamos aprendendo, podemos colocar para ser servidos os arquivos da pasta _dist_, assim o webpack-dev-server terá sempre os arquivos atualizados.

```js
'use strict'

const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  }
}
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>React Webpack</title>
  </head>
  <body>
    <script src="/dist/bundle.js"></script>
  </body>
</html>
```

# Modularizando uma aplicação.

Para começar a modularizar uma aplicação vamos criar um arquivo dentro de **src** chamado **app.js**.

```
touch src/app.js
```

Para podemos prosseguir precisamos entender um pouco como funciona o **require** e o **module.exports** do **CommonJS**.

Para exemplo iremos exportar um método chamado **sum** que irá fazer a soma de dois valores.

```js
'use strict'

function sum(value1, value2) {
  return value1 + value2
}

module.exports = sum
```

Dentro de app criamos uma função chamada _sum_ onde a mesma recebe dois parâmetros e retorna a soma desses dois parâmetros.

Agora dentro de **src/index.js** iremos importar essa função.

```js
'use strict'

var sum = require('./app')

console.log(sum(1, 3))
```

Com isso podemos subir a nossa aplicação e a nossa função **sum** terá sido executada dentro do nosso arquivo **index.js** retornando a soma dos parâmetros passados.

# Criando uma aplicação em React.

Agora para que possamos começar a criar a nossa aplicação com o React vamos instalar algumas dependências **React** e **ReactDOM**, ambas na versão 15.4

```
npm install --save react@15.4 react-dom@15.4
```

Feita instalção do React, agora vamos criar um componente em **src/app.js** ao invés da função **sum**, vamos criar e exportar esse componente.

```js
'use strict'

var React = require('react')
var Title = React.createClass({
  render: function() {
    return React.createElement('h1', null, 'Título')
  }
})

module.exports = Title
```

Componente criado, agora vamos exportar esse nosso componente para o nosso **index.js**.

```js
'use strict'

var Title = require('./app')
var React = require('react')
var ReactDOM = require('react-dom')

ReactDOM.render(
  React.createElement(Title),
  document.querySelector('[data-js="app"]')
)
```

Importamos o React e o ReactDOM para que possamos usar o método **render**, do
**ReactDOM** e o **createElement**, do **React**. Com isso passamos o nosso componente
**Title** e dizemos que queremos o nosso componente Title sendo renderizado dentro
de uma **div** cujo selecionamos usando o **querySelector** com seu atributo
**data-js="app"**
