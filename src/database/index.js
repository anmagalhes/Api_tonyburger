import Sequelize from "sequelize";

import Product from "../app/models/Product";
import User from "../app/models/User";

import configdatabase from "../config/database";

const models = [User, Product];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configdatabase);

    models.map((model) => model.init(this.connection));
    //.map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
