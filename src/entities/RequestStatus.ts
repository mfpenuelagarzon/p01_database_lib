import {DataTypes, Model, Sequelize} from "sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class RequestStatus extends Model {}

export const initRequestStatus = (sequelize: Sequelize) => {

    RequestStatus.init({
        ...DatatableGenericFields,
        description: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    }, {sequelize, modelName: 'RequestStatus', tableName: 'request_status', timestamps: false});

}