// 705.484.450-52 070.987.720-03
export default class ValidateCpf {
  constructor(sentCpf) {
    Object.defineProperty(this, 'cleanCpf', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: sentCpf.replace(/\D+/g, ''),
    });
  }

  isSequence() {
    // repete 11 vezes(tamanho do cpf) o primeiro elemento do array e verifica se é igual ao cpfLimpo
    return this.cleanCpf.charAt(0).repeat(11) === this.cleanCpf;
  }

  generateNewCpf() {
    // capturando os números do cpf sem os dígitos
    const cpfWithoutDigit = this.cleanCpf.slice(0, -2);
    const digit1 = ValidateCpf.generateDigit(cpfWithoutDigit);
    const digit2 = ValidateCpf.generateDigit(cpfWithoutDigit + digit1);
    this.newCpf = cpfWithoutDigit + digit1 + digit2;
  }

  static generateDigit(cpfWithoutDigit) {
    let total = 0;
    let reverse = cpfWithoutDigit.length + 1;

    for (let stringNumber of cpfWithoutDigit) {
      total += reverse * Number(stringNumber);
      reverse--;
    }

    const digit = 11 - (total % 11);
    return digit <= 9 ? String(digit) : '0';
  }

  validate() {
    if (!this.cleanCpf) return false;
    if (typeof this.cleanCpf !== 'string') return false;
    if (this.cleanCpf.length !== 11) return false;
    if (this.isSequence()) return false;
    if (this.generateNewCpf()) return true;
    return this.newCpf === this.cleanCpf;
  }
}
