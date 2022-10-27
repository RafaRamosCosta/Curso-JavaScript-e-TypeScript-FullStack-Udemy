// gerencia informções privadas como senha
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
mongoose
  .connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectei ao banco de dados');
    app.emit('conectado');
  });

const {
  middlewareGlobal,
  outroMiddleware,
} = require('./src/middlewares/middleware');

// função para acessar o body da requisição
app.use(express.urlencoded({ extended: true }));

// função para definir o conteúdo estático da aplicação
app.use(express.static(path.resolve(__dirname, 'public')));

// função para setar as views da aplicação
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// função para utilizar o middleware
app.use(middlewareGlobal);
app.use(outroMiddleware);

// função para acessar as rotas da aplicação
app.use(routes);


app.on('conectado', () => {
  app.listen(3000, () => {
    console.log('Acesse: http://localhost:3000');
    console.log('Server is running on port 3000');
  });
});
