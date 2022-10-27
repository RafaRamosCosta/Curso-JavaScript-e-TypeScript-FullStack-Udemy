const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

                                // próximo middleware a ser executado
// function meuMiddleware(req, res, next) {
//     req.session = { nome: 'Rafael', sobrenome: 'Ramos Costa' };
//     console.log('Passou pelo meuMiddleware');
//     next();
// }

// function meuMiddleware2(req, res, next) {
//     console.log('Ainda estou aqui!');
//     next();
// }

// rotas da home
                // middleware
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// rotas de contato
route.get('/contato', contatoController.paginaContato);


// exportando todas as rotas que serão criadas
module.exports = route;