import type { BaseModel } from '../BaseModel';

export interface PostModel extends BaseModel {
  categoryIds: string[];
  slug: string;
  summary: string | null;
  text: string;
  title: string;
}
