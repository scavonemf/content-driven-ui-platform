import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Testimonial } from './Testimonial';

const meta = {
  title: 'Sections/Testimonial',
  component: Testimonial,
} satisfies Meta<typeof Testimonial>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'testimonial',
    id: 'testimonial-story',
    quote: 'The platform helped us build better experiences.',
    author: 'Jane Smith',
    role: 'Product Designer',
  },
};
