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

# Variáveis

Se você quer guardar coisas em seu armário, ele precisa ter espaço. Se não, é preciso retirar algumas coisas para que você possa ter espaço para as novas que quer colocar.

Na programação, as variáveis funcionam mais ou menos desse jeito. O armário é a memória do computador, que tem que ter espaço (variável) para receber os tipos de dados (as coisas que você gostaria de guardar no armário).

As variáveis:

- São nomes simbólicos para receber algum valor;
- São atalhos de código;
- Podem ser chamadas de identificadores.

## Conhecendo as variáveis

**Palavras reservadas**

- var
- let
- const

São as três palavras reservadas para criar uma variável e cada uma tem um comportamento diferente.

Enquanto no _var_ e no _let_ você consegue reatribuir valores, na const isso não é possível.

## Tipos dinâmicos

O JavaScript é uma linguagem fracamente tipada e dinâmica; as variáveis não precisam ter um tipo previamente definido e podemos mudar o seu conteúdo.

Em algumas linguagens de programação nós precisamos definir o tipo para criar a variável e depois atribuir um valor para a mesma. Vejamos a diferença:

```js
//JavaScript
let clima = "Quente";
```

```ts
//TypeScript
let clima: String = "Quente";
```

Acima significa que "clima" é e sempre será uma string, ou seja, é uma variável tipada e estática.

Para eu verificar o tipo de uma variável definida em JavaScript, posso utilizar "typeof":

```js
//JavaScript
let clima = "Quente";
console.log(typeof clima); // string
```

## Scope e var

Escopo determina a visibilidade de alguma variável no JavaScript.

Um _block statement_ significa declaração de bloco:

```js
//vamos iniciar um bloco
{
  //aqui dentro é um bloco e posso colocar qualquer código.
} //aqui fechamos o bloco
```

O bloco também criará um novo escopo que é chamado de "block-scoped".

**var**

O var é global, local e pode funcionar fora de um escopo de bloco.

Global é tudo que está executando na aplicação.

Local é o que somente existe dentro de um escopo.

Dentro das chaves temos o escopo local. Já tudo que está no bloco de código é o escopo global.

```js
//erro de referência porque x não foi declarado
console.log("> existe x antes do bloco? ", x);
{
}
```

```js
//x existe antes do bloco
var x = 0;
console.log("> existe x antes do bloco? ", x);
{
}
```

```js
// retorno é undefined: x existe, mas não tem valor definido para ele
console.log("> existe x antes do bloco? ", x);
{
  var x = 0;
}
```

Por que acontece "undefined" acima?

Porque o código JavaScript vem lendo de cima para baixo, linha a linha. Apesar de _x_ só começar a ser declarado depois do _console.log_, o JavaScript tem um conceito muito interessante em relação à _var_ que é levá-la para o topo do código, como se fosse isso:

```js
// retorno é undefined
var x
console.log("> existe x antes do bloco? ", x);
{
  = 0;
}
```

Como _var_ é global, o JavaScript "puxa" de dentro do bloco e declara lá em cima, sem o desenvolvedor conseguir ver, em um conceito chamado de **hoisting** (elevação), para depois atualizar o valor.

## Scope let e const

_Const_ e _let_ são locais e só funcionam no escopo onde foram criadas. No _var_, como visto acima, acontece o _hoisting_.

**let**

Nos dois casos a seguir, acontecerá erros de referência/de visibilidade de variável, que está somente no escopo onde foi criada:

```js
console.log("> existe y antes do bloco? ", y);
//não existe no escopo global, só no escopo local
{
  let y = 0;
}
```

```js
{
  let y = 0;
}
console.log("> existe y depois do bloco? ", y);
//não existe no escopo global, só no escopo local
```

No caso abaixo, ele sabe que existe _w_, mas não pode acessá-lo antes da inicialização, já que o _let_ não permite o _hoisting_.

```js
{
  console.log("> existe w antes? ", w);
  let w = 0;
  //sabe que existe, mas não pode acessar 'w'
}
```

