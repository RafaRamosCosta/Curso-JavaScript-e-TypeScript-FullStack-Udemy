export const nome = 'Rafael';
export const sobrenome = 'Ramos Costa';
export const idade = 18;

export default function soma(x, y) { // export default permite que você exporte como padrão apenas uma função, classe, objeto, etc. 
  return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// ou
// export { nome, sobrenome, idade, soma, Pessoa }; 