/* Operador condicional ternário

Descrição
Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.

Funciona da seguinte forma;
condição ? valor1 : valor2

Exemplo de uso: Café da manhã top*/
let pao = false;
let queijo = true;

const niceBreakfast = pao && queijo ? "Café top!" : "Não gostei do café";
const okBreakfast = pao || queijo ? "Café legal!" : "Café mais ou menos";

console.log(niceBreakfast);
console.log(okBreakfast);

//Exemplo de uso: Maior de 18 anos
let age = 16;

const canDrive = age >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(canDrive);
