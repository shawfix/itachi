import type { BaseModel } from './BaseModel';

export interface UserModel extends BaseModel {
  introduce: string;
  mail: string;
  name: string;
  username: string;
  avatar: string;
  lastLoginAt: string;
  lastLoginIp: string;
}
