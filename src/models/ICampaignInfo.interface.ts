export interface ICampaignInfo {
  id?: number;
  request_id: number;
  uuid: string;
  name: string;
  from: string;
  to: string;
  campaign_type_id: number;
  purchase_type_id: number;
  objective_type_id: number;
  fee: number;
  budget: number;
  kpi: number;
  segmentation: string;
  platforms: string;
  product: string;
  url: string;
  utm: string;
  created_at: Date;
  updated_at: Date;
}
