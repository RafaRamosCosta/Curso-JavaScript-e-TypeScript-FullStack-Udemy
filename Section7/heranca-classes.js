class DispEletro {
    constructor(nome) {
        this.nome = nome;
        this.ligado = true;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já está ligado.');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já está desligado.');
            return;
        }
        this.ligado = false;
    }
}

class Laptop extends DispEletro {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Smartphone extends DispEletro {
    constructor(nome, temDoisChips) {
        super(nome);
        this.temDoisChips = temDoisChips;
    }

    ligar() {
        console.log('Olá, bem vindo ao seu smartphone.'); // Polimorfismo -> sobrescrevendo o método ligar
    }
}

const l1 = new Laptop('Dell', 'preto', 'Inspiron');
console.log(l1);

const s1 = new Smartphone('iPhone', true);
s1.ligar();