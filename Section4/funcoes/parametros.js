function funcao(a, b, c) {
  let total = 0;
  // argumento que sustenta todos os argumentos enviados 
  // (só funciona em funções declaradas dessa forma)
  for (let arg of arguments) {
    total += arg;
  }
  console.log(total, a, b, c);
}
// Função que não possui parâmetros podem receber parâmetros quando chamada
funcao(1, 2, 3, 4, 5, 6, 7);

// Passagem de parâmetro por atribuição via desestruturação
function pessoa({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
let pessoa1 = { nome: 'Rafa', sobrenome: 'Costa', idade: 18 };
pessoa(pessoa1);

// rest operator pega todos os argumentos restantes e os coloca em um array
function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if(operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '*') acumulador *= numero;
    if (operador === '/') acumulador /= numero;
  }
  console.log(acumulador);
}
conta('-', 0, 10, 20, 30, 40, 50);
