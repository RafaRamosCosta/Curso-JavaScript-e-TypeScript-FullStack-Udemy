function Time(qtde, membros) {
    this.qtde = qtde;
    this.membros = membros;
    
    // o método freeze() não permite que o objeto seja modificado
    Object.freeze(this);
}

const t1 = new Time(10, ['João', 'Maria', 'José', 'Pedro']);
console.log(t1);