import { Text } from '../Text/Text';
import { Title } from '../Title/Title';

type TestimonialProps = {
  quote: string;
  author: string;
  role?: string;
};

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <section>
      <Text size="lg">"{quote}"</Text>

      <Title as="h3">{author}</Title>

      {role && <Text size="sm">{role}</Text>}
    </section>
  );
}
