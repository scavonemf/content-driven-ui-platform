import type { Section } from "../content/types";
import { Hero } from "./Hero/Hero";
import { FeatureList } from "./FeatureList/FeatureList";


type PageRendererProps = {
  sections: Section[];
};

function assertNever(value: never): never {
  throw new Error(`Unhandled section type: ${JSON.stringify(value)}`);
}

export function PageRenderer({ sections }: PageRendererProps) {
  return (
    <>
      {sections.map((section) => {
        switch (section.type) {
          case "hero":
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
          case "feature-list":
            return (
              <FeatureList
                key={section.id}
                title={section.title}
                items={section.items}
              />
            );
          default:
            return assertNever(section);
        }
      })}
    </>
  );
}