export type HeroSection = {
  type: 'hero';
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
};

export type FeatureListSection = {
  type: 'feature-list';
  id: string;
  title: string;
  items: string[];
};

export type TestimonialSection = {
  id: string;
  type: 'testimonial';
  quote: string;
  author: string;
  role?: string;
};

export type ImageSection = {
  id: string;
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
};

export type Section =
  HeroSection | FeatureListSection | TestimonialSection | ImageSection;

export type Page = {
  sections: Section[];
};
