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
import { initCustomerType } from "./entities/CustomerType";
import { initDeviceType } from "./entities/DeviceType";
import { initLocationType } from "./entities/LocationType";
import { initEventLog } from "./entities/EventLog";
import { initPurchaseType } from "./entities/PurchaseType";
import { initRequest } from "./entities/Request";
import { initRequestAssignment } from "./entities/RequestAssignment";
import { initRequestStatus } from "./entities/RequestStatus";
import { initRole } from "./entities/Role";
import { initUser } from "./entities/User";
import {initPlatformType, initPublisherType} from "./entities";

export class Database {
  private static instance: Sequelize;

  static init(config?: DbConfig): Sequelize {
    if (!Database.instance) {
        if (config) Database.instance = createSequelize(config);
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
      // Inicialización de maestras
      initRole(sequelize);
      initAdvertiser(sequelize);
      initAuthStorage(sequelize);
      initPurchaseType(sequelize);
      initCampaignType(sequelize);
      initCampaignTypeSp(sequelize);
      initContractType(sequelize);
      initCustomerType(sequelize);
      initDeviceType(sequelize);
      initLocationType(sequelize);
      initCountry(sequelize);
      initRequestStatus(sequelize);
      initPlatformType(sequelize);
      initPublisherType(sequelize);

      // Dependientes
      initUser(sequelize);
      initEventLog(sequelize);
      initRequestAssignment(sequelize);
      initCreative(sequelize);
      initCampaignInfo(sequelize);
      initCampaignReview(sequelize);
      initRequest(sequelize);
  }
}
