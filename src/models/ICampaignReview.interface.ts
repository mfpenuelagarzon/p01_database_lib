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
  location: string;
  device_type_id: number;
  conversion: boolean;
  contract_type_id: number;
}
