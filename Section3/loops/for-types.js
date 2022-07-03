const nomes = ['Rafael', 'Ramos', 'Costa'];  

// for tradicional lê o índice de iteráveis (array ou strings)
for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
console.log('-----------------');

// for in lê os índices ou chaves de um objeto ou array (strings, arrays ou objetos)
for (let chave in nomes) {
  console.log(chave, nomes[chave]);
}
console.log('-----------------');

// for of lê os valores de iteráveis (array ou strings) 
for(let valor of nomes) {
  console.log(valor);
}
console.log('-----------------');

// for each lê o valor, o índice e o próprio objeto através dos parâmetros da função
nomes.forEach((valor, indice, objeto) => {
  console.log(valor, indice, objeto);
});