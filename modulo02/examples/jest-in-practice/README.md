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

> Neste caso estamos usando a versão vista no curso, porém poderiamos apenas usando jest sem dizer a versão.

O jest não tem uma 'configuração' ele segue o padrão convention over configuration
isso faz com que possamos trabalhar com algums padrões estabelecidos pela ferramenta.

Para que o Jest encontre os nossos testes ele segue o seguinte padrão:

- Ele busca por arquivos que estejam em um diretório chamado **test**
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

# Jest na prática - Conhecendo as funções para teste e asserção.

Na aula anterior tivemos o primeiro contato com o Jest e alguma das suas
funções.

Agora vamos ver outras funções que podemos utilizar dentro dos nossos testes
uma delas é a função `test`. Assim como a função `it`, a função teste
funciona da mesma forma.

Porém iremos continuar a usar `it` por ser um padrão entre outros frameworks.

#### describe()

A função `describe('description', fn)` cria um escopo para os nossos testes.

Vamos supor que temos em nossa aplicação um módulo e queremos fazer diversos
testes neste módulo de forma separada.

A mesma recebe uma descrição e como segundo parâmetro uma função e dentro
do retorno dessa função podemos escrever os nossos testes.

Ex:

```js
'use strict'

describe('# ESCOPO DA FUNÇÃO', () => {
  it('Decrição de um teste', () => {})

  it('Descrição de um segundo teste', () => {})
})
```

```
> jest

 PASS  ./sum.test.js
    # ESCOPO DA FUNÇÃO
        ✓ Decrição de um teste (2ms)
        ✓ Descrição de um segundo teste
Test Summary
› Ran all tests
› 2 tests passed (2 total in 1 test suite, run time 0.947s)
```

Com isso temos o mesmo resultado de antes, porém agora podemos fazer testes
utilizando o escopo que criamos com a função `describe`.

Agora vamos ver como funciona as ferramentas de asserção dentro do Jest.

Vimos nas aulas anteriores que poderiamos usar o `console.assert(bool, message)`
e com isso poderiamos ter um retorno do nossos testes.

Se a expressão booleana retornar false, é mostrado um erro de asserção e
com isso nosso teste terá falhado. Se for true o nosso teste passa e nenhuma
menssagem será mostrada no console, assim dizendo que o nosso teste foi aceito.

```js
console.assert(1 === 2, 'O número é igual a 1') // false
console.assert(1 === 1, 'O número é igual a 1') // true
```

Podemos usar o console.asssert dentro do Jest, porém dentro do Jest há uma
interface chamada `expect` para realizar testes de assserção.

Ex:

```
> jest

 FAIL  ./sum.test.js
  ✕ 1 é igual a 1 (5ms)

  ● 1 é igual a 1

    expect(received).toBe(expected)

    Expected value to be (using ===):
      2
    Received:
      1

      at Object.<anonymous> (sum.test.js:4:13)
      at processTicksAndRejections (internal/process/task_queues.js:93:5)

Test Summary
 › Ran all tests.
 › 1 test failed, 0 tests passed (1 total in 1 test suite, run time 0.988s)
```

Usando a interface estilo `BDD` que é uma forma mais humanamente legível para
escrita de testes.

Agora entendo um pouco do que foi mostrado no erro temos a seguinte menssagem:

O Jest diz que ele estava esperando um valor no caso 1 porém ele recebeu 2.

E mais abaixo ele continua a mostrar onde ocorreu o erro, qual arquivo e linha
dessa forma temos algo muito simples de ler e entender na hora da escrita e resolução
dos nossos testes.
