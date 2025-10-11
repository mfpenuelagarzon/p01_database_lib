import {Model, Sequelize} from "sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class PlatformType extends Model {}

export const initPlatformType = (sequelize: Sequelize) => {
    PlatformType.init(DatatableGenericFields, {
        sequelize,
        modelName: 'PlatformType',
        tableName: 'platform_type',
        timestamps: false
    });
}