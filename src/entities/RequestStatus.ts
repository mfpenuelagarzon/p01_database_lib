import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class RequestStatus extends Model {}

RequestStatus.init({
  ...DatatableGenericFields,
  description: {
    type: DataTypes.STRING(100),
    allowNull: false,
  }
}, { sequelize, modelName: 'RequestStatus',tableName: 'request_status', timestamps: false });