import { DataTypes, Model, Sequelize } from "sequelize";
import { CampaignTypeSp } from "./CampaignTypeSp";
import { CustomerType } from "./CustomerType";
import { DeviceType } from "./DeviceType";
import { ContractType } from "./ContractType";
import {LocationType} from "./LocationType";
import {PublisherType} from "./PublisherType";

export class CampaignReview extends Model {}

export const initCampaignReview = (sequelize: Sequelize) => {
  CampaignReview.init({
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
    id_monday: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    platform_name: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    campaign_type_sp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    budget_percent: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    optimization_objective: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    customer_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    segmentation_adl: {
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
    formats: {
      type: DataTypes.JSON,
      allowNull: false
    },
    location_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    device_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    conversion: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    contract_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ecpm: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    fee: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    publisher_type_id: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    campaign_level_2: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    campaign_level_3: {
      type: DataTypes.NUMBER,
      allowNull: false,
    }
  }, { sequelize, modelName: 'CampaignReview', tableName: 'campaign_review', timestamps: false });


  CampaignReview.belongsTo(CampaignTypeSp, {foreignKey: 'campaign_type_sp_id', targetKey: 'id', as: 'CampaignTypeSp'});
  CampaignReview.belongsTo(CustomerType, {foreignKey: 'customer_type_id', targetKey: 'id', as: 'CustomerType'});
  CampaignReview.belongsTo(DeviceType, {foreignKey: 'device_type_id', targetKey: 'id', as: 'DeviceType'});
  CampaignReview.belongsTo(ContractType, {foreignKey: 'contract_type_id', targetKey: 'id', as: 'ContractType'});
  CampaignReview.belongsTo(LocationType, {foreignKey: 'location_type_id', targetKey: 'id', as: 'LocationType'});
  CampaignReview.belongsTo(PublisherType, {foreignKey: 'publisher_type_id', targetKey: 'id', as: 'PublisherType'});
}
