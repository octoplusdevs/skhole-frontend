export interface IUser {
  id?: number | string;
  name: string;
  email: string;
  role?: "ADMIN" | "STUDANT" | "TEACHER" | string;
}
