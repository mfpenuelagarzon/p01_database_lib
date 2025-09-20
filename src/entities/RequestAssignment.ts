import {DataTypes, Model, Sequelize} from "sequelize";
import { User } from "./User";

export class RequestAssignment extends Model {}

export const initRequestAssignment = (sequelize: Sequelize) => {

    RequestAssignment.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        request_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        service_partner_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING(45),
            allowNull: false,
        }
    }, { sequelize, modelName: 'RequestAssignment', tableName: 'request_assignment', timestamps: false });

    RequestAssignment.belongsTo(User, {foreignKey: 'service_partner_id', targetKey: 'id', as: 'ServicePartner'});
}
