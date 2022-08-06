// // 1ª forma
// function criaPessoa(nome, sobrenome) {
//   const pessoaPrototype = {
//     falar() {
//       console.log(`${this.nome} está falando.`);
//     },
//     comer() {
//       console.log(`${this.nome} está comendo.`);
//     },
//     beber() {
//       console.log(`${this.nome} está bebendo.`);
//     },
//   };
//   // Criando um objeto que irá receber as chaves nome e sobrenome
//   // e os métodos que já existiam no objeto pessoaPrototype
//   return Object.create(pessoaPrototype, {
//     nome: { value: nome },
//     sobrenome: { value: sobrenome },
//   });
// }

// 2ª forma
// Desacoplando os métodos do objeto pessoaPrototype
// para que possam ser reutilizados em outros objetos
const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};
// Criando um objeto que irá receber as chaves nome e sobrenome e os métodos
const pessoaPrototype = Object.assign({}, falar, comer, beber);
function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}
