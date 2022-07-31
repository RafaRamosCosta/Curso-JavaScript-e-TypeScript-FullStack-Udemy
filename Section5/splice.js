const nomes = ['João', 'Maria', 'José', 'Pedro', 'Márcia'];

// método splice (índice, delete, elem1, elem2, ...);
// permite remover e inserir elementos em um array em um determinado índice
const removidos = nomes.splice(-2, 1);
console.log(nomes, removidos);