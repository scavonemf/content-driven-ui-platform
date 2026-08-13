import type { Page } from '@/src/content/types';
import { SectionRenderer } from '@/src/components/SectionRenderer/SectionRenderer';

type PageRendererProps = {
  page: Page;
};

export function PageRenderer({ page }: PageRendererProps) {
  return (
    <main>
      {page.sections.map(section => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </main>
  );
}
