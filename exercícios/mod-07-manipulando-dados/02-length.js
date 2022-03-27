// Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método.

let word = "Paralelepípedo";
console.log(word.length);

let number = 12345;
console.log(number.length); //erro, number não recebe length, tem que converter
console.log(String(number).length);
