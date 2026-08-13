import type { Section } from '@/src/content/types';

import { Hero } from '@/src/components/Hero/Hero';
import { FeatureList } from '@/src/components/FeatureList/FeatureList';
import { Testimonial } from '@/src/components/Testimonial/Testimonial';
import { ImageSection } from '@/src/components/ImageSection/ImageSection';

type SectionRendererProps = {
  section: Section;
};

function assertNever(value: never): never {
  throw new Error(`Unhandled section type: ${JSON.stringify(value)}`);
}

export function SectionRenderer({ section }: SectionRendererProps) {
  switch (section.type) {
    case 'hero':
      return <Hero key={section.id} {...section} />;

    case 'feature-list':
      return <FeatureList key={section.id} {...section} />;

    case 'testimonial':
      return <Testimonial key={section.id} {...section} />;

    case 'image':
      return <ImageSection key={section.id} {...section} />;

    default:
      return assertNever(section);
  }
}
