import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Container } from './Container';

const meta = {
  title: 'UI/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="bg-zinc-100 p-8">Container content</div>,
  },
};
