import type { HeroModel } from '../models/HeroModel';
import type { SiteModel } from '../models/SiteModel';

export interface AppConfig {
  hero: HeroModel;
  site: SiteModel;
}
