import type { Meta, StoryObj } from "@storybook/react";
import Container from "./Container";

const meta: Meta<typeof Container> = {
  title: "UI/Container",
  component: Container,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-4 bg-slate-200 border border-slate-400 rounded text-center text-slate-800">
        This is inside a Container component. It centers content and applies
        max-width.
      </div>
    ),
  },
};
