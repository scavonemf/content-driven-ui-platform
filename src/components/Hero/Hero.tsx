import type { HeroSection } from '../../content/types';

import { ActionLink } from '../ActionLink/ActionLink';
import { Text } from '../Text/Text';
import { Title } from '../Title/Title';
import { Container } from '../ui/Container/Container';

type HeroProps = HeroSection;

export function Hero({ id, eyebrow, title, description, cta }: HeroProps) {
  const headingId = `${id}-heading`;

  return (
    <section aria-labelledby={headingId} className="py-24 text-center">
      <Container>
        <div className="mx-auto max-w-4xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-primary">
              {eyebrow}
            </p>
          )}

          <Title id={headingId} as="h1" className="sm:text-6xl">
            {title}
          </Title>

          {description && (
            <div className="mx-auto mt-6 max-w-2xl">
              <Text size="lg">{description}</Text>
            </div>
          )}

          {cta && (
            <div className="mt-8">
              <ActionLink href={cta.href}>{cta.label}</ActionLink>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
