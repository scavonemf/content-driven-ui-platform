import Image from 'next/image';

type ImageSectionProps = {
  src: string;
  alt: string;
  caption?: string;
};

export function ImageSection({ src, alt, caption }: ImageSectionProps) {
  return (
    <figure>
      <Image src={src} alt={alt} width={1200} height={800} />

      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
