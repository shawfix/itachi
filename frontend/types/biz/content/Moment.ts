import type { AlbumModel } from '@/types/models/AlbumModel';
import type { MomentModel } from '@/types/models/content/MomentModel';

import type { ContentType } from './public';

export interface Moment extends MomentModel {
  albums: AlbumModel[];
  contentType: ContentType.MOMENT;
}
