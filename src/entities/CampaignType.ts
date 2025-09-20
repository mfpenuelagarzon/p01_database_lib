import { Model } from "sequelize";
import { sequelize } from "../config/sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class CampaignType extends Model {}

CampaignType.init(DatatableGenericFields, { sequelize, modelName: 'CampaignType',tableName: 'campaign_type', timestamps: false });