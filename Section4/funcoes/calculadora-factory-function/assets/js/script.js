function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes();
      this.pressEnter();
    },

    cliqueBotoes() {
      document.addEventListener('click', (e) => {
        // a arrow function não muda a referência do this
        const el = e.target;

        if (el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if (el.classList.contains('btn-del')) {
          this.delLastDigit();
        }

        if (el.classList.contains('btn-eq')) {
          this.calculate();
        }
      });
    },
    // função para passar os números selecionados para o input
    btnParaDisplay(valor) {
      this.display.value += valor;
    },
    // função para limpar o input
    clearDisplay() {
      this.display.value = '';
    },
    // função para deletar o último número do input
    delLastDigit() {
      this.display.value = this.display.value.slice(0, -1);
    },
    // função para calcular a expressão quando o usuário clicar no botão de =
    calculate() {
      let conta = this.display.value;
      try {
        conta = eval(conta);

        if (!conta) {
          alert('Conta inválida');
          return;
        }
        this.display.value = String(conta);
      } catch (e) {
        alert('Conta inválida');
        return;
      }
    },
    // função para permitir o usuário pressionar a tecla enter para calcular a expressão
    pressEnter() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.calculate();
        }
      });
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
