function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  // defineProperty serve para apenas uma chave por vez
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // define um valor
    writable: false, // permite ou não modificar o valor
    configurable: false, // permite ou não que a chave seja reconfigurada
  });
  // defineProperties serve para várias chaves por vez
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // define um valor
      writable: false, // permite ou não modificar o valor
      configurable: false, // permite ou não que a chave seja reconfigurada
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, // define um valor
      writable: false, // permite ou não modificar o valor
      configurable: false, // permite ou não que a chave seja reconfigurada
    },
  });
}

const p1 = new Produto('Notebook', 2999, 5);
console.log(p1);
