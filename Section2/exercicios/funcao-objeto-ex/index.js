// function criaPessoa(nome, sobrenome, idade) {
//   return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Rafael', 'Ramos Costa', 18);

// console.log(pessoa1.nome)

const pessoa1 = {
  nome: "Rafael",
  sobrenome: "Ramos Costa",
  idade: 18,

  fala() {
    console.log(`Olá eu sou o ${this.nome}`);
  },
};

pessoa1.fala();
