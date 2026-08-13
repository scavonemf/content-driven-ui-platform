import { TestimonialSection } from '@/src/content/types';
import { Text } from '@/src/components/Text/Text';
import { Title } from '@/src/components/Title/Title';

type TestimonialProps = TestimonialSection;

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center">
      <blockquote className="text-2xl font-medium leading-10 text-zinc-800">
        &lsquo;{quote}&rsquo;
      </blockquote>

      <Title as="h3">{author}</Title>

      {role && <Text size="sm">{role}</Text>}
    </section>
  );
}
