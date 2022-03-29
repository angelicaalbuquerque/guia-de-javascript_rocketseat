/* Buscando e encontrando dados em Arrays


Esse é um desafio onde vamos trabalhar com arrays, começando com coisas básicas e complicando conforme anda.

Desafio:
/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.


const booksByCategory = [
  {
      category: "Riqueza",
      books: [
          {
              title: "Os segredos da mente milionária",
              author: "T. Harv Eker",
          },
          {
              title: "O homem mais rico da Babilônia",
              author: "George S. Clason",
          },
          {
              title: "Pai rico, pai pobre",
              author: "Robert T. Kiyosaki e Sharon L. Lechter",
          },
      ],
  },
  {
      category: "Inteligência Emocional",
      books: [
          {
              title: "Você é Insubstituível",
              author: "Augusto Cury",
          },
          {
              title: "Ansiedade – Como enfrentar o mal do século",
              author: "Augusto Cury",
          },
          {
              title: "Os 7 hábitos das pessoas altamente eficazes",
              author: "Stephen R. Covey",
          },
      ],
  },
];
 */

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const totalCategories = booksByCategory.length;
console.log(`Total de categorias: ${totalCategories}`);

for (let category of booksByCategory) {
  console.log(`Total de livros da categoria: ${category.category}`);
  console.log(category.books.length);
}

function countAuthors() {
  let authors = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) === -1) {
        authors.push(book.author);
      }
    }
  }

  console.log(`Total de autores: ${authors.length}`);
}

countAuthors();

function booksOfAugustoCury() {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author == "Augusto Cury") {
        books.push(book.title);
      }
    }
  }

  console.log(`Livros do autor Augusto Cury: ${books}`);
}

booksOfAugustoCury();

function booksByAuthor(author) {
  let books = [];

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author == author) {
        books.push(book.title);
      }
    }
  }

  console.log(`Livros do autor ${author}: ${books.join(", ")}`);
}

booksByAuthor("Stephen R. Covey");
booksByAuthor("George S. Clason");
