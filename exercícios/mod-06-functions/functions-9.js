/* Function() constructor
 * expressão new
 * criar um novo objeto
 * this keyword */

function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + " está andando";
  };
}

const angelica = new Person("Angelica");
const mari = new Person("Mariângela");
console.log(angelica.walk(), mari.walk());
// console.log(`${angelica.name} está ${angelica.walk()}`);
// console.log(`${mari.name} está ${mari.walk()}`);
