import {DataTypes, Model, Sequelize} from "sequelize";

export class Role extends Model {}

export const initRole = (sequelize: Sequelize) => {
    Role.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {sequelize, modelName: 'Role', tableName: 'role', timestamps: false});
}