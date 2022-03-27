/* New

Descrição
A expressão new, também denominada como left-hand-side expression, serve para criar um novo objeto usando as funções construtoras que temos por padrão no JavaScript.

Um exemplo de seu uso é:

let date = new Date('2020-12-01')
console.log(date.__proto__) */

let name = new String("Angelica");
name.surName = "Albuquerque";
let age = new Number(31);
console.log(name, name.surName, age);
