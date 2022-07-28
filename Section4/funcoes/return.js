// return retorna um valor e finaliza a função
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa('Rafael', 'Ramos');
console.log(p1);

// funções que retornam funções
function criaMultiplicador(multiplicador) {
    return function (n) {
        return multiplicador * n;
    };
}

// as constantes se tornam funções ao receberem a função criaMultiplicador 
// porque ela retorna outra função	
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);	
const quadriplica = criaMultiplicador(4);

console.log(duplica(5));
console.log(triplica(5));
console.log(quadriplica(5));