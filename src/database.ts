import { Sequelize } from "sequelize-typescript";
import { createSequelize, DbConfig } from "./config/database.config";
import { initAdvertiser } from "./entities/Advertiser";
import { initAuthStorage } from "./entities/AuthStorage";
import { initCampaignInfo } from "./entities/CampaignInfo";
import { initCampaignReview } from "./entities/CampaignReview";
import { initCampaignType } from "./entities/CampaignType";
import { initCampaignTypeSp } from "./entities/CampaignTypeSp";
import { initContractType } from "./entities/ContractType";
import { initCountry } from "./entities/Country";
import { initCreative } from "./entities/Creative";
import {initCustomerType} from "./entities/CustomerType";
import {initDeviceType} from "./entities/DeviceType";
import {initEvent} from "./entities/Event";
import {initObjectiveType} from "./entities/ObjectiveType";
import {initPurchaseType} from "./entities/PurchaseType";
import {initRequest} from "./entities/Request";
import {initRequestAssignment} from "./entities/RequestAssignment";
import {initRequestStatus} from "./entities/RequestStatus";
import {initRole} from "./entities/Role";
import {initUser} from "./entities/User";

export class Database {
  private static instance: Sequelize;

  static init(config: DbConfig): Sequelize {
    if (!Database.instance) {
      Database.instance = createSequelize(config);
    }
    return Database.instance;
  }

  static getConnection(): Sequelize {
    if (!Database.instance) {
      throw new Error("Database not initialized. Call Database.init first.");
    }
    Database.initModels(Database.instance);
    return Database.instance;
  }

  static initModels(sequelize: Sequelize) {
    initAdvertiser(sequelize);
    initAuthStorage(sequelize);
    initCampaignInfo(sequelize);
    initCampaignReview(sequelize);
    initCampaignType(sequelize);
    initCampaignTypeSp(sequelize);
    initContractType(sequelize);
    initCountry(sequelize);
    initCreative(sequelize);
    initCustomerType(sequelize);
    initDeviceType(sequelize);
    initEvent(sequelize);
    initObjectiveType(sequelize);
    initPurchaseType(sequelize);
    initRequest(sequelize);
    initRequestAssignment(sequelize);
    initRequestStatus(sequelize);
    initRole(sequelize);
    initUser(sequelize);
  }
}
