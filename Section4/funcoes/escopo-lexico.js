// O escopo lexico é o local onde a variavel foi declarada
// ao utilizar uma variável definida fora da função, 
// a função busca a variável até chegar no escopo global
// caso a variável não seja encontrada, ocorre um erro
const nome = 'Rafael';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  falaNome();
}
usaFalaNome();
