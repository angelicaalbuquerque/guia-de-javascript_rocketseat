/* Throw e Try/Catch

Nesta aula veremos sobre o throw e try/catch. São parte do controle de fluxo da aplicação.

Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.

Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função. */

//Throw - jogar algo
function sayMyName(name = "") {
  if (name === "") {
    throw "Nome não pode ser vazio";
  }
  console.log("depois do erro");
}

/* Nesse caso, se o nome vier vazio, será disparada uma mensagem.

Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira: */

//Try...catch - se der erro, capturar

try {
  sayMyName();
} catch (e) {
  console.log(e);
}

console.log("após a função do erro");

/* O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo. */
