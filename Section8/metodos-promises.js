function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}
// promises ocorrer de maneira assíncrona, em paralelo com o resto do código
function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('Cai no erro');
        return;
      }
      resolve(msg + '- passei na promise!');
    }, tempo);
  });
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5)),
  // esperaAi(1000, 1000),
];
// Retorna uma promise que é resolvida quando todas as promises do array são resolvidas ou rejeitadas
// Se a promise retornada for resolvida, ela retorna um array com os valores das promises resolvidas
// Se for rejeitada, retorna o valor da primeira promise rejeitada
// Promise.all(promises)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((e) => {
//     console.log('Erro:', e);
//   });

// Retorna a promise que for resolvida ou rejeitada primeiro, independente da ordem
// Promise.race(promises)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

// exemplo Promise.resolve e Promise.reject
function baixaPagina() {
  const emCache = true;
  if (emCache) {
    // caso seja Promise.resolve entra no then, caso seja Promise.reject entra no catch
    return Promise.resolve('Página em cache');
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(e));
