const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// rotas da home
                // middleware
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// rotas de contato
route.get('/contato', contatoController.paginaContato);


// exportando todas as rotas que serão criadas
module.exports = route;