import * as Yup from "yup";

import Product from "../models/Product";
import Caterogy from "../models/Category";

class ProductController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category_id: Yup.number().required(),
    });

    /* VALIDAÇÃO DE ERROS */

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    // UPLOAD DA IMAGEM - CRIAR UMA VARIAVEL
    const { filename: path } = request.file;
    const { name, price, category_id } = request.body;

    // IMPORTAR PARA O BANCO DE DADOS.
    const product = await Product.create({
      name,
      price,
      category_id,
      path,
    });

    return response.json({ product });
  }

  /* CAPTURAS TODOS OS PRODUTOS PARA LEVAR PARA ROTA */
  /* AMOSTRAR TAMBÉM VIA ARRAYDADOS DE OUTRA TABELA RELACIONADA */
  async index(request, response) {
    const products = await Product.findAll({
      include: [
        {
          model: Caterogy,
          as: "category",
          attributes: ["id", "name"],
        },
      ],
    });

    return response.json(products);
  }
}

export default new ProductController();
