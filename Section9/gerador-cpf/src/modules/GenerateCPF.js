import ValidateCpf from './ValidateCpf';

export default class GeraCPF {
  rand(min = 1000000000, max = 9999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatCpf(cpf) {
    return (
      cpf.slice(0, 3) +
      '.' +
      cpf.slice(3, 6) +
      '.' +
      cpf.slice(6, 9) +
      '-' +
      cpf.slice(9, 11)
    );
  }

  generateNewCpf() {
    const cpfWithoutDigit = this.rand();
    const digit1 = ValidateCpf.generateDigit(cpfWithoutDigit);
    const digit2 = ValidateCpf.generateDigit(cpfWithoutDigit + digit1);
    const newCpf = cpfWithoutDigit + digit1 + digit2;
    return this.formatCpf(newCpf);
  }
}
