import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "UI/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "text",
      description: "HTML tag to render",
    },
    variant: {
      control: "select",
      options: [
        "default",
        "muted",
        "accent-1",
        "accent-2",
        "accent-3",
        "success",
        "error",
        "alert",
        "info",
        "inverted",
      ],
    },
    size: {
      control: "select",
    },
    weight: {
      control: "select",
    },
    truncate: {
      control: "boolean",
    },
    shadow: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Design System Typography",
    as: "h1",
  },
};

export const HeadingsGallery: Story = {
  render: () => (
    <div className="flex flex-col gap-3 py-4">
      <Typography as="h1">Heading 1 automatically sized</Typography>
      <Typography as="h2" variant="accent-1">
        Heading 2 automatically sized & colored in Accent 1
      </Typography>
      <Typography as="h3" variant="accent-2">
        Heading 3 automatically sized & colored in Accent 2
      </Typography>
      <Typography as="h4" variant="accent-3">
        Heading 4 automatically sized & colored in Accent 3
      </Typography>
    </div>
  ),
};

export const MutedParagraph: Story = {
  args: {
    as: "p",
    variant: "muted",
    size: "lg",
    children:
      "These headings automatically apply size and weight based on the HTML tag, removing the need for a bloated SCSS stylesheet!",
  },
};

export const InvertedParagraph: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  render: () => (
    <div className="bg-foreground p-8 rounded-xl max-w-xl">
      <Typography as="p" variant="inverted" weight="medium">
        This paragraph uses the "inverted" variant. It sits beautifully inside a
        dark container using your --foreground-inverted variable calculated
        automatically via the root palette.
      </Typography>
    </div>
  ),
};

export const StatusVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 py-4 bg-background border border-foreground/10 p-6 rounded-lg">
      <Typography as="h4" variant="success">
        Success: Your action was completed.
      </Typography>
      <Typography as="h4" variant="error">
        Error: Something went wrong.
      </Typography>
      <Typography as="h4" variant="alert">
        Alert: Please review this action.
      </Typography>
      <Typography as="h4" variant="info">
        Info: New updates are available.
      </Typography>
    </div>
  ),
};
