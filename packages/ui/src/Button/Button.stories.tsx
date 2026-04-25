import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "accent-1",
        "accent-2",
        "accent-3",
        "success",
        "error",
        "alert",
        "info",
        "outline",
        "ghost",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
  },
};

export const SemanticVariants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Button variant="default">Default Form</Button>
      <Button variant="accent-1">Accent 1 Primary</Button>
      <Button variant="accent-2">Accent 2 Checkout</Button>
      <Button variant="accent-3">Accent 3 Danger</Button>
      <Button variant="success">Success Action</Button>
      <Button variant="error">Error Action</Button>
      <Button variant="alert">Alert Action</Button>
      <Button variant="info">Info Action</Button>
      <Button variant="outline">Outline Secondary</Button>
      <Button variant="ghost">Ghost Subtle</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap items-center">
      <Button size="sm" variant="accent-1">
        Small Button
      </Button>
      <Button size="md" variant="accent-1">
        Medium Button
      </Button>
      <Button size="lg" variant="accent-1">
        Large Button
      </Button>
    </div>
  ),
};

export const DisabledStates: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap items-center">
      <Button disabled variant="default">
        Default
      </Button>
      <Button disabled variant="accent-1">
        Accent 1
      </Button>
      <Button disabled variant="accent-2">
        Accent 2
      </Button>
      <Button disabled variant="accent-3">
        Accent 3
      </Button>
      <Button disabled variant="success">
        Success
      </Button>
      <Button disabled variant="error">
        Error
      </Button>
      <Button disabled variant="alert">
        Alert
      </Button>
      <Button disabled variant="info">
        Info
      </Button>
      <Button disabled variant="outline">
        Outline
      </Button>
      <Button disabled variant="ghost">
        Ghost
      </Button>
    </div>
  ),
};
