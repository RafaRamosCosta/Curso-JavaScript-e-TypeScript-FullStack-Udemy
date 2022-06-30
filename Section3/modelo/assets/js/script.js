const form = document.querySelector("form");

// função para o cálculo do IMC
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

// função para retornar o quadro de imc do usuário
function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade nível 1",
    "Obesidade nível 2",
    "Obesidade nível 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

// função para criar parágrafo
function createP() {
  const p = document.createElement("p");
  return p;
}

// função para mostrar o resultado
function setResult(msg, isValid) {
  const result = document.querySelector(".resultado");
  result.innerHTML = "";
  const p = createP();

  if (isValid) {
    p.classList.add("paragrafo-resultado-success");
  } else {
    p.classList.add("paragrafo-resultado-error");
  }

  p.innerHTML = msg;
  result.appendChild(p);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputPeso = form.querySelector("#input-peso");
  const inputAltura = form.querySelector("#input-altura");

  const pesoVal = Number(inputPeso.value);
  const alturaVal = Number(inputAltura.value);

  const imc = getImc(pesoVal, alturaVal);
  const nivelImc = getNivelImc(imc);

  if (!pesoVal && !alturaVal) {
    setResult("Peso e Altura inválidos!", false);
    return;
  } else if (!pesoVal) {
    setResult("Peso inválido!", false);
    return;
  } else if (!alturaVal) {
    setResult("Altura inválida!", false);
    return;
  } else {
    setResult(`Seu IMC é ${imc} (${nivelImc})`, true);
  }
});
