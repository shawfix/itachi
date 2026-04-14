import type { CategoryModel } from '@/types/models/CategoryModel';
import type { PostModel } from '@/types/models/content/PostModel';

import type { ContentType } from './public';

export interface Post extends PostModel {
  type: 'post';
  categories: CategoryModel[];
  contentType: ContentType.POST;
}
