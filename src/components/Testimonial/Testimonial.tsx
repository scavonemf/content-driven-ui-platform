import type { TestimonialSection } from '@/src/content/types';
import { Text } from '@/src/components/Text/Text';
import { Title } from '@/src/components/Title/Title';
import { Container } from '@/src/components/ui/Container/Container';

type TestimonialProps = TestimonialSection;

export function Testimonial({
  quote,
  author,
  role,
}: TestimonialProps) {
  return (
    <section className="py-16">
      <Container>
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl font-medium leading-10 text-zinc-800">
            “{quote}”
          </blockquote>

          <figcaption className="mt-6">
            <Title as="h3">{author}</Title>

            {role && <Text size="sm">{role}</Text>}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}