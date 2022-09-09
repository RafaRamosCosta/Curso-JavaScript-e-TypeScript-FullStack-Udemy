const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateUpper = () => String.fromCharCode(rand(65, 91)); // A-Z na tabela ASCII
const generateLower = () => String.fromCharCode(rand(97, 123)); // a-z na tabela ASCII
const generateNum = () => String.fromCharCode(rand(47, 58)); // números na tabela ASCII
const simbolos = ',.;~^[]{}!@#$%&*()_+-=';
const generateSimb = () => simbolos[rand(0, simbolos.length)]; // pegando um símbolo aleatório entre a posição 0 e o tamanho da string


export default function generatePass(qtd, upper, lower, num, simb) {
    const pass = [];
    qtd = Number(qtd); // convertendo a string para número
    for(let i = 0; i < qtd; i++) {
        // verificação de curto-circuito
        upper && pass.push(generateUpper());
        lower && pass.push(generateLower());
        num && pass.push(generateNum());
        simb && pass.push(generateSimb());
    }
    console.log(qtd);
    return pass.join('').slice(0, qtd); // juntando os elementos do array e cortando a string para o tamanho desejado
}
