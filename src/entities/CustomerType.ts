import {Model, Sequelize} from "sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class CustomerType extends Model {}

export const initCustomerType = (sequelize: Sequelize) => {
    CustomerType.init(DatatableGenericFields, {
        sequelize,
        modelName: 'CustomerType',
        tableName: 'customer_type',
        timestamps: false
    });
}