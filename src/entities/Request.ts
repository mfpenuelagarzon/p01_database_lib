import {DataTypes, Model, Sequelize} from "sequelize";
import { User } from "./User";
import { Advertiser } from "./Advertiser";
import { Country } from "./Country";
import { RequestStatus } from "./RequestStatus";
import { RequestAssignment } from "./RequestAssignment";
import { CampaignInfo } from "./CampaignInfo";
import { Creative } from "./Creative";
import { CampaignReview } from "./CampaignReview";

export class Request extends Model {}

export const initRequest = (sequelize: Sequelize) => {

    Request.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        uuid: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        advertiser_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        country_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        month: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        request_status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {sequelize, modelName: 'Request', tableName: 'request', timestamps: false});

    // Belongs To
    Request.belongsTo(User, {foreignKey: 'customer_id', targetKey: 'id', as: 'Customer'});
    Request.belongsTo(Advertiser, {foreignKey: 'advertiser_id', targetKey: 'id', as: 'Advertiser'});
    Request.belongsTo(Country, {foreignKey: 'country_id', targetKey: 'id', as: 'Country'});
    Request.belongsTo(RequestStatus, {foreignKey: 'request_status_id', targetKey: 'id', as: 'RequestStatus'});

    // Has Many
    Request.hasMany(RequestAssignment, {foreignKey: 'request_id', as: 'RequestAssignments'});
    Request.hasMany(Creative, {foreignKey: 'request_id', as: 'Creatives'});

    // Has One
    Request.hasOne(CampaignInfo, {foreignKey: 'request_id', as: 'CampaignInfo'});
    Request.hasOne(CampaignReview, {foreignKey: 'request_id', as: 'CampaignReview'});
}
