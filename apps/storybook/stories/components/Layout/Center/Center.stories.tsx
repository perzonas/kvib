import { Center as KvibCenter } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCenter> = {
  title: "Komponenter/Layout/Center",
  component: KvibCenter,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibCenter>;

export const Center: Story = {
  args: { backgroundColor: "green.50", padding: "6" },
  render: (args) => <KvibCenter {...args}>En boks med sentrert innhold</KvibCenter>,
};