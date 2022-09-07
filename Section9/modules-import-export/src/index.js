// import { nome as nomeModulo, sobrenome, idade, soma, Pessoa} from './modulo1';
// const nome = 'Leonardo';
// const p1 = new Pessoa(nomeModulo, sobrenome);

// console.log(nome, nomeModulo, sobrenome, idade);
// console.log(soma(5,5));
// console.log(p1);

// ou

// import * as modulo1 from './modulo1';

// console.log(modulo1.nome, modulo1.sobrenome, modulo1.idade);
// console.log(modulo1.soma(1, 2));
// console.log(new modulo1.Pessoa('Rafael', 'Ramos Costa'));

import qualquerNome, {nome, sobrenome, idade} from './modulo1'; // com export default você pode usar qualquer nome para importar e não precisa usar chaves  
console.log(qualquerNome(5,5));
console.log(nome, sobrenome, idade);
