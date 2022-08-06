// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}
Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log('Saldo insuficiente');
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`
  );
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
// Criando o prototype da ContaCorrente herdando o prototype da Conta
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Sobrescrevendo o método sacar da Conta (Polimorfismo)
ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log('Saldo insuficiente');
    this.verSaldo();
    return;
  }
  this.saldo -= valor;
  this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

// Na classe ContaPoupanca o método sacar não foi sobrescrito, 
// então ele vai usar o método sacar da classe Conta
const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);
