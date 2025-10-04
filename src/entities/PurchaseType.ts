import {DataTypes, Model, Sequelize} from "sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class PurchaseType extends Model {}

export const initPurchaseType = (sequelize: Sequelize) => {
    PurchaseType.init({
        ...DatatableGenericFields,
        objective: {
            type: DataTypes.STRING(45),
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'PurchaseType',
        tableName: 'purchase_type',
        timestamps: false
    });
}