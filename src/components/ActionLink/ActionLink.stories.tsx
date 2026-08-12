import type { Meta, StoryObj } from "@storybook/react";
import { ActionLink } from "./ActionLink";

const meta = {
  title: "Components/ActionLink",
  component: ActionLink,
  args: {
    href: "/platform",
    children: "Explore platform",
  },
} satisfies Meta<typeof ActionLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};