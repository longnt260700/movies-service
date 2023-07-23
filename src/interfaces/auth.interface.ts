import { UserType } from 'src/enums';

export interface IAuthPermission {
  userType: UserType;
  permission?: string;
}

export type IAuthReflexPermission = {
  specs: UserType[];
  isOnly?: boolean;
};
export interface IGenerateJWT {
  id: number;
}
