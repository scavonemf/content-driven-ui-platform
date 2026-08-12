import type { Meta, StoryObj } from "@storybook/react";
import { FeatureList } from "./FeatureList";

const meta = {
  title: "Components/FeatureList",
  component: FeatureList,
  args: {
    title: "Our Features",
    items: ["Feature 1", "Feature 2", "Feature 3"],
  },
} satisfies Meta<typeof FeatureList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};