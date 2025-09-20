import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  host: 'localhost',
  database: 'marketing_request_db',
  port: 3306,
  username: 'marketing_user',
  password: 'MarketingApp25@',
  dialect: "mysql"
})