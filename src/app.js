import express from "express";
import routes from "./routes/routes";
import { resolve } from "path";

import "./database";

class App {
  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());

    /* TRAZER A ROTA PARA GERAR A URL DA IMAGEM VIRTUAL DO BANCO DE DADOS*/
    this.app.use(
      "/product-file",
      express.static(resolve(__dirname, "..", "Uploads"))
    );
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
