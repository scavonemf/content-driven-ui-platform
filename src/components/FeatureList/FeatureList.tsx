import type { FeatureListSection } from '@/src/content/types';
import { Text } from '../Text/Text';
import { Title } from '../Title/Title';
import { Container } from '../ui/Container/Container';

export function FeatureList({ title, items }: FeatureListSection) {
  return (
    <section className="py-16">
      <Container>
        <Title as="h2">{title}</Title>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <Text>{item}</Text>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
