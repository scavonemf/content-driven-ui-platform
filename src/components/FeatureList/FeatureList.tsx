import { FeatureListSection } from '@/src/content/types';
import { Text } from '../Text/Text';
import { Title } from '../Title/Title';

type FeatureListProps = FeatureListSection;

export function FeatureList({ title, items }: FeatureListProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Title as="h2">{title}</Title>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {items.map(item => (
          <li
            key={item}
            className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <Text>{item}</Text>
          </li>
        ))}
      </ul>
    </section>
  );
}
