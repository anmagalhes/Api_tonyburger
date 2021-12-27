import { Router } from "express";

import SessionController from "../app/controllers/SessionController.js";
import UserController from "../app/controllers/UserController.js";

const routes = new Router();

/* VALIDAÇÃO DA ROTA */

routes.get("/", (requeste, response) => {
  return response.json({ mesage: "Helo Word" });
});

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

export default routes;
