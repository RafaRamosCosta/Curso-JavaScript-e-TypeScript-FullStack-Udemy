// const request = (obj) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send(); // se fosse um post seria necessario enviar os dados

//     xhr.addEventListener('load', () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

document.addEventListener('click', (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href);
    if (response.status !== 200) throw new Error('Erro 404!');

    const html = await response.text();
    carregaResultado(html);
  } catch (e) {
    console.log(e);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

// a função fetch retorna uma promise automaticamente
fetch('./pagina1.html').then((resp) => {
  if (resp.status !== 200) throw new Error('Erro 404 Nosso');
  // retorna outra promise com o conteudo do erro em text
  return resp
    .text()
    .then((html) => console.log(html))
    .catch((err) => console.log(err));
});
