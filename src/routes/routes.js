import { Router } from "express";

import multer from "multer";
import multerConfig from "../config/multer";

import ProductController from "../app/controllers/ProductController";
import SessionController from "../app/controllers/SessionController";
import UserController from "../app/controllers/UserController";


import authMiddleware from "../app/middlewares/auth";

const upload = multer(multerConfig);

const routes = new Router();

/* VALIDAÇÃO DA ROTA */

routes.get("/", (requeste, response) => {
  return response.json({ mesage: "Helo Word" });
});

routes.post("/users", UserController.store);

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware)  /* SERÁ CHAMADOS POR TODAS AS ROTAS ABAIXO DESTA*/

// UPLOAD.SIGLE - ENVIAR SOMENTE 1 FOTO POR VEZ
routes.post("/products", upload.single("file"), ProductController.store); 

// LISTA TODOS OS PRODUTOS
routes.get("/products", ProductController.index); 

export default routes;
