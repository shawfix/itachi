import type { BaseModel } from '../BaseModel';

export interface MomentModel extends BaseModel {
  albumIds: string[];
  images: string[];
  text: string;
}
