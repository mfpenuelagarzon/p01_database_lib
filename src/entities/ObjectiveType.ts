import { Model } from "sequelize";
import { sequelize } from "../config/sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class ObjectiveType extends Model {}

ObjectiveType.init(DatatableGenericFields, { sequelize, modelName: 'ObjectiveType',tableName: 'objective_type', timestamps: false });