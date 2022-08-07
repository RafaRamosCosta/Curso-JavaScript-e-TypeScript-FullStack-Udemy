class ValidateForm {
  constructor() {
    this.form = document.querySelector('.formulario');
    this.events();
  }

  // método que engloba o evento de submit do formulário
  events() {
    this.form.addEventListener('submit', (e) => {
      this.handleSubmit(e); 
    });
  }
  // método para lidar com o envio do formulário -> responsável por chamar os métodos de validação
  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.validFields(); // atribuindo o retorno do método de validação dos campos na variável
    const validPasswords = this.validPasswords(); // atribuindo o retorno do método de validação das senhas na variável

    // se as duas variáveis forem true, o formulário é enviado
    if (validFields && validPasswords) {
      alert('Formulário enviado.');
      this.form.submit();
    }
  }

  // método para validar as senhas
  validPasswords() {
    let valid = true;
    const senha = this.form.querySelector('.senha');
    const repetirSenha = this.form.querySelector('.repetir-senha');
    if (senha.value !== repetirSenha.value) {
        valid = false;
        this.createError(senha, 'Campos senha e repetir senha precisam ser iguais.');
        this.createError(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.');
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
        valid = false;
        this.createError(senha, 'Senha precisa ter entre 6 e 12 caracters.');
    }
    return valid;
  }
  // método para validar os demais campos
  validFields() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll('.errorText')) {
      errorText.remove(); // remove a div de erro
    }

    for (let campo of this.form.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText; // captura o texto do label (elemento anterior ao campo)
      if (!campo.value) {
        this.createError(campo, `Campo ${label} não pode estar em branco.`);
        valid = false;
      }

      if (campo.classList.contains('cpf')) {
        if (!this.validateCpf(campo)) valid = false;
      }

      if (campo.classList.contains('usuario')) {
        if (!this.validateUser(campo)) valid = false;
      }
    }
    return valid;
  }

  // método para validar o campo usuário
  validateUser(campo) {
    const user = campo.value;
    let valid = true;
    if (user.length > 12 || user.length < 3) {
      this.createError(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }
    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(
        campo,
        'O username deve conter apenas letras e/ou números.'
      );
      valid = false;
    }
    return valid;
  }

  // método para validar o cpf (utilizando a classe ValidateCpf)
  validateCpf(campo) {
    const cpf = new ValidateCpf(campo.value);

    if (!cpf.validate()) {
      this.createError(campo, 'CPF inválido.');
      return false;
    }
    return true;
  }
 // método para criar a div de erro
  createError(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('errorText');
    campo.insertAdjacentElement('afterend', div); // insere a div depois de cada campo
  }
}

const validate = new ValidateForm();
