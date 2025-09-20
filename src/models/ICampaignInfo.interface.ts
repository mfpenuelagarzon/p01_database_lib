export interface ICampaignInfo {
  id?: number;
  request_id: number;
  uuid: string;
  name: string;
  from: Date;
  to: Date;
  campaign_type_id: number;
  purchase_type_id: number;
  objective_type_id: number;
  budget: number;
  kpi: number;
  segmentation: string;
  platforms: string;
  product: string;
  utm: string;
  created_at: Date;
  updated_at: Date;
}
