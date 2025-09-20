import { Model } from "sequelize";
import { sequelize } from "../config/sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class DeviceType extends Model {}

DeviceType.init(DatatableGenericFields, { sequelize, modelName: 'DeviceType',tableName: 'device_type', timestamps: false });