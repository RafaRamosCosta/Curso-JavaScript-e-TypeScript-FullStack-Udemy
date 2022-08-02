function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        condigurable: false, // permite ou não que a chave seja reconfigurada
        // o get é responsável por retornar o valor da chave
        get: () => {
            return estoquePrivado;
        },
        // o set é responsável por definir o valor da chave e permite proteger esse valor
        set: (valor) => {
            if (typeof valor !== 'number') {
                throw new TypeError('O estoque deve ser um número');
            }
             estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 2);
p1.estoque = 'erro';
console.log(p1.estoque);