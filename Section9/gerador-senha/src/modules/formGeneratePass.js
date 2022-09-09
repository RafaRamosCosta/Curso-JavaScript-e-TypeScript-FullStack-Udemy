import generatePass from './generators.js';

const generatedPass = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkUpper = document.querySelector('.chk-maiusculas');
const chkLower = document.querySelector('.chk-minusculas');
const chkNum = document.querySelector('.chk-numeros');
const chkSimb = document.querySelector('.chk-simbolos');
const btnGenerate = document.querySelector('.gerar-senha');
export default () => {
  btnGenerate.addEventListener('click', () => {
    generatedPass.innerHTML = generate();
  });
};

function generate() {
  const pass = generatePass(
    qtdCaracteres.value,
    chkUpper.checked,
    chkLower.checked,
    chkNum.checked,
    chkSimb.checked
  );
  return pass || 'Nada selecionado';
}
