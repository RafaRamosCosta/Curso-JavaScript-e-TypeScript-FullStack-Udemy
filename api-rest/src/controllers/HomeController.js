import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rafinha',
      sobrenome: 'Ramos Costa',
      email: 'rafinha@gmail.com',
      idade: 18,
      peso: 70.5,
      altura: 1.8,
    });
    res.json({ novoAluno });
  }
}

export default new HomeController();
