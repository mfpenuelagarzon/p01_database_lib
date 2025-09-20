import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize";
import { User } from "./User";

export class Event extends Model {}

Event.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  origin: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  milestone: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  step: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  payload: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, { sequelize, modelName: 'Event',tableName: 'event', timestamps: false });

Event.belongsTo(User, {foreignKey: 'user_id', targetKey: 'id', as: 'User'});