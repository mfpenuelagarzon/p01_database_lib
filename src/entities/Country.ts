import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class Country extends Model {}

Country.init({
  id: DatatableGenericFields.id,
  name: DatatableGenericFields.name,
  abbreviation: {
    type: DataTypes.STRING(5),
    allowNull: false,
  }
}, { sequelize, modelName: 'Country',tableName: 'country', timestamps: false });