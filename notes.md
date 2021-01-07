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
