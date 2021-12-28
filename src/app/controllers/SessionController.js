import * as Yup from "yup";

import User from "../models/User";

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });


    /* VALIDADO OS DADOS PARA FAZER LOGIN NA APLICAÇÃO */

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({
        error: "Verificar a senha ou email está divergente do cadastro",
      });
    };

    const { email, password } = request.body;

    /* PEGAR O USUARIO E VAI ATÉ O BANCO DE DADOS, PARA VERIFICAR SE O USUARIO EXISTEM */

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return response.status(400).json({
        error: "Verificar a senha ou email está divergente do cadastro",
      });
    };

    /* REALIZANDO CHECK DE SENHA  */

    if (!(await user.checkPassword(password))) {
      return response.status(401).json({
        error: "Verificar a senha ou email está divergente do cadastro",
      });
    };

    return response.json({
      id: user.id,
      email,
      name: user.name,
      admin: user.admin,
    });
  }
}

export default new SessionController();
