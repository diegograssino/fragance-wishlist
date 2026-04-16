import { Button, Container, Typography } from "@repo/ui";

const DesignSystemPage = () => {
  return (
    <Container className="py-16 space-y-16">
      {/* TYPOGRAPHY SAMPLE */}
      <section className="space-y-6">
        <Typography as="h1">Design System Typography</Typography>
        <Typography as="p" variant="muted" size="lg">
          These headings automatically apply size and weight based on the HTML
          tag, removing the need for a bloated SCSS stylesheet!
        </Typography>

        <div className="flex flex-col gap-3 py-4">
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

        <div className="bg-foreground p-8 rounded-xl max-w-xl">
          <Typography as="p" variant="inverted" weight="medium">
            This paragraph uses the `&quot;inverted&quot;` variant. It sits
            beautifully inside a dark container using your
            `--foreground-inverted` variable calculated automatically via the
            root palette.
          </Typography>
        </div>
      </section>

      {/* BUTTON SAMPLE */}
      <section className="space-y-8">
        <Typography as="h2">Interactive Buttons</Typography>

        {/* Colors */}
        <div className="space-y-3">
          <Typography as="h3" size="lg">
            Semantic Variants
          </Typography>
          <div className="flex gap-4 flex-wrap">
            <Button variant="default">Default Form</Button>
            <Button variant="accent-1">Accent 1 Primary</Button>
            <Button variant="accent-2">Accent 2 Checkout</Button>
            <Button variant="accent-3">Accent 3 Danger</Button>
            <Button variant="outline">Outline Secondary</Button>
            <Button variant="ghost">Ghost Subtle</Button>
          </div>
        </div>

        {/* Sizes */}
        <div className="space-y-3">
          <Typography as="h3" size="lg">
            Sizes
          </Typography>
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
        </div>

        {/* Disabled States */}
        <div className="space-y-3">
          <Typography as="h3" size="lg">
            Disabled States
          </Typography>
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
            <Button disabled variant="outline">
              Outline
            </Button>
            <Button disabled variant="ghost">
              Ghost
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default DesignSystemPage;
