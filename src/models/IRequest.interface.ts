export interface IRequest {
  id?: number;
  uuid: string;
  customer_id: number;
  advertiser_id: number;
  email: string;
  country_id: number;
  year: number;
  month: string;
  fee: number;
  created_at: Date;
  updated_at: Date;
  request_status_id: number;
}
