// Métodos estáticos estão relacionados apenas à classe e não a instâncias da classe
class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // método de instância
    aumertarVol() {
        this.volume += 2;
    }
    // método de instância
    diminuirVol() {
        this.volume -= 2;
    }

    // método estático
    static trocaPilha() {
        console.log('Pilha trocada.');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumertarVol(); // o método de instância pode ser chamado dessa forma
controle1.aumertarVol();
console.log(controle1);

ControleRemoto.trocaPilha(); // o método estático pode ser chamado dessa forma, pois ele não está relacionado a instâncias da classe