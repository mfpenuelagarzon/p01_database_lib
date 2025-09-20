import { Model, Sequelize } from "sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class ContractType extends Model {}

export const initContractType = (sequelize: Sequelize) => {
    ContractType.init(DatatableGenericFields, { sequelize, modelName: 'ContractType',tableName: 'contract_type', timestamps: false });
}