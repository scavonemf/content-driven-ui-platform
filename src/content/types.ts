export type HeroSection = {
  type: "hero";
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
};

export type FeatureListSection = {
  type: "feature-list";
  id: string;
  title: string;
  items: string[];
};

export type Section = HeroSection | FeatureListSection;

export type Page = {
  sections: Section [];
};