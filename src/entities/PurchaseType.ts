import { Model } from "sequelize";
import { sequelize } from "../config/sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class PurchaseType extends Model {}

PurchaseType.init(DatatableGenericFields, { sequelize, modelName: 'PurchaseType',tableName: 'purchase_type', timestamps: false });