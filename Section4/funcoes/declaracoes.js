// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
  console.log('oi');
}

// First Class Objects (Objetos de Primeira Classe)
// Function expression
const falaTchau = function () {
  console.log('Tchau');
};
falaTchau();

function executaFuncao(func) {
  console.log('Executando...');
  func();
}
executaFuncao(falaTchau);

// Arrow Function
const funcArrow = () => {
  console.log('Arrow Function');
};

// Dentro de um objeto
const obj = {
  falar: function () {
    console.log('Falando...');
  },
};
obj.falar();
