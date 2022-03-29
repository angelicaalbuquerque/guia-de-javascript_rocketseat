/* 
Celsius to Fahrenheit

Nesse desafio faremos uma função que vai receber uma string em Celsius ou Fahrenheit, e fazer a transformação de uma unidade para a outra.

Desafio:
Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra:
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32 
*/

//'50F'
function transformDegree(degree) {
  const isCelsius = degree.toUpperCase().includes("C");
  const isFahrenheit = degree.toUpperCase().includes("F");

  //fluxo de erro
  if (!isCelsius && !isFahrenheit) {
    throw new Error("Grau não identificado");
  }

  //fluxo ideal: F -> C
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let degreeSign = "C";

  //fluxo alternativo: C -> F
  if (isCelsius) {
    let updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    let formula = (celsius) => (celsius * 9) / 5 + 32;
    let degreeSign = "F";
    return formula(updatedDegree) + degreeSign;
  }

  return formula(updatedDegree) + degreeSign;
}

try {
  console.log(transformDegree("10C"));
  console.log(transformDegree("50F"));
} catch (error) {
  console.log(error.message);
}
