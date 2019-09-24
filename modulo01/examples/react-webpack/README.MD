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
