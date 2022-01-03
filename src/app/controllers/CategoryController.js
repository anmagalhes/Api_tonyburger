import * as Yup from "yup";

import Category from "../models/Category";

class CategoryController {
  async store(request, response) {
    try{
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    /* VALIDAÇÃO DE ERROS */

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name } = request.body;

    /* VALIDAÇÃO SE JÁ EXISTEM DADOS NO BANCO DE DADOS*/

    const categoryExist = await Category.findOne({
      where:{
        name,
      }
    })

    if(categoryExist){
      return response.status(400).json({error: 'Caterogia já existem'})
    }



    // IMPORTAR PARA O BANCO DE DADOS.
    const {id} = await Category.create({name})

    return response.json({ name, id})
  }catch(err){
    console.log(err)
  }

  }

  /* CAPTURAS TODOS OS PRODUTOS PARA LEVAR PARA ROTA */
  async index(request, response) {
    const caterogy = await Category.findAll();

    return response.json(caterogy);
  }
}


export default new CategoryController();
