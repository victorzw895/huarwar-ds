import type { Meta, StoryObj } from "@storybook/react";
import { Sample } from "@huarwar/ui";

const meta: Meta<typeof Sample> = {
  component: Sample,
  argTypes: {
    backgroundColor: {
      control: { type: "radio" },
      options: ["bg-brand-primary", "bg-brand-secondary", "bg-brand-tertiary"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sample>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => <Sample {...props}>Primary</Sample>,
};
