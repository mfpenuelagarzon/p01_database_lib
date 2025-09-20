import { Sequelize } from "sequelize-typescript";
import { createSequelize, DbConfig } from "./config/database.config";
import { initAdvertiser } from "./entities/Advertiser";

export class Database {
  private static instance: Sequelize;

  static init(config: DbConfig): Sequelize {
    if (!Database.instance) {
      Database.instance = createSequelize(config);
    }
    return Database.instance;
  }

  static getConnection(): Sequelize {
    if (!Database.instance) {
      throw new Error("Database not initialized. Call Database.init first.");
    }
    Database.initModels(Database.instance);
    return Database.instance;
  }

  static initModels(sequelize: Sequelize) {
    initAdvertiser(sequelize);
  }
}
