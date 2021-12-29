import * as Yup from "yup";

import Product from "../models/Product";

class ProductController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category: Yup.string().required(),
    });

    /* VALIDAÇÃO DE ERROS */

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    // UPLOAD DA IMAGEM - CRIAR UMA VARIAVEL
    const { filename: path } = request.file;
    const { name, price, category } = request.body;

    // IMPORTAR PARA O BANCO DE DADOS.
    const product = await Product.create({
      name,
      price,
      category,
      path,
    });

    return response.json({ product });
  }

  /* CAPTURAS TODOS OS PRODUTOS PARA LEVAR PARA ROTA */
  async index(request, response) {
    const products = await Product.findAll();
    
   return response.json(products);
  }
}

export default new ProductController();