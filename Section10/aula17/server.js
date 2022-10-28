// gerencia informções privadas como senha
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csurf = require('csurf');
const {
  middlewareGlobal,
  checkCsrfError,
  csrfMiddleware,
} = require('./src/middlewares/middleware');

app.use(helmet());

// realiza o parse pra json na aplicação
app.use(express.json());


// método para acessar o body da requisição
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.emit('conectado');
  })
  .catch((e) => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

// setando as opções de sessão
const sessionOptions = session({
  secret: 'adshgjadskif1345324jas03-9543jl 132ffgs6902çásaáfaaf',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias em milisegundos
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

// método para definir o conteúdo estático da aplicação
app.use(express.static(path.resolve(__dirname, 'public')));

// método para setar as views da aplicação
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csurf());

// métodos para utilizar os middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);

// método para acessar as rotas da aplicação
app.use(routes);

app.on('conectado', () => {
  app.listen(3000, () => {
    console.log('Acesse: http://localhost:3000');
    console.log('Server is running on port 3000');
  });
});
