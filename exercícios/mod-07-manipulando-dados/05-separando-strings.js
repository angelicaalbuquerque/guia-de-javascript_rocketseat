//Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

let phrase = "Eu adoro o filme Toy Story!";

let myArray = phrase.split(" ");
console.log(myArray);

let myArray2 = phrase.split("o"); //tira a palavra "o"
console.log(myArray2);

//Transformar array em um texto com underscore
let phraseUnder = myArray.join("_");
console.log(phraseUnder);
