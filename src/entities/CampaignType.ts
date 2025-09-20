import { Model, Sequelize } from "sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class CampaignType extends Model {}

export const initCampaignType = (sequelize: Sequelize) => {
    CampaignType.init(DatatableGenericFields, { sequelize, modelName: 'CampaignType',tableName: 'campaign_type', timestamps: false });
}