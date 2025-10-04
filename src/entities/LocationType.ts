import {DataTypes, Model, Sequelize} from "sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class LocationType extends Model {}

export const initLocationType = (sequelize: Sequelize) => {
    LocationType.init(DatatableGenericFields, {
        sequelize,
        modelName: 'LocationType',
        tableName: 'location_type',
        timestamps: false
    });
}