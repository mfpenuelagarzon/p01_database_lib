import { DataTypes, Model, Sequelize } from "sequelize";

export class Creative extends Model {}

export const initCreative = (sequelize: Sequelize) => {
  Creative.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    request_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    uuid: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    type: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    url: {
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
    },
  }, { sequelize, modelName: 'Creative', tableName: 'creative', timestamps: false });
}