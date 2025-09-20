import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize";

export class Role extends Model {}

Role.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { sequelize, modelName: 'Role',tableName: 'role', timestamps: false });