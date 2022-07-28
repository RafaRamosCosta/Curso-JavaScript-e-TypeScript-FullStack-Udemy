// factory function (função fabrica)	
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    // getter
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },
    // setter
    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    },
    fala(assunto) {
      // 'this' referencia o objeto criado
      return `${this.nome} está falando sobre ${assunto}`;
    },
    altura,
    peso,
    // com o get o método se comporta como um atributo do objeto
    get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
    }
  };
}
// utilizando a função fabrica para criar objetos 'pessoas'
const p1 = criaPessoa('Rafael', 'Ramos Costa', 1.78, 65);
const p2 = criaPessoa('João', 'Silva', 1.75, 90);
const p3 = criaPessoa('Maria', 'Santos', 1.65, 55);

console.log(p1.nomeCompleto);
console.log(p2.fala('JavaScript'));
console.log(p3.imc);
