import type { Meta, StoryObj } from "@storybook/react";
import { Stack, type StackProps } from "@huarwar/ui";

// TODO: look into providing multiple controls for spacing & direction i.e responsive object
const meta: Meta<typeof Stack> = {
  component: Stack,
  argTypes: {
    spacing: {
      control: "select",
      options: [
        "space-0",
        "space-25",
        "space-50",
        "space-75",
        "space-100",
        "space-125",
        "space-150",
        "space-200",
        "space-250",
        "space-300",
        "space-400",
        "space-500",
        "space-600",
        "space-700",
        "space-800",
        "space-900",
        "space-1000",
        "space-1100",
        "space-1200",
        "space-1300"
    ]
    },
    direction: {
      control: { type: "radio" },
      options: ["row", "column", "row-reverse", "column-reverse"],
    },
    component: {
      control: { type: "radio" },
      options: ["div", "span"],
    },
    alignItems: {
      control: { type: "radio" },
      options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
    },
    justifyContent: {
      control: { type: "radio" },
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stack>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (props: StackProps) => (
    <Stack {...props}>
      <div style={{ border: "1px solid black" }}>item 1</div>
      <div style={{ border: "1px solid black" }}>item 2</div>
      <div style={{ border: "1px solid black" }}>item 3</div>
      <div style={{ border: "1px solid black" }}>item 4</div>
    </Stack>
  ),
};
