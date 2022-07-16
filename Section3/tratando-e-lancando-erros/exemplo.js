function soma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Somente números!');// lançando um erro com uma função construtora 
  }
  return a + b;
}

try {
    console.log(soma('1', 2));
  
} catch(err) {
    // console.log(err); nunca lançar erros para o usuário
    console.log('Alguma aviso mais amigável para o usuário')
}