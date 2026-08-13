export type HeroSection = {
  type: 'hero';
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
  };
};

export type FeatureListSection = {
  type: 'feature-list';
  id: string;
  title: string;
  items: string[];
};

export type TestimonialSection = {
  type: 'testimonial';
  id: string;
  quote: string;
  author: string;
  role?: string;
};

export type ImageSection = {
  type: 'image';
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export type Section =
  HeroSection | FeatureListSection | TestimonialSection | ImageSection;

export type Page = {
  sections: Section[];
};
