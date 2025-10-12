import {DataTypes, Model, Sequelize} from "sequelize";
import { User } from "./User";

export class EventLog extends Model {}

export const initEventLog = (sequelize: Sequelize) => {
    EventLog.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        origin: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        milestone: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        step: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        payload: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {sequelize, modelName: 'EventLog', tableName: 'event_log', timestamps: false});
}