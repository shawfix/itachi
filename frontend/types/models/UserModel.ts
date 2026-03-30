import type { BaseModel } from './_BaseModel';

export interface UserModel extends BaseModel {
  introduce: string;
  mail: string;
  name: string;
  username: string;
  avatar: string;
  lastLoginAt: string;
  lastLoginIp: string;
}
