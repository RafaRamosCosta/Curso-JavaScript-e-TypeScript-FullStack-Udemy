// Função construtora para validar o CPF
function ValidaCpf(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, '');
    },
  });
}
// Função que checa se o CPF tem um valor indefinido, se tem 11 caracteres 
//e se é uma sequência de números iguais
ValidaCpf.prototype.valida = function () {
  if (typeof this.cpfLimpo === 'undefined') return false;
  if (this.cpfLimpo.length !== 11) return false;
  if(this.isSequencia()) return false;
  // cpfParcial é o cpf sem os dois últimos dígitos
  const cpfParcial = this.cpfLimpo.slice(0, -2);
  // Criando os digitos do cpf chamando a função cria digito
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);

  // Contcatenando os dois dígitos criados com o cpf parcial para formar o cpf completo
  const novoCpf = cpfParcial + digito1 + digito2;
  console.log(novoCpf);
  // Retornando true caso o cpf seja igual ao cpfLimpo e false caso não seja
  return novoCpf === this.cpfLimpo;
};
// Função que cria os dígitos do cpf
ValidaCpf.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);
  let regressivo = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += regressivo * Number(val);
    regressivo--;
    return ac;
  }, 0);
  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito);
};

// Função para checar se o cpf é uma sequência de números iguais
ValidaCpf.prototype.isSequencia = function () {
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}
const cpf = new ValidaCpf('705.484.450-52');
if (cpf.valida()) {
    console.log('Cpf válido');
} else return console.log('Cpf inválido');
