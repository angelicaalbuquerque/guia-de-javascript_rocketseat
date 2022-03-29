/* Sistema de notas escolares

Esse exercício vai trabalhar a transformação de notas escolares, onde devemos criar um algoritmo para transformar notas númericas em notas de caracteres.

Desafio:
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F */

function notasEscolares(nota) {
  let notaA = nota >= 90 && nota <= 100;
  let notaB = nota >= 80 && nota <= 89;
  let notaC = nota >= 70 && nota <= 79;
  let notaD = nota >= 60 && nota <= 69;
  let notaF = nota >= 0 && nota < 60;

  let notaFinal;

  if (notaA) {
    notaFinal = "A";
  } else if (notaB) {
    notaFinal = "B";
  } else if (notaC) {
    notaFinal = "C";
  } else if (notaD) {
    notaFinal = "D";
  } else if (notaF) {
    notaFinal = "F";
  } else {
    notaFinal = "Nota inválida";
  }

  return notaFinal;
}

console.log(notasEscolares(101));
console.log(notasEscolares(-1));
console.log(notasEscolares(0));
console.log(notasEscolares(62));
console.log(notasEscolares(75));
console.log(notasEscolares(88));
console.log(notasEscolares(99));
