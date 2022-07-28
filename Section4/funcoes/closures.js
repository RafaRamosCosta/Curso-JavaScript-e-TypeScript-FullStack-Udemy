// closure nada mais é do que a habilidade que a função tem de acessar seu escopo léxico

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao('Rafael');
const funcao2 = retornaFuncao('João');

console.log(funcao());
console.log(funcao2());
