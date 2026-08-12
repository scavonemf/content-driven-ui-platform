import type { Page } from './types';

export const homePage: Page = {
  sections: [
    {
      id: 'hero-home',
      type: 'hero',
      eyebrow: 'Content-driven UI Platform',
      title: 'Build better digital experiences',
      description:
        'A content-driven platform built with reusable and accessible UI components.',
      ctaText: 'Explore platform',
      ctaHref: '/platform',
    },
    {
      id: 'feature-home',
      type: 'feature-list',
      title: 'Why this platform?',
      items: [
        'Reusable UI components',
        'Accessible interfaces',
        'Performance focused',
        'Content-driven architecture',
      ],
    },
    {
      id: 'testimonial-home',
      type: 'testimonial',
      quote: 'The platform helped us build better experiences.',
      author: 'Jane Smith',
      role: 'Product Designer',
    },
    {
      id: 'platform-image',
      type: 'image',
      src: '/platform.jpg',
      alt: 'Platform interface displayed on a laptop',
      caption: 'Our content-driven platform.',
    },
  ],
};
