import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from "@huarwar/ui";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    style: {
      control: { type: "radio" },
      options: ["fill", "outline", "text"],
    },
    size: {
      control: { type: "radio" },
      options: ["large", "medium", "small"],
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "secondary", "neutral"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props: ButtonProps) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Primary
    </Button>
  ),
  args: {
    children: "Primary",
    color: "primary",
  },
};

export const Secondary: Story = {
  render: (props: ButtonProps) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Secondary
    </Button>
  ),
  args: {
    children: "Secondary",
    color: "secondary",
  },
};

export const Neutral: Story = {
  render: (props: ButtonProps) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Neutral
    </Button>
  ),
  args: {
    children: "Neutral",
    color: "neutral",
  },
};

export const Fill: Story = {
  render: (props: ButtonProps) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Fill
    </Button>
  ),
  args: {
    children: "Fill",
    style: "fill",
  },
};

export const Outline: Story = {
  render: (props: ButtonProps) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Outline
    </Button>
  ),
  args: {
    children: "Outline",
    style: 'outline',
  },
};

export const Text: Story = {
  render: (props: ButtonProps) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Text
    </Button>
  ),
  args: {
    children: "Text",
    style: 'text'
  },
};

export const Small: Story = {
  render: (props: ButtonProps) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Small
    </Button>
  ),
  args: {
    children: "Small",
    size: 'small'
  },
};

export const Medium: Story = {
  render: (props: ButtonProps) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Medium
    </Button>
  ),
  args: {
    children: "Medium",
    size: 'medium'
  },
};

export const Large: Story = {
  render: (props: ButtonProps) => (
    <Button
      {...props}
      onClick={(): void => {
        // eslint-disable-next-line no-alert -- alert for demo
        alert("Hello from Turborepo!");
      }}
    >
      Large
    </Button>
  ),
  args: {
    children: "Large",
    size: 'large'
  },
};
