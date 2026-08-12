import type { Section } from '../content/types';
import { Hero } from './Hero/Hero';
import { FeatureList } from './FeatureList/FeatureList';
import { Testimonial } from './Testimonial/Testimonial';
import { ImageSection } from './ImageSection/ImageSection';

type PageRendererProps = {
  sections: Section[];
};

function assertNever(value: never): never {
  throw new Error(`Unhandled section type: ${JSON.stringify(value)}`);
}

export function PageRenderer({ sections }: PageRendererProps) {
  return (
    <>
      {sections.map(section => {
        switch (section.type) {
          case 'hero':
            return (
              <Hero
                key={section.id}
                eyebrow={section.eyebrow}
                title={section.title}
                description={section.description}
                ctaText={section.ctaText}
                ctaHref={section.ctaHref}
              />
            );
          case 'feature-list':
            return (
              <FeatureList
                key={section.id}
                title={section.title}
                items={section.items}
              />
            );
          case 'testimonial':
            return (
              <Testimonial
                key={section.id}
                quote={section.quote}
                author={section.author}
                role={section.role}
              />
            );
          case 'image':
            return (
              <ImageSection
                key={section.id}
                src={section.src}
                alt={section.alt}
                caption={section.caption}
              />
            );
          default:
            return assertNever(section);
        }
      })}
    </>
  );
}
