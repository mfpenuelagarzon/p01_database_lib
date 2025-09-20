import { Model, Sequelize } from "sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class CampaignTypeSp extends Model {}

export const initCampaignTypeSp = (sequelize: Sequelize) => {
    CampaignTypeSp.init(DatatableGenericFields, { sequelize, modelName: 'CampaignTypeSp',tableName: 'campaign_type_sp', timestamps: false });
}