/*
Vamos adicionar o sucrase e o nodemon para facilitar a implementação de Js no node

yarn add sucrase nodemon -D

node puro a importação é:

const express = require("express");
const routes = require("./routes");

com o sucrase fica:

import express from 'express';
import routes from './routes';

exportar

antigamente:
module.exports = new App().server;

novo:
export default new App().server;
*/

import express from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
