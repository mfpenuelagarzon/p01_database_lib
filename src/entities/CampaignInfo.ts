import { DataTypes, Model, Sequelize } from "sequelize";
import { CampaignType } from "./CampaignType";
import { PurchaseType } from "./PurchaseType";
import { ObjectiveType } from "./ObjectiveType";

export class CampaignInfo extends Model {}

export const initCampaignInfo = (sequelize: Sequelize) => {
  CampaignInfo.init({
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
    uuid: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    from: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    to: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    campaign_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purchase_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    objective_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    budget: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    kpi: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    segmentation: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    product: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    utm: {
      type: DataTypes.TEXT,
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
  }, { sequelize, modelName: 'CampaignInfo', tableName: 'campaign_info', timestamps: false });

  CampaignInfo.belongsTo(CampaignType, {foreignKey: 'campaign_type_id', targetKey: 'id', as: 'CampaignType'});
  CampaignInfo.belongsTo(PurchaseType, {foreignKey: 'purchase_type_id', targetKey: 'id', as: 'PurchaseType'});
  CampaignInfo.belongsTo(ObjectiveType, {foreignKey: 'objective_type_id', targetKey: 'id', as: 'ObjectiveType'});
}