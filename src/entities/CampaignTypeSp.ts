import { Model } from "sequelize";
import { sequelize } from "../config/sequelize";
import { DatatableGenericFields } from "./generic/DatatableGenericFields";

export class CampaignTypeSp extends Model {}

CampaignTypeSp.init(DatatableGenericFields, { sequelize, modelName: 'CampaignTypeSp',tableName: 'campaign_type_sp', timestamps: false });