/* Manipulando arrays

Descrição
Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e o método indexOff(), que encontra o index do valor que recebe como argumento em um array. */

let techs = ["html", "css", "js"];

// Exercício 1 - Adicionar um item no Fim
console.log(techs.push("nodejs")); // 4

// Exercício 2 - Adicionar um item no Início
console.log(techs.unshift("sql"));

// Exercício 3 - Remover um item do Fim
console.log(techs.pop());

// Exercício 4 - Remover um item do Início
console.log(techs.shift());

// Exercício 5 - Pegar somente alguns elementos do array
console.log(techs.slice(0, 1)); //[ 'html']
console.log(techs.slice(0, 2)); //[ 'html', 'css' ]
console.log(techs.slice(1, 1)); //[ ]
console.log(techs.slice(1, 2)); //[ 'css' ]
console.log(techs.slice(1, 3)); //[ 'css', 'js' ]
console.log(techs.slice(2, 3)); //[ 'js' ]
// Quero tirar CSS e JS. O primeiro arg é a posição de início que quero cortar o array e o segundo qual que é a posição final, até onde eu quero que ele vá. Onde 1 é o CSS.

// Exercício 6 - Remover 1 ou mais itens em qualquer posição do array
console.log(techs.splice(1, 1)); // [ 'css' ]
console.log(techs); // [ 'html', 'js' ]

console.log(techs.splice(1, 2)); // ['css', 'js']
console.log(techs); // ['html']
//Eu quero retirar o CSS. No Splice tem dois argumentos, onde eu falo o index do elemento que eu quero retirar e quantos elementos eu quero retirar. Como quero tirar só ele, é 1,1.

// Exercício 7 - Encontrar a posição de um elemento no array
let moreTechs = ["php", "angular", "react"];
console.log(moreTechs);

let index = moreTechs.indexOf("angular");
moreTechs.splice(index, 1);
console.log(moreTechs);
