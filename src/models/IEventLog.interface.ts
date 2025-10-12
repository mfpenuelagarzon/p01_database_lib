export interface IEventLog {
  id?: number;
  origin: string;
  milestone: string;
  step: string;
  payload: string;
  created_at: Date;
}