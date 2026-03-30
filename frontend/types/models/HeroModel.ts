export interface HeroModel {
  title: Title;
  description: string;
}

export interface Title {
  template: TemplateItem[];
}

interface TemplateItem {
  type: string;
  text?: string;
  class?: string;
}
