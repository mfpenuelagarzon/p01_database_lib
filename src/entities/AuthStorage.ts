import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize";

export class AuthStorage extends Model {}

AuthStorage.init({
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    payload: {
      type: DataTypes.JSON,
      allowNull: false,
    },
}, { sequelize, modelName: 'AuthStorage',tableName: 'auth_storage', timestamps: false });