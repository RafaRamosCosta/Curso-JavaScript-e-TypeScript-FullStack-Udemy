import express from 'express';
import homeRoutes from './src/routes/homeRoutes.js';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json()); // retorna um middleware que só lê json
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app; // exporando a instancia da classe
