//Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.

//Verificar se o texto contém a palavra 'Programação'. Cuidado, pois o includes é case sentitive

let phrase = "Eu estudo chinês!";
console.log(phrase.includes("programação"));

let phrase2 = "Eu estudo Programação!";
console.log(phrase2.includes("programação"));

let phrase3 = "Eu estudo programação!";
console.log(phrase3.includes("programação"));
