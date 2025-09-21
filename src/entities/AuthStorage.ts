import { DataTypes, Model, Sequelize } from "sequelize";

export class AuthStorage extends Model {}

export const initAuthStorage = (sequelize: Sequelize) => {
  AuthStorage.init({
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
      },
      uuid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      payload: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      status: {
          type: DataTypes.STRING,
          allowNull: false,
      },
  }, { sequelize, modelName: 'AuthStorage',tableName: 'auth_storage', timestamps: false });
}