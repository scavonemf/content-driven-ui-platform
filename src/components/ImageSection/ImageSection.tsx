import type { ImageSection } from '@/src/content/types';
import Image from 'next/image';

type ImageSectionProps = ImageSection;

export function ImageSection({ src, alt, caption }: ImageSectionProps) {
  return (
    <figure className="mx-auto max-w-5xl px-6 py-16">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        className="w-full rounded-2xl object-cover"
      />

      {caption && (
        <figcaption className="mt-3 text-sm text-zinc-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
