import { Model, Sequelize } from "sequelize";
// import { sequelize } from "../config/sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class Advertiser extends Model {}

export const initAdvertiser = (sequelize: Sequelize) => {
  Advertiser.init(DatatableGenericFields, { sequelize, modelName: 'Advertiser',tableName: 'advertiser', timestamps: false });  
}
