import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class ContractType extends Model {}

ContractType.init(DatatableGenericFields, { sequelize, modelName: 'ContractType',tableName: 'contract_type', timestamps: false });