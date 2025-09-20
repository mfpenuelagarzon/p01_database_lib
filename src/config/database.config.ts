import { Sequelize } from "sequelize-typescript";

export interface DbConfig {
  dialect: "mysql" | "postgres" | "sqlite";
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export const createSequelize = (config: DbConfig): Sequelize => {
  return new Sequelize({
    dialect: config.dialect,
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password,
    database: config.database,
    logging: false,
  });
};