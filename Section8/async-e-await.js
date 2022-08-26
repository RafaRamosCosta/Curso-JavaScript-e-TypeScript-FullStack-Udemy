function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('Cai no erro!');
        return;
      }
      resolve(msg.toUpperCase() + '- passei na promise!');
      return;
    }, tempo);
  });
}

// esperaAi('Fase1', rand())
//   .then((valor) => {
//     console.log(valor);
//     return esperaAi('Fase2', rand());
//   })
//   .then((fase) => {
//     console.log(fase);
//     return esperaAi('Fase3', rand());
//   })
//   .then((fase) => {
//     console.log('Terminamos na fase: ', fase);
//   })
//   .catch((e) => console.log(e));

async function executa() {
  try {
    const fase1 = await esperaAi('Fase1', rand());
  console.log(fase1);
  const fase2 = await esperaAi('Fase 2', rand());
  console.log(fase2);
  const fase3 = await esperaAi('Fase3', rand());
  console.log(fase3);
  console.log('Terminamos na fase: ', fase3);
  } catch(e) {
    console.log(e);
  }
}
executa();