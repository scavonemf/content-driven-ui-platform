import { HeroSection } from '@/src/content/types';
import { ActionLink } from '../ActionLink/ActionLink';

type HeroProps = HeroSection;

export function Hero({ id, eyebrow, title, description, cta }: HeroProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      aria-labelledby={headingId}
      className="mx-auto max-w-4xl px-6 py-24 text-center"
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-medium uppercase tracking-wide text-blue-600">
          {eyebrow}
        </p>
      )}

      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
        {title}
      </h1>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          {description}
        </p>
      )}

      {cta && (
        <div className="mt-8">
          <ActionLink href={cta.href}>{cta.label}</ActionLink>
        </div>
      )}
    </section>
  );
}
