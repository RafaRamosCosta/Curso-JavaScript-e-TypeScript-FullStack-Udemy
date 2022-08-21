function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
// promises ocorrer de maneira assíncrona, em paralelo com o resto do código
function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('BAD VALUE');
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}
// o then() é executado quando a promise é resolvida e o catch() quando a promise é rejeitada
// permitindo definir uma ordem de execução
esperaAi('Frase 1', rand(1, 3))
  .then((resp) => {
    console.log(resp);
    return esperaAi('Frase 2', rand(1, 3));
  })
  .then((resp) => {
    console.log(resp);
    return esperaAi(2222, rand(1, 3));
  })
  .then((resp) => {
    console.log(resp);
  })
  .catch((e) => {
    console.log('ERRO:', e);
  });
