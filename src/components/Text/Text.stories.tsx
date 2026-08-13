import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Text } from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  args: {
    as: 'p',
    children: 'this text is a paragraph',
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};