Só vai funcionar depois que eu declarei e adicionei um valor a ele:

```js
{
  let w = 0;
  console.log("> existe w? ", w);
  //existe, valor 0
}
```

No caso abaixo, começo declarando _z_ globalmente como 1. Mas como trago essa variável "de fora", quando ela entra no escopo local ela atualiza, resultando em saída _0_ em ambas as perguntas.

Como dentro do escopo não há uma palavra chave reservada, ou seja, "let z = 0", ele sobe um escopo para procurar o _z_ em algum lugar. Assim, ele entende que só precisa atualizar o valor para 0.

```js
let z = 1;
{
  z = 0;
  console.log("existe z?", z); //0
}
console.log("existe z depois do bloco? ", z); //0
```

**const**

A _const_, como o nome já indica, é constante. Ou seja, não muda. Você não pode atualizar valor quando uma variável for constante.

```js
const c = 1;
{
  c = 0;
  console.log("existe c?", c);
}
console.log("existe c depois do bloco? ", c);
```

Mas é possível criar uma nova constante em um outro escopo, mesmo que o nome seja igual, pois pertencem a "grupos" diferentes:

```js
const c = 1;
{
  const c = 0;
  console.log("existe c?", c); //0
}
console.log("existe c depois do bloco? ", c); //1
```

Usualmente, desenvolvedores preferem utilizar _let_ e _const_ porque _var_ acaba sendo muito flexível e permite alterações em diferentes escopos, podendo causar bugs.

## Nomeando variáveis

**Para criar nomes**

- JS é case-sensitive (sensível ao caso);
- JS aceita a cadeira de caracteres Unicode (você pode colocar aspas e acentuções nos nomes de suas variáveis).

Eu posso:

- Iniciar com esses caracteres especiais: "$" "\_" ;
- Iniciar com letras;
- Colocar acentos;
- Letras maiúsculas e minúsculas fazem diferença.

Não posso:

- Iniciar com números;
- Colocar espaços vazios no nome.

Ideal é:

- Criar nomes que façam sentido;
- Que expliquem o que a variável é ou faz;
- Utilizar camelCase;
- Ou utilizar snake_case;
- Escrever em inglês.

# Praticando e Avançando

## Declaration assignment var

Declaração de variável (declaration):

```js
var name;
```

Atribuição de valores (assignment):

```js
var name = "angelica";
```

Verficação de tipo de dado da variável:

```js
console.log(typeof name);
```

## Agrupando declarações

```js
let age = 20; //number
let isHuman = true; //boolean
```

Eu posso fazer declarações conjuntas, ou seja, agrupá-las deste modo:

```js
let age, isHuman;

age = 18;
isHuman = true;

console.log(age, isHuman);
//múltiplos argumentos na função
```

## Concatenando e interpolando variáveis

Continuando com os exemplos anteriores, se eu quisesse imprimir em textos no console, poderia fazer:

```js
console.log("A Angélica tem 18 anos.");
```

Mas podemos melhorar essa declaração através de substituição dos valores por variáveis, concatenando-as:

```js
console.log("A " + name + " tem " + age + " anos.");
//escrita de texto mais variáveis concatenando valores
```

Mas pode ficar melhor interpolando valores e utilizando _template string_:

```js
console.log(`A ${name} tem ${age} anos.`);
//interpolando valores com template strings
```

## Objects

Fazendo a criação de um objeto com propriedade e valor:

```js
const person = {
  name: "Jorge",
  age: 30,
  weight: 88.6,
  isAdmin: true,
};
```

Para imprimir dados específicos via console.log, faço:

```js
console.log(person.name);
console.log(`${person.name} pesa ${person.weight} quilos.`);
```

## Arrays

Criando um array de strings:

```js
const animals = ["Lion", "Monkey", "Cat"];
```

Ao fazer _console.log(animals)_, o array é exibido da seguinte forma:

```bash
(3) ["Lion", "Monkey", "Cat"]
0: "Lion"
1: "Monkey"
2: "Cat"
length: 3
```

