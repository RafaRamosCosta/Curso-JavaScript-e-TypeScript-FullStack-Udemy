/**
 * Object.keys (retorna as chaves do objeto);
 * Object.freeze (congela o objeto) -> não permite que seja alterado;
 * Object.defineProperty/ Properties (definem propriedades do objeto);
 * Object.values (retorna os valores do objeto);
 * Object.entries (retorna as chaves e valores do objeto);
 * Object.assign (copia os valores de um objeto para outro);
 * Object.getOwnPropertyDescriptor(o, 'prop') -> (retorna as definições de uma chave do objeto);
 * ...spread (espalha os valores de um objeto para outro);
 */

const produto = { nome: 'Produto', preco: 10 };
Object.freeze(produto);
produto.nome = 'Notebook';
const novoProduto = Object.assign({}, produto);
const caneca = { ...produto };
console.log(Object.entries(produto)); // retorna um array de arrays com chave e valor [['nome', 'Produto'], ['preco', 10]]
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
