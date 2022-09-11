const nome = 'Rafael';
const sobrenome = 'Ramos Costa';

const falaNome = () => nome + ' ' + sobrenome;

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quiser exportar'; // o this aponta para o module.exports

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}
// Para exportar várias variáveis, funções, classes, etc, 
// Você pode sobrescrever o module.exports dessa forma:
module.exports = { 
  nome,
  sobrenome,
  falaNome,
  Pessoa,
};
