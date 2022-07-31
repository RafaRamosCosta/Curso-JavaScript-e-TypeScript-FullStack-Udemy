// O filter filtra o array e retorna um novo array com os 
// elementos que correspondem ao critério passado 

// retorne números maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados);

// Retorne as pessoas que tenham o nome com mais de 5 caracteres
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 23 },
    { nome: 'José', idade: 55 },
    { nome: 'Pedro', idade: 40 },
    { nome: 'Márcia', idade: 70 },
    { nome: 'Rafael', idade: 15 },
];
const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
const pessoasComMaisDe50 = pessoas.filter((obj) => obj.idade > 50);
const pessoasComNomeFinalA = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDe50);
console.log(pessoasComNomeFinalA);
