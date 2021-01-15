# JavaScript Core

Linguagem de programação que roda no Navegador do usuário (front-end).

Ao clicar em algum botão da página e aparecer uma janela, isso é o JavaScript. A alteração do site ou do aplicativo é feita conforme a interação do usuário.

Roda também no computador (back-end).

## O que podemos fazer com JavaScript?

Podemos criar aplicações web, mobile (React Native), desktop (Electron).

Dentre as empresas famosas que utilizam JavaScript, estão: Facebook (Instagram, WhatsApp), Google (Youtube, Gmail, Drive), Uber, Netflix e Tiktok.

99.99% dos sites na web usam JavaScript. É uma linguagem obrigatória para quem programa o front-end web.

## Evolução

A comunidade cresce cada vez mais e a linguagem está sempre evoluindo.

# Primeiros Passos

## Sintaxe

Essa palavra significa escrever textos de uma maneira correta. Toda linguagem tem sintaxe, seja idioma ou uma linguagem de programação.

Uma boa comunicação necessita de uma boa sintaxe. Cerca de 82% dos erros para iniciantes estão na sintaxe, ou seja, na maneira de não esxrever corretamente.

Por exemplo, se eu escrever "consolelog" e não "console.log", há um erro de sintaxe que vai fazer o computador entender que é uma função e não um objeto (console) para depois uma função (log).

O exemplo certo:

```js
console.log("Bem-vindos ao Discovery!");
```

**Precisamos ficar atentos à importância da sintaxe.**

## Maneiras de executar o JavaScript

1. Browser - o JavaScript já está pronto no navegador, já está rodando. Ao clicar em F12 no Chrome, por exemplo, é possível, na aba Console, escrever em JavaScript.

2. Codepen.io - Ambiente onde você pode escrever tanto código em JavaScript, quanto HTML e CSS.

3. Editor de código - Em Visual Studio Code, por exemplo. Tanto por tags "script" no HTML ou em arquivos com extensão ".js" (inserindo-o no HTML).

## Adicionando arquivos JS

Criamos um arquivo, como "script", com extensão .js e com o código em JavaScript. Inserimos esse arquivo JS dentro do HTML:

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Adicionando arquivo JS</title>
  </head>

  <body>
    <script src="./script.js"></script>
  </body>
