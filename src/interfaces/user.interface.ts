import { UserType } from 'src/enums';

export interface IUser {
  id: number;
  phone: string;
  name: string;
  email: string;
  userType: UserType;
}
