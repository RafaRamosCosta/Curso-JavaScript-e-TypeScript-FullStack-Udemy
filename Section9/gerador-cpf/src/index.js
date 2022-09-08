import GenerateCPF from './modules/GenerateCPF';
import './assets/css/style.css';

(function () {
    const newCpf = new GenerateCPF();
    const generatedCpf = document.querySelector('.cpf-gerado');
    generatedCpf.innerText = newCpf.generateNewCpf();
})();
