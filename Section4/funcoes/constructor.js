// a função construtora cria objetos automaticamente
// uma função contrutora deve possuir a primeira letra maiúscula
function Pessoa(nome, sobrenome) {
  // chave    valor
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.metodo = function() {
    console.log(`${this.nome}: sou um método`);
  };
}

// para criar um objeto com uma função construtora usa-se o new
// new cria um objeto vazio e faz o this apontar para o objeto criado
const p1 = new Pessoa('Rafael', 'Ramos');
console.log(p1.nome);
p1.metodo();
