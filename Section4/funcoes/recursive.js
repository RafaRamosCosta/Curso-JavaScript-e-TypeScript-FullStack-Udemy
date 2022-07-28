// função recursiva é uma função que executa seu código e chama a si mesma
// Lembrete: a recursividade tem um limite determinado
function recursive(max) {
    if (max >= 10) return;
    max++;
    console.log(max);
    recursive(max);
}

recursiva(-10);