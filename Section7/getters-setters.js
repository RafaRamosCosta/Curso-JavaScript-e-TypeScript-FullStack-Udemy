const _velocidade = Symbol('velocidade'); // Symbol retorna um valor único a cada chamada
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0; // Com o symbol, a velocidade não é acessível fora da classe sem o getter e o setter
  }

  set velocidade(valor) {
    if (typeof valor !== 'number') return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  frear() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro('Fusca');

c1.velocidade = 99;
console.log(c1.velocidade);
c1.frear();
console.log(c1.velocidade);

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }
}

const p1 = new Pessoa('Rafael', 'Ramos Costa');
p1.nomeCompleto = 'Rafael Ramos Costa';
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);