/*For

A estrutura de repetição for tem a seguinte sintaxe:
for(inicialização de uma variável; condição de continuação para o loop; expressão final)  */

console.log(`Contando de 1 até 10:`);
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log(`Contando de 10 até 1:`);
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log(`Contando até chegar a 50:`);
for (let i = 0; i <= 50; i++) {
  console.log(i);
}

console.log(`Contando e parando em 5:`);
for (let i = 10; i > 0; i--) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

console.log(`Contando até 5 e continuando:`);
for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
