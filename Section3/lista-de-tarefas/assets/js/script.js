const inputTarefa = document.querySelector('#input-tarefa');
const btnAdd = document.querySelector('#btn-add');
const lista = document.querySelector('.lista');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaTarefa(tarefa) {
  const li = criaLi();
  li.innerText = tarefa;
  lista.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefa();
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const btnApagar = document.createElement('button');
  btnApagar.innerText = 'Apagar';
  btnApagar.setAttribute('class', 'apagar');
  li.appendChild(btnApagar);
}

function apagarTarefa() {
  const btnApagar = li.querySelector('.apagar');
  btnApagar.addEventListener('click', () => {
    lista.removeParentNode(btnApagar);
  });
}

function salvarTarefa() {
  const tarefas = lista.querySelectorAll('li');
  const listaTarefas = [];

  for (let tarefa of tarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefaSalva() {
  const tarefas = localStorage.getItem('tarefas');
  const listaTarefas = KeyedArray(tarefas);
  
  for(let tarefa of listaTarefas) {
    criaTarefa(tarefa);
  }
}

inputTarefa.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

btnAdd.addEventListener('click', () => {
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefa();
  }
});
