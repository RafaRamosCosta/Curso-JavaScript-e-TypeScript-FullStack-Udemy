function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressEnter();
  };

  this.cliqueBotoes = () => {
    document.addEventListener('click', (e) => {
      const el = e.target;

      if (el.classList.contains('btn-num')) this.btnToDisplay(el.innerText);
      if (el.classList.contains('btn-clear')) this.clearDisplay();
      if (el.classList.contains('btn-del')) this.delLastDigit();
      if (el.classList.contains('btn-eq')) this.calculate();
    });
  };

  this.btnToDisplay = (valor) => {
    this.display.value += valor;
    this.display.focus();
  };

  this.clearDisplay = () => {
    this.display.value = '';
  };

  this.delLastDigit = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.calculate = () => {
    let conta = this.display.value;
    try {
      conta = eval(conta);
      if (!conta) {
        alert('Conta inválida');
        return;
      }
      this.display.value = String(conta);
    }
    catch (e) {
      alert('Conta inválida');
      return;
    }
  };

  this.pressEnter = () => {
    this.display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.calculate();
      }
    });
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
