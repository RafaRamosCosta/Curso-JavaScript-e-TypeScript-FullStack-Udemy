/* Todos os objetos tem uma referência interna ao protótipo (__proto__) 
  que vem da propriedade prototype da função construtora que foi usada para criá-lo. 
  Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar 
  encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até 
  o topo(null) até encontrar (ou não) tal membro.
*/
// Construtora -> Classe
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; 
    // esse método será criado a cada instancia da função Pessoa
    // gerando um perda de recurso desnecessária
}

// para evitar o perda de recurso, usamos o prototype
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome; 
}
// com o prototype, a função não será mais criada a cada instância,
// pois já está criada no protótipo da função Pessoa

// instanciação -> objeto
const p1 = new Pessoa('João', 'Silva', 20); 
const p2 = new Pessoa('Maria', 'Santos', 25);


console.log(p1.nomeCompleto());