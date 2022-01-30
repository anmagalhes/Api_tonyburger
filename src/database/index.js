import Sequelize from "sequelize";
import mongoose from "mongoose";

import Product from "../app/models/Product";
import User from "../app/models/User";
import Category from "../app/models/Category";

import configdatabase from "../config/database";

const models = [User, Product, Category];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(configdatabase);

    /* RELACIONAMENTOS ENTRE TABELAS*/

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }


  mongo() {
    this.mongoConnection = mongoose
      .connect("mongodb://localhost:27017/tonyburger", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDB Connected..."))
      .catch((err) => console.log(err));
  }
}
export default new Database();
