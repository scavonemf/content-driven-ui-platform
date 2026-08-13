import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { FeatureList } from './FeatureList';

const meta = {
  title: 'Sections/FeatureList',
  component: FeatureList,
} satisfies Meta<typeof FeatureList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'feature-list',
    id: 'feature-list-story',
    title: 'Why this platform?',
    items: [
      'Reusable UI components',
      'Accessible interfaces',
      'Performance focused',
      'Content-driven architecture',
    ],
  },
};
