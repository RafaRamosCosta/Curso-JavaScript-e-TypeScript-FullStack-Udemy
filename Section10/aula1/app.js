// const mod1 = require('./mod1'); // importa o módulo mod1 inteiro
// console.log(mod1);

// const falaNome = require('./mod1'); // importa apenas a função falaNome
// console.log(falaNome());

// importando via destructuring
// const { nome, sobrenome, falaNome } = require('./mod1'); 
// console.log(nome, sobrenome, '\n' + falaNome());

const { Pessoa } = require('./mod1');
const p1 = new Pessoa('Rafael');
console.log(p1);