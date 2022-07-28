// IIFE -> Immediately invoked function expression
// funções invocadas imediatamente, e protegidas do escopo global
(function () {
  const sobrenome = 'Ramos Costa';
  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }
  function falaNome() {
    console.log(criaNome('Rafael'));
  }
  falaNome();
})();
