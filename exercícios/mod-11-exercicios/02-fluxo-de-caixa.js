/* Fluxo de caixa familiar

Esse desafio envolve a criação de dois arrays e um função que calculará o resultado desses valores, dizendo se é positivo ou negativo, e após isso, o valor do saldo.

Desafio:
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
A partir de 1:35, nosso amado maykão nos mostra uma solução. */

let familyMoney = {
  incomes: [2500, 1500, 2000, 3500.75],
  expenses: [500, 800, 101.36, 200, 2500],
};

function sum(array) {
  let total = 0;

  for (let value of array) {
    total += value;
  }

  return total;
}

function calculateBalance() {
  const calculateIncomes = sum(familyMoney.incomes);
  const calculateExpenses = sum(familyMoney.expenses);

  const totalBalance = calculateIncomes - calculateExpenses;

  if (totalBalance > 0) {
    console.log(`O saldo é positivo. Total: R$${totalBalance.toFixed(2)}`);
  } else if (totalBalance < 0) {
    console.log(`O saldo é negativo. Total: R$${totalBalance.toFixed(2)}`);
  } else if ((totalBalance = 0)) {
    console.log(`O saldo é nulo.`);
  } else {
    console.log("Ocorreu um erro.");
  }
}

calculateBalance();