</html>
```

## Comentários em JS

Para ignorar código em JavaScript ou comentá-lo, podemos usar "//" em caso de uma linha e "/\* \*/" para mais de uma linha/comentário de bloco.

# Tipos de dados

Para aprender uma linguagem nova, precisamos entender sua gramática, ou seja, os elementos da linguagem e suas combinações; escrever corretamente.

No caso do JavaScript, precisamos entender os tipos de dados e quais as combinações para, então, desenvolvermos nossa habilidade de desenvolver corretamente com JavaScript.

O vocabulário é o conjunto de termos e expressões da linguagem ou o agrupamento de palavras. Quanto mais você vai aprendendo os termos e expressões da linguagem, maior será sua fluência e maior será o seu vocabulário.

Então, precisamos, então:

- Saber como escrever;
- Saber os significados;
- Continuar aprendendo para crescer nosso vocabulário.

Neste módulo, o foco é conceito e escrita. Ao entender o conceito, olhar e entender como escreve, vamos depois para a prática.

Vamos aprender os tipos de dados mais utilizados na linguagem. (É possível aprender 80% de uma língua nova com cerca de 20% do vocabulário.)

## String

É uma cadeia de caracteres, por exemplo, "abc", "a" é seguindo de "b" que é seguido de "c". E, obviamente, essa cadeia forma textos.

Para utilizar strings, devo inserir o conteúdo dentro de uma dessas opções:

- "": aspas duplas;
- '': aspas simples;
- ``: template literals ou template strings.

**Quando usar cada uma delas?**

Por exemplo:

```JS
console.log("Angélica")
```

Se dentro desse texto eu vou colocar algo que levará aspas simples, então em volta será aspas duplas e vice-versa:

```JS
console.log("Angélica é 'web developer'")
```

```JS
console.log('Angélica é "web developer"')
```

As crases, posso utilizar com aspas duplas, aspas simples e permitem que eu faça multilinhas, além de inserir expressões de linguagem/valores de interpolação.

```JS
console.log(`"Quanto é 1 + 1?" 'R': ${1 + 1}`)
```

## Number

Numbers são tipos de dados identificadores de números.

Eles podem ser positivos ou negativos:

- Inteiros (ex: 33);
- Reais (ex: 12.5);
- NaN (not a number);
- Infinity (infinito).

**Entendendo o NaN**

Se eu divido, por exemplo, 12.5 por 12, o resultado é 1.041. Agora, se eu divido por uma string, por exemplo, 12.5 / "dividido por 2", ele não entende e por isso retorna "não é um número".

Mas se tentarmos 12.5 / "2", ele converte a string para número e consegue retornar o resultado.

**Entendendo o Infinity**

Posso igualar o valor 12.5 a Infinity, que vai retornar se é verdadeiro ou falso, se é igual a infinito.

```JS
console.log(12.5 === Infinity)
```

Nesse caso, o retorno é falso.

Importante notar que Infinity tem que ser escrito com "i" maiúsculo, se não dá erro de referência.

## Boolean

Bolean é um tipo de dado que só tem dois valores: verdadeiro (true) ou falso (false).

É muito usual porque sempre vamos encontrar verdadeiro/falso em lógica da programação. Por exemplo: vou fazer um café. Minha xícara está suja? Se for verdadeiro, vou limpar; se for falso, vou colocar o café na xícara.

## Undefined vs null

São dois tipos de dados que podem ser confundidos.

Undefined:

- É uma palavra-chave para dizer que algo é indefinido.

Null:

- É uma palava-chave para dizer que algo é nulo, ou seja, é diferente de indefinido por ser considerado como um objeto que não possui nada dentro.

## Object

É um tipo de dado estrutural, que cria/causa uma estrutura.

Todo objeto, seja no mundo real ou abstrato, possui **proriedades (atributos)** e **funcionalidades (métodos)**.

Para escrever um objeto em JavaScript, abrimos chaves, colocamos o nome da propriedade e, em seguida, seu valor:

```js
{
  propriedade: "valor",
}
```

Exemplo onde o objeto tem propriedades e funcionalidade "andar":

```js
{
  nome: "Angélica",
  idade: 30,
  andar: function(){
    console.log("andar")
  }
}
```

## Array

Os vetores (arrays) são tipos de dados estruturais e servem para criação de listas e agrupamento de dados.

Exemplo com dados de uma lista (de um array) de itens de supermercado:

```js
console.log(["Melancia", "Batata", "Melão", "Kiwi", "Uva"]);
```

## Conclusão

Conforme o ECMAScript standard, órgão que padroniza o JavaScript, existem 9 tipos de dados:

- Data types:

  - primitive / primitive value
  - structural
  - structural primitive

- Primitivos:

  - String
  - Number
  - Boolean
  - undefined
  - Symbol
  - BigInt

  Os primitivos não são objetos e **seus valores são imutáveis**.

  Ou seja, uma string "abc" é e só pode ser "abc", o que é diferente de "ABC", "cba" e assim por diante.

  - Estruturais:
  - Object
    - Array
    - Map
    - Set
    - Date
    - [...](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects)
  - Function

Como o objeto é um tipo estrutural, ele tem uma estrutura e, assim, recebe propriedades (atributos) e funcionalidades (métodos). Todo objeto tem algum tipo de atributo e funcionalidade.

- Primitivo Estrutural (Structural Root Primitive):
  - null

O null é o único que é primitivo e ao mesmo tempo estrutural porque está na categoria de objeto, apesar de ser um objeto vazio. Se tem algo dentro do objeto, ele deixa de ser null e se torna um objeto.

Toda estrutura do JavaScript faz mais sentido quando entendemos BEM o objeto, pois praticamente todos os valores que tivermos estarão "embrulhados" em um objeto para que possamos ter mais poder ao acessá-los.
