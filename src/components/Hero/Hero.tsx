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
        <p>{eyebrow}</p>

        <h1>{title}</h1>

        <p>
            {description}
        </p>

      {ctaText && 
        <a href={ctaHref} className="block w-fit mt-5 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            {ctaText ?? "Get Started"}
        </a>
    }
    </section>
  );
}