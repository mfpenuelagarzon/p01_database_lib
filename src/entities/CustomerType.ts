import { Model } from "sequelize";
import { sequelize } from "../config/sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class CustomerType extends Model {}

CustomerType.init(DatatableGenericFields, { sequelize, modelName: 'CustomerType',tableName: 'customer_type', timestamps: false });