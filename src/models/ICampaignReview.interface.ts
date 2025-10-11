export interface ICampaignReview {
  id?: number;
  request_id: number;
  uuid: string;
  id_monday: string;
  platform_name: string;
  campaign_type_sp_id: number;
  budget_percent: number;
  optimization_objective: string;
  customer_type_id: number;
  segmentation_adl: string;
  created_at: Date;
  updated_at: Date;
  formats: string;
  location_type_id: number;
  device_type_id: number;
  conversion: boolean;
  contract_type_id: number;
  ecpm: number;
  fee?: number;
  publisher_type_id: number;
  campaign_level_2: string;
  campaign_level_3: string;
}
