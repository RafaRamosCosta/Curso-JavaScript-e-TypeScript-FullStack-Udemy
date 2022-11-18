import validator from 'validator';

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const nomeInput = el.querySelector('input[name="nome"]');
    const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');
    const nomeErr = el.querySelector('.nomeErr');
    const sobrenomeErr = el.querySelector('.sobrenomeErr');
    const emailErr = el.querySelector('.emailErr');
    const telefoneErr = el.querySelector('.telefoneErr');
    let error = false;
    
    if (!nomeInput.value.length > 0) {
      nomeErr.innerText = 'Campo nome é obrigatório';
      error = true;
    } else {
        nomeErr.innerText = '';
    }

    if (!sobrenomeInput.value.length > 0) {
      sobrenomeErr.innerText = 'Campo sobrenome é obrigatório';
      error = true;
    } else {
        sobrenomeErr.innerText = '';
    }

    if (!validator.isEmail(emailInput.value)) {
      emailErr.innerText = 'Email inválido';
      error = true;
    } else {
        emailErr.innerText = '';
    }

    if (!validator.isMobilePhone(telefoneInput.value)) {
      telefoneErr.innerText = 'Telefone inválido';
      error = true;
    }else {
        telefoneErr.innerText = '';
    }

    if (!error) el.submit();
  }
}
