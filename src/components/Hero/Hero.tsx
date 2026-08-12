import { ActionLink } from "../../components/ActionLink/ActionLink";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
};

export function Hero({eyebrow,
  title,
  description,
  ctaText,
  ctaHref,
}: HeroProps) {
  return (
    <section>
        {eyebrow && <Text size="sm">{eyebrow}</Text>}   

       <Title>{title}</Title>

        {description && (
          <Text size="lg">
            {description}
          </Text>
        )}

      {ctaText && ctaHref &&
        <ActionLink href={ctaHref}>
          {ctaText}
        </ActionLink>
      }
    </section>
  );
}