Para acessar valores específicos dentro de um array, eu tenho que pegar a posição do array e insiro dentro de colchetes ("0", "1" e "2" são número e por isso causaria uma confusão se eu tentasse acessá-los diretamente, por não serem interpretados como posições):

```js
console.log(animals[0]); //"Lion"
```

Para eu saber o total de elementos do array, utilizo o _length_ e acesso deste modo:

```js
console.log(animals.length); //3
```

Lembrando que array pode ser composto por outros tipos, **apesar de não ser recomendado**.

No caso abaixo, "Lion" e "Monkey" são strings, enquanto "Cat" faz parte de um objeto:

```js
const animals = [
  "Lion",
  "Monkey",
  {
    name: "Cat",
    age: 3,
  },
];
```

Ao acessar \_console.log(animals[2]), é mostrado:

```bash
{name: "Cat", age: 3}
age: 3
name: "Cat"
```

E posso acessar uma propriedade desse objeto:

```js
console.log(animals[2].name); //"Cat"
```

# Funções

Vamos supor que eu queria criar um aplicativo de frases motivacionais:

```js
console.log("Estudar é muito bom.");
console.log("Paciência é persistência.");
console.log("Revisão é a mãe do aprendizado.");
console.log("Sempre haverá um próximo nível.");
```

Por algum motivo, eu quero repetir essas frases mais vezes. Existe um jeito para fazer essa repetição sem necessariamente precisar do "control C + control V". Esse jeito é com **função**.

A função tem esses motivos:

- Explicar o que o código quer dizer;
- Agrupar o código;
- Repetir o código.

**Declaração da função (function statement/declaration)**

Função também é um tipo de dado estrutural, bem organizada, para receber o código/agrupar um código que pode ser utilizado/reutilizado mais tarde.

Sua criação é feita da seguinte maneira:

```js
function createPhrases() {
  console.log("Estudar é muito bom.");
  console.log("Paciência é persistência.");
  console.log("Revisão é a mãe do aprendizado.");
  console.log("Sempre haverá um próximo nível.");
}
```

Todo esse bloco fica guardado em memória pelo JavaScript para que ele seja chamado a qualquer momento.

É como se o JavaScript percorresse o caminho todo do código e guardasse o nome da função como uma espécie de "atalho"; então, quando a função fosse chamda, ele lembraria desse atalho e o usaria.

**Chamar a função (execute, run, call, invoke function)**

Simplesmente a chamo pelo nome juntamente aos seus parênteses:

```js
createPhrases();
```

## Argumentos e parâmetros

Podemos declarar funções dentro de variáveis.

```js
const sum = function () {};
```

A função acima é chamada de **função anônima** (ou _function expression_), pois não possui um nome. Entretnto, ela segue a mesma ideia da declaração de função aprendida anteriormente para ser invocada:

```js
sum();
```

Para eu calcular uma soma nesta função, eu tenho que passar **argumentos** para ela dentro dos parênteses, para que ela os receba quando for invocada.

Ela recebe esses argumentos (que no caso abaixo são _2_ e _3_) através de **parâmetros** (parameters), escritos como _number1_ e _number2_:

```js
const sum = function (number1, number2) {};

sum(2, 3); //argumentos da função executada
```

É como se, "por baixo dos panos", ele estivesse fazendo essa atribuição nesse escopo:

```js
const sum = function (number1, number2) {
  let number1 = 2;
  let number2 = 3;
};
sum(2, 3);
```

**Somando os números**

O trecho abaixo retorna 5, funciona com sucesso:

```js
const sum = function (number1, number2) {
  console.log(number1 + number2);
};
sum(2, 3);
```

Agora, caso eu acesse algum desses parâmetros fora do escopo da função, eu tenho erro de referência:

```js
const sum = function (number1, number2) {
  console.log(number1 + number2);
};

console.log(number1);
sum(2, 3);
//Uncaught ReferenceError: number1 is not defined
```

## Retornando valores dentro da função

## Outra maneira de entender funções

## Function scope

## Function Hoisting

## Arrow function

## Callback function

## Funções construtoras
