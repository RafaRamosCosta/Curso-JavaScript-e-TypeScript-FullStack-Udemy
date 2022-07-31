// Some todos os números (reduce) 
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map) 


// a função reduce recebe um acumulador como parâmetro e permite 
// definir um valor inicial para esse acumulador
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce((acumulador, valor) => acumulador + valor);
console.log(total);


// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'João', idade: 20 },
  { nome: 'Maria', idade: 23 },
  { nome: 'José', idade: 55 },
  { nome: 'Pedro', idade: 40 },
  { nome: 'Márcia', idade: 70 },
  { nome: 'Rafael', idade: 15 },
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})