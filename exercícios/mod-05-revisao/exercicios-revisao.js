    // 1. Declare uma variável de nome weight
    let weight

    // 2. Que tipo de dado é a variável acima?
    console.log(typeof weight); //undefined

    /* 
      3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
    */
    let name = "Angélica",
        age = 30,
        stars = 4.5,
        isSubscribed = true
    
    /*
      4. A variável student abaixo é de que tipo de dados?
      Object.

      4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

      4.2. Mostre no console a seguinte mensagem:
      <name> de idade <age> pesa <weight> kg.

      Atenção: substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
    */

    let student = {
      name: "Angélica",
      age: 30,
      stars: 4.5,
      isSubscribed: true,
      weight: 70
    };

    console.log(`${student.name}, de idade ${student.age}, pesa ${student.weight} kg.`)

    /*
      5. Declare uma variável do tipo Array, de nome students, e atribua a ela nenhum valor, ou seja, somente o Array vazio.
    */

    let students = [];

    /*
      6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. 

      Não copiar e colocar o objeto, mas usar o objeto criado e inserí-lo no Array.
    */

    students = [
      student
    ];

    console.log(students);

    /*
      7. Coloque no console o valor da posição zero do Array acima.
    */

    console.log(students[0]);

    /*
      8. Crie um novo student e coloque na posição 1 do Array students.
    */

    const newStudent = {
      name: "Mayk",
      age: 20,
      stars: 5.0,
      isSubscribed: false,
      weight: 80
    }

   //jeito 1 
    students = [
      student,
      newStudent,
    ]

    //jeito 2
    students[1] = newStudent;

    console.log(students);

    /*
      9. Sem rodar o código, qual é a resposta do código abaixo e por quê? Após sua resposta, rode o código e veja se você acertou.

      console.log(a)
      var a = 1

      Resposta: undefined, pois a variável "a" ainda não foi criada, apenas declarada, apesar de passar pelo hoisting. Então, o código vai ler primeiro "a", mas sem o seu valor, como se fosse:

      var a
      console.log(a)
      a = 1

    */


