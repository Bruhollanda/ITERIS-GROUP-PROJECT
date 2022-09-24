# ITERIS-GROUP-PROJECT


# Habilidades

  * Ler o estado de um componente e usá-lo para alterar o que exibimos no browser

  * Inicializar um componente, dando a ele um estado pré-definido

  * Atualizar o estado de um componente

  * Capturar eventos utilizando a sintaxe do React

  * Criar formulários utilizando sintaxe JSX com as tags: `input`, `textarea`, `select`, `form`, `checkbox`

  * Transmitir informações de componentes filhos para componentes pais via callbacks

---

# Entregáveis

## O que deverá ser desenvolvido

Neste projeto você vai desenvolver um jogo no estilo Super Trunfo! Ao utilizar essa aplicação uma pessoa usuária deverá ser capaz de:

  * Criar um baralho, com o tema livre;

  * Adicionar e remover uma carta do baralho;

  * Visualizar todas as cartas que foram adicionadas ao baralho;

  * Jogar com o baralho criado.

### Protótipo do projeto

Você pode acessar um protótipo no link abaixo:

https://www.figma.com/file/psAYBgwjQ1pQqBe3wJvljt/Tryunfo

## Desenvolvimento

Você deve desenvolver uma aplicação em React com manipulação de estados em classes. Essa aplicação simulará um jogo de **Super Trunfo**, desde a criação das cartas do seu baralho até a funcionalidade de jogar.

Na renderização das cartas, sua aplicação deverá possuir três filtros de listagem de cartas: filtro por **nome**, por **raridade** e por **Super Trunfo**. Os filtros **nome** e **raridade** são acumulativos. O filtro **Super Trunfo** funciona de forma independente.

O tema do seu baralho é **livre**, então explore a sua criatividade! Mas use seu bom senso para a criação do seu baralho. Lembre-se das normas de conduta e ética no Manual de Estudante.

---
# Observações técnicas

## Renderização condicional

Em alguns requisitos será necessária a utilização de renderização condicional. Você pode verificar a documentação do React [Renderização Condicional](https://pt-br.reactjs.org/docs/conditional-rendering.html).

Este comportamento é utilizado no React para renderizar, ou não, determinado componente de acordo com uma condição booleana.

No exemplo abaixo, o estado `isActiveButton` começa como `false`, e ao clicar no botão `Clique em mim!`, mudamos esse estado para `true`.
Na condição da renderização, quando o estado for `false`, renderizamos o paragrafo `Não está ativo!` e quando for `true`, renderizamos o paragrafo `Está ativo!`.

```js
import React from "react"

class Componente extends React.Component {
 constructor() {
  super();
  this.state = {
    isActiveButton: false,
  };
 }

  render() {
    const { isActiveButton } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({isActiveButton: true})}>Clique em mim!</button>
        {
          isActiveButton ? <p>Está ativo!</p> : <p>Não está ativo!</p>
        }
      </div>
    )
  }
}
```

No caso acima, temos duas possibilidades, ativo ou não, ou seja, duas renderizações. Mas se for de apenas uma renderização, como por exemplo, renderizar somente se o tamanho do array for maior do que 0, podemos utilizar o `&&`: 

```js
...
{
  array.length > 0 && <p>Array não vazio!</p>
}
...
```

---
# Instruções

## Antes de começar a desenvolver

1. Clone o repositório
  * `git clone git@github.com:Bruhollanda/ITERIS-GROUP-PROJECT.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd ITERIS-GROUP-PROJECT`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Verifique a versão do npm e do node:
    * `npm --version`
    * `node --version`
  * Inicialize o projeto:
    * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)

3. Crie uma branch a partir da branch `main`

  * Verifique que você está na branch `main`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `main`
    * Exemplo: `git checkout main`
  * Agora, crie uma branch onde você vai guardar os commits do seu projeto
    * Exemplo: `git checkout -b <nome-da-branch>`
---

## Durante o desenvolvimento

* `git commit` e `git push` periódicos

* Comandos utilizados com frequência:
  1. `git status` - _verifica e mostra o que está dentro e fora do stage_
  2. `git add` - _adicionararquivos ao stage do Git_
  3. `git commit` - _cria um commit com os arquivos que estão no stage do Git_
    * dica: para colocar a mensagem do commit direto na linha de comando: `git commit -m "sua mensagem aqui"`
  4. `git push -u origin nome-da-branch` - _envia o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch_
  5. `git push` - _envia o commit para o repositório remoto após o passo anterior_

---

# Informações sobre o Super Trunfo
O Super Trunfo é um jogo de cartas que ficou muito popular no Brasil entre as décadas de 80 e 90, mas que faz bastante sucesso até hoje. Suas regras são bastante simples, por isso ele é considerado um jogo fácil de jogar. Apesar de ter regras simples, cada baralho  de Super Trunfo pode ter um tema diferente, o que o torna um jogo bastante divertido.

Originalmente, o jogo de Super Trunfo é formado por um baralho de 32 cartas. Cada carta representa um item relacionado ao tema do jogo. Em cada carta também existe uma lista com características daquele item e cada característica possui um valor numérico. 

Para começar o jogo, as cartas devem ser embaralhadas e divididas igualmente para cada participante. Em cada rodada cada pessoa pega somente a primeira carta do seu monte. Na primeira rodada uma pessoa escolhe qual característica quer comparar com as cartas das outras pessoas que estão jogando. Ganha quem tiver o maior número nessa característica. A pessoa que ganhou a rodada recebe as cartas das outras pessoas e escolhe qual característica quer comparar na próxima rodada. O jogo termina quando alguma pessoa tiver todas as cartas do baralho.

Em cada baralho existe uma (e somente uma) carta Super Trunfo. Essa carta ganha de todas as outras cartas do baralho, independentemente dos valores das características.

O jogo de Super Trunfo pode ser feito com praticamente qualquer tema, mas tradicionalmente os mais comuns são: carros, países, cidades ou animais.

# Criando, lendo, atualizando e apagando informações
Quando estamos lidando com informações, temos 4 operações principais: __Create__ (criar), __Read__ (ler), __Update__ (atualizar) e __Delete__ (apagar). Com essas quatro operações, formamos o acrônimo CRUD. Esse acrônimo é um termo que será bastante utilizado daqui para frente na sua jornada como pessoa desenvolvedora.

Nesse projeto vamos começar a lidar um pouco mais com essas operações, mas não vamos fazer todas elas. Você precisará criar, ler e apagar informações, mas não precisará desenvolver a função de editar por enquanto. Não se preocupe, pois no futuro, iremos voltar a implementar essas operações, e nos próximos projetos você fará um CRUD completo.
