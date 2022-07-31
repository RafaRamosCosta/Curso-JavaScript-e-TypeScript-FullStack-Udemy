// método concat permite concatenar arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, [7, 8, 9], 'Rafão');
// console.log(a3); 

// ...rest / ...spread -> nesse contexto, o operador utilizado é o spread
const a3 = [...a1, 'Rafão', ...a2, ...[7, 8, 9]];
console.log(a3);