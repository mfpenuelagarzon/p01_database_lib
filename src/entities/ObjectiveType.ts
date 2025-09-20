import {Model, Sequelize} from "sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class ObjectiveType extends Model {}

export const initObjectiveType = (sequelize: Sequelize) => {
    ObjectiveType.init(DatatableGenericFields, {
        sequelize,
        modelName: 'ObjectiveType',
        tableName: 'objective_type',
        timestamps: false
    });
}