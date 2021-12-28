/*
METODOS MVC 
STORE => CADASTRAR / ADICIONAR
INDEX => LISTA VÁRIOS
SHOW => LISTA APENAS UM
UPDATE => ATUALIZAR
DELETE => DELETAR
V4 - CRIAÇÃO DO ID
*/
import { v4 } from "uuid";
import * as Yup from "yup";

import User from "../models/User";

class Usercontroller {
  async store(request, response) {

    /* PADRÃO DO OJETO QUE ESPERERAR RECEBER */
    const shema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      admin: Yup.boolean()

    })

     /* VALIDAÇÃO DE ERROS */

    try{
      await shema.validateSync(request.body, { abortEarly: false })
    } catch (err) {
      return response.status(400).json({ error: err.errors })
    }

  
    const { name, email, password, admin } = request.body;

    const userExists = await User.findOne({
      where: { email },
    });

    /* nulle, false, undefined = false */

    if (userExists) {
      return response.status(400).json({ error: "Este email já existem" });
    }
    
    /* ARRAY - COMO VAI SER INFORMAÇÃO PARA USUARIO DIGITAR */

    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
      admin,
    });

    return response.status(201).json({id: user.id, name, email, admin});
  }
}

export default new Usercontroller();
