// fetch('pessoas.json')
//   .then((resp) => resp.json())
//   .then((json) => carregaElementos(json));

axios('pessoas.json').then((resp) => carregaElementos(resp.data));

function carregaElementos(json) {
  const table = document.createElement('table');
  for (let pessoa of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerText = pessoa.nome;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = pessoa.idade;
    tr.appendChild(td);

    td = document.createElement('td');
    td.innerText = pessoa.salario;
    tr.appendChild(td);

    table.appendChild(tr);
  }

  const result = document.querySelector('.resultado');
  result.appendChild(table);
}
