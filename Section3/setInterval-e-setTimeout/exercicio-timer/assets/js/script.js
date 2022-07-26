function timer() {
  // função para formatar os segundos 
  function criaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC',
    });
  }

  // capturando o parágrafo que mostrará o tempo
  const timer = document.querySelector('.timer');
  let segundos = 0;
  let intervalo;
  
  // função para iniciar a contagem do tempo
  function iniciaTimer() {
    intervalo = setInterval(() => {
      segundos++;
      timer.innerHTML = criaSegundos(segundos);
    }, 1000);
  }

  // adiconando o evento de click no documento
  document.addEventListener('click', (e) => {
    const el = e.target;

    // verificando qual botão foi clicado e executando suas funções
    if (el.classList.contains('iniciar')) {
      timer.classList.remove('pausado');
      clearInterval(intervalo);
      iniciaTimer();
    } else if (el.classList.contains('pausar')) {
      timer.classList.add('pausado');
      clearInterval(intervalo);
    } else if (el.classList.contains('resetar')) {
      timer.classList.remove('pausado');
      clearInterval(intervalo);
      timer.innerHTML = '00:00:00';
      segundos = 0;
    }
  });
}

// chamando a função timer
timer();
