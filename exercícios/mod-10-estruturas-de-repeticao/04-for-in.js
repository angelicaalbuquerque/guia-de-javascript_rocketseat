//Cria um loop em cima de um objeto, pegando suas propriedades

let person = {
  name: "Fulano",
  age: 32,
  weight: 80,
};

for (let property in person) {
  // console.log(property);
  // console.log(person[property]);
  console.log(person.name);
}
