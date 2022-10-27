const express = require('express');
const app = express();
const routes = require('./routes');

// função para acessar o body da requisição
app.use(express.urlencoded({ extended: true }));

// função para acessar as rotas da aplicação
app.use(routes);
// http://site.com/rota/parametro?query=valor&query2=valor2



app.get('/tests/:idUsuarios?/:parametro?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`Recebi o formulário. Nome: ${req.body.name} ${req.body.sobrenome}`);
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato conosco!');
});

app.listen(3000, () => {
  console.log('Acesse: http://localhost:3000');
  console.log('Server is running on port 3000');
});
