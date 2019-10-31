# Jest na prática.

Jest é uma estrutura de teste de JavaScript com foco na simplicidade.
Ele trabalha com projetos usando: Babel, TypeScript, Node.js, React, Angular e Vue.js.

É bem completo, rápido e precisa de pouca configuração para usar.
Quando os testes não passam, fornece um contexto rico do motivo de ter falhado.

> [Para saber mais sobre o Jest](https://jestjs.io)

Para realizar a instalação podemos simplesmente fazer da seguinte forma:

```
npm install --save-dev jest-cli@15
```

> Neste caso estamos usando a versão vista no curso, porém poderiamos  apenas usando jest sem dizer a versão.

O jest não tem uma 'configuração' ele segue o padrão convention over configuration
isso faz com que possamos trabalhar com algums padrões estabelecidos pela ferramenta.

Para que o Jest encontre os nossos testes ele segue o seguinte padrão:

- Ele busca por arquivos que estejam  em um diretório chamado __test__
- Se esse diretório não existe ele busca por arquivos que terminam com:
`nomeDoArquivo.test.js` ou `nomeDoArquivo.spec.js`.

Para que possamos executar o Jest podemos utilizar uma entrada de script
dentro da nosso `package.json` ficando da seguinte forma.

```json
{
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest-cli": "^15.1.1"
  }
}
```

Dentro da nossa pasta node_modules temos um diretório chamado `.bin` onde
ficam todos os executáveis que podem ser executados apartir de uma chamada
de um `script` dentro do nosso package.json.

Com isso podemos executar o comando `npm test` que ira mostrar que ainda
não temos nenhum arquivo de teste.

```
npm test

> jest

No tests found
  2 files checked.
    testPathDirs: /home/ruan/Workspace/react-ninja/modulo02/examples/jest-in-practice - 2 matches
      testRegex: (/__tests__/.*|\.(test|spec))\.js$ - 0 matches
        testPathIgnorePatterns: /node_modules/ - 2 matches
```

Com isso vamos entender algumas funções globais do Jest usando o mesmo
exemplo do teste da função sum.

Vamos criar um arquivo chamado `sum.test.js` dentro do nosso diretório.

> touch sum.test.js

Vamos entender a função `ìt`, dentro do Jest.

A função `it` recebe uma descrição do seu teste e como segundo parâmetro
retorna uma função que dirá como este teste deve se comportar.

```js
'use strict'

it('Descrição de um teste', () => {})
```

```
> jest
>
>  PASS  ./sum.test.js
>    ✓ Decrição de um teste (3ms)
>
>    Test Summary
>     › Ran all tests.
>      › 1 test passed (1 total in 1 test suite, run time 0.895s)
```

Executando o nosso teste temos o resultado dizendo que o nosso teste passou
com uma saída que mostra cada detalhe do que aconteceu.
