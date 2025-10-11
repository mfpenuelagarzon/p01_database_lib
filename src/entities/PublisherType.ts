import {Model, Sequelize} from "sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class PublisherType extends Model {}

export const initPublisherType = (sequelize: Sequelize) => {
    PublisherType.init(DatatableGenericFields, {
        sequelize,
        modelName: 'PublisherType',
        tableName: 'publisher_type',
        timestamps: false
    });
}