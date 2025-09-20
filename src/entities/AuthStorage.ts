import { DataTypes, Model, Sequelize } from "sequelize";

export class AuthStorage extends Model {}

export const initAuthStorage = (sequelize: Sequelize) => {
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
}