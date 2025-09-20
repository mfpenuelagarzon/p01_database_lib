export interface IRequestAssignment {
  id?: number;
  request_id: number;
  service_partner_id: number;
  type: string;
  created_at: Date;
  status: string;
}
