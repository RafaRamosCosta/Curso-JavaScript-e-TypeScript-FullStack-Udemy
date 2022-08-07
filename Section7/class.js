class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  // Com a classe, os métodos já são criados no prototype automaticamente
  falar() {
    console.log(`${this.nome} está falando.`);
  }

}

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
};

const p1 = new Pessoa('Rafael', 'Ramos');
const p2 = new Pessoa2('Leonardo', 'Ramos');
console.log(p1.nome); // Rafael
console.log(p2.nome); // Leonardo
p1.falar(); // Rafael está falando.
p2.falar(); // Leonardo está falando.