import {Model, Sequelize} from "sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class DeviceType extends Model {}

export const initDeviceType = (sequelize: Sequelize) => {
    DeviceType.init(DatatableGenericFields, {
        sequelize,
        modelName: 'DeviceType',
        tableName: 'device_type',
        timestamps: false
    });
}