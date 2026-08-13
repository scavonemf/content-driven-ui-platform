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
      return <Hero {...section} />;

    case 'feature-list':
      return <FeatureList {...section} />;

    case 'testimonial':
      return <Testimonial {...section} />;

    case 'image':
      return <ImageSection {...section} />;

    default:
      return assertNever(section);
  }
}
