//! não utilizar a propriedade ___proto___ para modificar os protótipos
//* utilizar Object.getPrototypeOf(obj) e Object.setPrototypeOf(obj, proto)

// new Object -> Object.prototype
const obj = {
  chave: 'valor',
  //___protptype__: Object.prototype
};

const obj1 = {
  chave1: 'valor1',
};

const obj2 = {
  chave2: 'valor2',
};

// é possível manipular o protptype de um objeto com o Object.setPrototypeOf
// criando cadeias de prototipos
// Object.setPrototypeOf(obj1, obj);
// Object.setPrototypeOf(obj2, obj1);
// console.log(obj2.chave);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto('Notebook', 2999);

const p2 = {
    nome: 'Caneca',
    preco: 10
};

// ao setar o prototype da função construtora Produto como prototype do p2, 
// o p2 ganha acesso aos métodos desconto e aumento da função construtora Produto.
Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(100);
console.log(p1);
console.log(p2);