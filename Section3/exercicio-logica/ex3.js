// escreva uma função que recebe um número e retorne o seguinte:
// se o número for divisível por 3 = Fizz
// se o número for divisível por 5 = Buzz
// se o número for divisível por 3 e 5 = FizzBuzz
// se não for divisível por nenhum = retornna o próprio número
// checar se o número é realmente um número
// use a função com números de 0 a 100

const fizzBuzz = (num) => {
  if (typeof num !== 'number') return num;
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
};

for(let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}
