// capturando o h1
const h1 = document.querySelector('.container h1');

// criando o objeto da classe Date
const date = new Date();
const weekDay = date.getDay();
const month = date.getMonth();

// função para retornar o dia da semana no padrão brasileiro
function getWeekDay(weekDay) {
  const weekDays = [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado',
  ];
  return weekDays[weekDay];
}

// função para retornar o mês no padrão brasileiro
function getMonth(month) {
  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];
  return months[month];
}

/*
  função para adicionar o zero a esquerda quando
  o valor da hora ou do minuto for menor que 10
*/
function leftZero(num) {
  return num >= 10 ? num : `0${num}`;
}

// função para mostrar a data atual no h1
function showDate() {
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return (h1.innerHTML = `${getWeekDay(
    weekDay
  )}, ${date.getDate()} de ${getMonth(month)} de ${year} ${leftZero(
    hours
  )}:${leftZero(minutes)}`);
}

showDate();

// // modo prático

// const h1 = document.querySelector(".container h1");
// const data = new Date();

// h1.innerHTML = data.toLocaleDateString("pt-BR", {
//   dateStyle: "full",
//   timeStyle: "short"
// });
