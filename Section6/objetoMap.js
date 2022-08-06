const pessoas = [
    { id: 3, nome: 'Rafa'},
    { id: 2, nome: 'Ana'},
    { id: 1, nome: 'Bia'}
];

// dessa forma a ordem não é mantida
// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

// Um objeto Map itera seus elementos na ordem da inserção 
// - um loop for...of retorna um array de [key, value] para cada iteração

// dessa forma a orderm é mantida
const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

// retorna um array com o id e o objeto 
for (const pessoa of novasPessoas) {
    console.log(pessoa);
}