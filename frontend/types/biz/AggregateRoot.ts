import type { SeoOptionModel } from '../models/SeoOptionModel';
import type { UserModel } from '../models/UserModel';

export interface AggregateRoot {
  user: UserModel;
  seo: SeoOptionModel;
}
