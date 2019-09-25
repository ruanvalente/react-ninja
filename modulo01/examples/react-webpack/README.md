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

# Usando o sistema de módulo do ES2015 - ES6.

Vimos que estamos usando o sistema de módulos do CommonJS, porém se quisermos usar o sistemas de módulos do ES2015 ?

Para isso precisamos de algumas dependências, iremos usar o babel.

Como vimos lá atrás o babel serve para que possamos escrever um código mais atual usando Javascript e o babel irá fazer o papel de converter isso para um código mais antigo no qual os navegadores possam entender.

Para isso iremos instalar o babel juntamente com alguns presets.

Para mais informações sobre o [babel veja em](https://babeljs.io/)

```
npm install babel-core@6 babel-loader@6 babel-preset-es2015@6 babel-preset-stage-0@6 --save-dev
```

Com as dependências instaladas agora precisamos configurar o nosso arquivo **.babelrc** e adicionar as entradas para este arquivo.

```json
{
  "presets": ["es2015", "stage-0"]
}
```

Feito isso agora vamos atualizar o nosso **webpack.config.js** para que ele faça a utilização do babel para que toda vez que o nosso arquivo for alterado ele faça a atualização do nosso arquivo para ES5, para que assim o nosso navegador possa entender.

```js
'use strict'

const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel'
      }
    ]
  }
}
```

Agora adicionamos uma nova entrada dentro do nosso **webpack.config.js** chamada **module**.

Dentro dela passamos algumas configurações. Dentro de **loaders**
passamos um Array com 4 configurações: **test, exclude, include e loader**.

#### Test.

Essa configuração é para dizermos que todos os arquivos que terminam com **.js** sofreram essa regra que estamos passando.

E todas as regras são passadas via Regex.

#### Exclude.

Estamos dizendo que estamos excluindo a verificação da pasta **node_modules** e que queremos que essa regra não se aplique a ela.

#### Include.

Estamos dizendo que queremos que os arquivo que seram incluídos na regra seram da pasta **src**. Onde estaram os nossos componentes.

#### Loader.

E por fim estamos dizendo qual é o loader que iremos utilizar que será o babel.

Agora precisamos atualizar o nosso projeto para utilizar o padrão de import/export do ES2015.

Vamos abrir o nosso arquivo **src/app.js** e fazer a atualização.

```js
'use strict'

import React from 'react'

var Title = React.createClass({
  render: function() {
    return React.createElement('h1', null, 'Título')
  }
})

export default Title
```

Com a alteração feita precisamos alterar também o nosso **index.js**.

```js
'use strict'

import Title from './app'
import React from 'react'
import { render } from 'react-dom'

render(React.createElement(Title), document.querySelector('[data-js="app"]'))
```

Neste exemplo usamos o **import/export** do ES2015, onde basicamente estamos importando uma variável padrão com o nome passado após o import ou exportando também.

Porém podemos fazer o **import/export** nomeado onde dentro de **react-dom** há um método **render** e queremos importa-lo e neste caso para fazer a sua importação precisamos usar o mesmo nome.

Porém poderiamos dar outro nome usando **as** dentro do import.

```js
import { render as RENDER } from 'react-dom'
```

Isso significa que a função que importamos de dentro de **react-dom** chamada **render** foi nomeada agora para **RENDER** e **render** não faz mais parte do escopo do meu módulo.

Para saber mais sobre [es-modules](https://blog.da2k.com.br/2019/02/25/ecmascript-modules-modulos-nativos-no-javascript/)

# Configurando JSX no babel e sourcemaps no Webpack.

Agora precisamos fazer com que o babel entenda JSX nos nossos arquivos para que não venhamos estar mais usando o método **createClass()** do React.

Para isso precisamos instalar o preset do React na nossa aplicação.

```
npm install babel-preset-react@6 --save-dev
```

Com o preset instalado corretamente agora vamos configurar o nosso **.babel.rc** adicionando esse preset.

```json
{
  "presets": ["es2015", "stage-0", "react"]
}
```

Com o preset instalado e adicionado dentro do nosso **.babelrc**, o babel irá saber lidar com a syntax JSX dentro dos nossos arquivos.

Agora podemos atualizar os arquivos **src/app.js** e **index.js** para usarem JSX.

> app.js

```js
'use strict'

import React from 'react'

var Title = React.createClass({
  render: function() {
    return <h1>Título</h1>
  }
})

export default Title
```

> index.js

```js
'use strict'

import Title from './app'
import React from 'react'
import { render } from 'react-dom'

render(<Title />, document.querySelector('[data-js="app"]'))
```

Pronto, agora podemos escrever JSX e o babel irá fazer toda transpilação para que o nosso browser consiga entender.

Tudo funciona porém se notarmos vamos ver que o nosso bundle é algo ruim para se ler ou até quem sabe encontrar um bug.

Para isso iremos utilizar o sourcemaps !

Quando você tem um código minificado, e adiciona a ele uma referência a um sourcemap, o sourcemap faz uma varredura no arquivo, e gera todas as referências a número de linha, nomes de variáveis e funções, etc., para que você possa debugar no arquivo “desminificado”.

Vamos adicioar uma entrada de sourcemaps no **webpack.config.js**

```js
'use strict'

const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel'
      }
    ]
  }
}
```

#### Devtool.

A nova entrada devtool ela diz para o webpack para que quando for gerado os arquivos ele crie um sourcemap para aquele arquivo.

O sourcemap é basicamente um 'mapa' do nosso arquivo principal.

Podemos ver isso na aba source do nosso navegador. E com isso agora, toda vez que ocorrer um erro dentro da nossa aplicação será mostrado exatamente o nosso arquivo e não o bundle gerado.

# Configurando a nossa aplicação para usar o React Hot Loader.

O React Hot Loader, serve para que quando for feita a alteração em algum dos nossos componentes que a alteração seja refletida na nossa árvore de elementos do DOM, porém somente no elemento necessário, neste caso o que ouve a alteração.

Para isso precisamos instalar o módulo react-hot-loader ao nosso projeto.

```js
npm install react-hot-loader@3.0.0-beta.2 --save-dev
```

Com o nosso módulo instalado agora vamos configurar o nosso **webpack.config.js** para que quando ele venha fazer a leitura dos nossos arquivos ele possa fazer essa atualização utilizando o react-hot-loader.

```js
'use strict'

const path = require('path')
const webpack = require('webpack')
module.exports = {
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel'
      }
    ]
  }
}
```

Primeiro fazemos a importação do webpack, pois iremos utilizar um plugin para a nossa configuração.

Dentro de Entry adicionamos as seguintes entradas:

#### webpack-dev-server/client?http://localhost:3000.

Está entrada é para que seja apenas executado no cliente e na porta 3000, já que a porta padrão é 8080.

#### webpack/hot/only-dev-server.

Estamos dizendo que o hot reloader somente quando o webpack-dev-server estiver executando.

#### plugins.

Nessa entrada estamos usando o plugin **HotModuleReplacementPlugin()** que fará com que o webpack use o hot reload.

Agora precisamos atualizar o nosso **.babelrc** e adicionar o react-hot-loader.

```json
{
  "presets": ["es2015", "stage-0", "react"],
  "plugins": ["react-hot-loader/babel"]
}
```

Adicionamos agora uma nova linha de configuração chamada **plugins**, e com isso passamos também dentro de um Array o react-hot-loader/babel que já conta com o que é necessário para funcionar o hot loader no babel.

Agora precisamos criar uma arquivo **server.js** para rodar juntamente com o Nodejs, e criar também uma entrada chamada **start** dentro do nosso arquivo **package.json**.

> server.js

```js
'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(3000, err => {
  if (err) {
    return console.log(err)
  }
  console.log('Listening on http://localhost:3000')
})
```

Primeiro importamos os módulos necessários para o nosso server: webpack, WebpackDevServer(como construtor) e config.

O config é o nosso arquivo de configuração do webpack.

Usando o operador **new** criamos um novo **WebpackDevServer** e passamos o webpack como parâmetro para o nosso construtor e também a nossa configuração que nesse caso é o nosso arquivo config do webpack.

Com isso passamos um objeto com as seguintes configurações:

- publicPath

  - É onde definimos o nosso output.

- hot

  - Definimos que queremos utilizar o hot reloader.

- historyApiFallback

  - Definimos como true para saber qualquer tipo de erro dentro da nossa aplicação.

- stats
  - Definimos como true apenas para manter a coloração da saída do log.

Com isso dizemos onde queremos que o nosso servidor passe a ouvir, usando o método **listen**, passamos a porta e uma função com um parâmetro de erro, e verificammos se ouver erro é retornado um console.log com o erro, se não dizemos que a nossa aplicação está ouvindo na porta 3000.

> package.json

```json
{
  "scripts": {
    "start": "node server.js"
  },
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^6.4.1",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "react-hot-loader": "^3.0.0-beta.2",
    "webpack": "^1.15.0",
    "webpack-dev-server": "^1.16.5"
  },
  "dependencies": {
    "react": "^15.4.2",
    "react-dom": "^15.4.2"
  }
}
```

Agora adicionamos apenas uma entrada "scripts" dentro do nosso **package.json** chamando o nosso **serve.js** utilizando o node.

Agora dentro do terminal precisamos apenas executar o comando:

```
npm start

Listening on http://localhost:3000
Hash: b84a1d06a73582410c12
Version: webpack 1.15.0
```

E pronto o nosso server estará no ar :tada:
