import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta = {
  title: "Components/Title",
  component: Title,
  args: {
    as: "h1",
    children: "Our title",
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    as: "h2",
  }, 
};

export const Tertiary: Story = {
  args: {
    as: "h3",
  }, 
};