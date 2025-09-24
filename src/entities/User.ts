import { DataTypes, Model, Sequelize } from "sequelize";
import { Role } from "./Role";

export class User extends Model {}

export const initUser = (sequelize: Sequelize) => {
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    external_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: false,
    }
  }, { sequelize, modelName: 'User', tableName: 'user', timestamps: false });

  User.belongsTo(Role, {foreignKey: 'role_id', targetKey: 'id', as: 'Role'});
}