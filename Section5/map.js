// o método map permite alterar os elementos de um array e retorna um novo array
// sempre mantendo o tamanho do array. Entretando, o método map altera o array original
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map((valor) => valor * 2);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
  { nome: 'João', idade: 20 },
  { nome: 'Maria', idade: 23 },
  { nome: 'José', idade: 55 },
  { nome: 'Pedro', idade: 40 },
  { nome: 'Márcia', idade: 70 },
  { nome: 'Rafael', idade: 15 },
];

const nomes = pessoas.map((obj) => obj.nome);
const idades = pessoas.map((obj) => ({ idade: obj.idade }));
const pessoasComId = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});
console.log(pessoasComId);
