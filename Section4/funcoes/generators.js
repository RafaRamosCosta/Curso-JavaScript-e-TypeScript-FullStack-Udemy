// funções geradoras permitem uma espécie de pausa no código
// retornam valor a cada chamada

// a função sabe que não existem mais valores (yields) para retornar por meio da chave 'done'
// sintaxe:
function* generator1() {
  // código qualquer...
  yield 'Valor 1';
  // código qualquer...
  yield 'Valor 2';
  // código qualquer...
  yield 'Valor 3';
}

function* generator2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

function* generator3() {
  yield 0;
  yield 1;
  yield 2;
}

function* generator4() {
  yield* generator3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = generator4();

function* generator5() {
  yield function() {
    console.log('Vim do y1');
  };
  // em uma função geradora o return acaba a função
  return function() {
    console.log('vim do return');
  }

  // ...

  yield function() {
    console.log('Vim do y2');
  }
}

const g5 = generator5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();
func2();
func3();