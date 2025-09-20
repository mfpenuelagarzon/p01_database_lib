import { DataTypes, Model, Sequelize } from "sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class Country extends Model {}

export const initCountry = (sequelize: Sequelize) => {
  Country.init({
    id: DatatableGenericFields.id,
    name: DatatableGenericFields.name,
    abbreviation: {
      type: DataTypes.STRING(5),
      allowNull: false,
    }
  }, { sequelize, modelName: 'Country',tableName: 'country', timestamps: false });
}