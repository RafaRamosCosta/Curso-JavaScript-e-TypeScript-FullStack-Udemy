function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
  };
  Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
  };
  
  function Camiseta(nome, preco, cor) {
    // o método call permite a herança entre as funções
    Produto.call(this, nome, preco);
  }
  // setando o prototype do objeto vazio criado para o prototype do produto
  Camiseta.prototype = Object.create(Produto.prototype);
  Camiseta.prototype.constructor = Camiseta;
  
  
  function Caneca(nome, preco, material) {
      Produto.call(this, nome, preco);
      this.material = material;
  }
  Caneca.prototype = Object.create(Produto.prototype);
  Caneca.prototype.constructor = Caneca;
  const camiseta = new Camiseta('Regata', 7.5, 'Azul');
  console.log(produto);
  console.log(camiseta);