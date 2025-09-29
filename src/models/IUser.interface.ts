export interface IUser {
  id?: number;
  role_id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  status: string;
}