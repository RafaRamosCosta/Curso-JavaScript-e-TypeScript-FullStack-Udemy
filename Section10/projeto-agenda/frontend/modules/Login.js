import validator from 'validator';

export default class Login {
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
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    const emailErr = el.querySelector('.emailErr');
    const passErr = el.querySelector('.passErr');
    let error = false;
    if (!validator.isEmail(emailInput.value)) {
      emailErr.innerText = 'Email inválido';
      error = true;
    }
    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      passErr.innerText = 'Senha precisa ter entre 3 e 50 caracteres';
      error = true;
    }
    if (!error) el.submit();
  }
}
