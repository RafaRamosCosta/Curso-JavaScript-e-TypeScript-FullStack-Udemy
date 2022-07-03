function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

// laço while repete um bloco de código enquanto uma condição for verdadeira
// o laço while é mais eficiente quando não sabemos quantas vezes o laço deve ser executado
while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}

// o do while primeiro executa o bloco de código e depois verifica a condição
do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);
