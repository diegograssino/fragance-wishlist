import { Container, Typography, ThemeSize, ThemeWeight } from "@repo/ui";
import React from "react";

const DesignSystemPage = () => {
  const colors = [
    {
      name: "Primary",
      var: "--color-primary",
      base: "--color-primary-container",
    },
    {
      name: "Secondary",
      var: "--color-secondary",
      base: "--color-secondary-container",
    },
    {
      name: "Tertiary",
      var: "--color-tertiary",
      base: "--color-tertiary-container",
    },
    { name: "Surface", var: "--color-surface", base: "--color-surface-dim" },
    {
      name: "On Surface",
      var: "--color-on-surface",
      base: "--color-on-surface-variant",
    },
    { name: "Error", var: "--color-error", base: "--color-error-container" },
    { name: "Success", var: "--color-success", base: "--color-success-muted" },
    { name: "Alert", var: "--color-alert", base: "--color-alert-muted" },
    { name: "Info", var: "--color-info", base: "--color-info-muted" },
  ];

  const typographySizes: ThemeSize[] = [
    "display-lg",
    "headline-md",
    "title-sm",
    "body-main",
    "data-mono",
    "label-caps",
  ];
  const typographyWeights: ThemeWeight[] = [
    "light",
    "default",
    "medium",
    "semibold",
    "bold",
  ];

  return (
    <div className="bg-surface text-on-surface min-h-screen py-12">
      <Container>
        <header className="mb-16 border-b border-outline-variant pb-8">
          <Typography as="h1" size="display-lg" className="mb-4 text-primary">
            Fragrance Wishlist{" "}
            <span className="text-secondary">Design System</span>
          </Typography>
          <Typography variant="on-surface-variant" size="headline-md">
            A premium, dynamic 53-Env architecture based on Material Design 3.
          </Typography>
        </header>

        <section className="mb-20">
          <Typography
            as="h2"
            size="headline-md"
            className="mb-8 border-l-4 border-primary pl-4"
          >
            Color Palette
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colors.map((color) => (
              <div
                key={color.name}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-surface-container border border-outline backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <Typography weight="semibold">{color.name}</Typography>
                  <Typography
                    size="data-mono"
                    variant="on-surface-variant"
                    className="font-mono"
                  >
                    {color.var}
                  </Typography>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <div
                      className="h-24 w-full rounded-xl shadow-inner border border-outline-variant"
                      style={{ backgroundColor: `var(${color.var})` }}
                    />
                    <Typography size="data-mono" className="mt-2 text-center">
                      Base
                    </Typography>
                  </div>

                  <div className="flex-1">
                    <div
                      className="h-24 w-full rounded-xl shadow-inner border border-outline-variant"
                      style={{ backgroundColor: `var(${color.base})` }}
                    />
                    <Typography size="data-mono" className="mt-2 text-center">
                      Container
                    </Typography>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <Typography
            as="h2"
            size="headline-md"
            className="mb-8 border-l-4 border-secondary pl-4"
          >
            Tokens
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant">
              <Typography as="h3" size="title-sm" className="mb-6">
                Border Radius
              </Typography>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "sm", class: "rounded-sm" },
                  { label: "md", class: "rounded-md" },
                  { label: "lg", class: "rounded-lg" },
                  { label: "xl", class: "rounded-xl" },
                  { label: "full", class: "rounded-full" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 bg-primary border border-outline ${r.class}`}
                    />
                    <Typography size="data-mono" className="font-mono">
                      {r.label} ({r.class})
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant">
              <Typography as="h3" size="title-sm" className="mb-6">
                Spacing Grid
              </Typography>
              <div className="space-y-4">
                {[
                  { label: "base", size: "8px" },
                  { label: "sm", size: "12px" },
                  { label: "md", size: "24px" },
                  { label: "lg", size: "48px" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4">
                    <div
                      className="bg-secondary"
                      style={{
                        height: "24px",
                        width: `var(--spacing-${s.label})`,
                      }}
                    />
                    <Typography size="data-mono" className="font-mono">
                      spacing-{s.label}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <Typography
            as="h2"
            size="headline-md"
            className="mb-8 border-l-4 border-tertiary pl-4"
          >
            Typography
          </Typography>

          <div className="space-y-12">
            <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant">
              <Typography as="h3" size="title-sm" className="mb-6">
                Sizes (DESIGN.md Hierarchy)
              </Typography>
              <div className="space-y-4">
                {typographySizes.map((size) => (
                  <div
                    key={size}
                    className="flex flex-col gap-2 border-b border-outline-variant pb-4"
                  >
                    <Typography
                      size="data-mono"
                      variant="on-surface-variant"
                      className="font-mono text-primary"
                    >
                      {size}
                    </Typography>
                    <Typography size={size}>
                      The quick brown fox jumps over the lazy dog
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant">
              <Typography as="h3" size="title-sm" className="mb-6">
                Weights
              </Typography>
              <div className="space-y-4">
                {typographyWeights.map((weight) => (
                  <div
                    key={weight}
                    className="flex flex-col gap-2 border-b border-outline-variant pb-4"
                  >
                    <Typography
                      size="data-mono"
                      variant="on-surface-variant"
                      className="font-mono text-secondary"
                    >
                      {weight}
                    </Typography>
                    <Typography weight={weight} size="headline-md">
                      The quick brown fox jumps over the lazy dog
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-surface-container border border-outline-variant">
              <Typography as="h3" size="title-sm" className="mb-6">
                Variants
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-surface border border-outline-variant flex flex-col gap-2">
                  <Typography variant="on-surface" size="body-main">
                    Default (on-surface)
                  </Typography>
                  <Typography variant="on-surface-variant" size="body-main">
                    Muted (on-surface-variant)
                  </Typography>
                  <Typography variant="primary" size="body-main">
                    Primary Text
                  </Typography>
                  <Typography variant="secondary" size="body-main">
                    Secondary Text (Gold)
                  </Typography>
                  <Typography variant="tertiary" size="body-main">
                    Tertiary Text
                  </Typography>
                  <Typography variant="success" size="body-main">
                    Success Text (Green)
                  </Typography>
                  <Typography variant="error" size="body-main">
                    Error Text (Red)
                  </Typography>
                  <Typography variant="alert" size="body-main">
                    Alert Text (Orange)
                  </Typography>
                  <Typography variant="info" size="body-main">
                    Info Text (Blue)
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <Typography
            as="h2"
            size="headline-md"
            weight="semibold"
            className="mb-8 border-l-4 border-tertiary pl-4"
          >
            Best Practices
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-success-muted border border-success">
              <Typography weight="bold" variant="success" className="mb-2">
                Contrast First
              </Typography>
              <Typography size="body-main">
                Always ensure text is readable against the background. Use the{" "}
                <code>on-surface-variant</code> variant for secondary info.
              </Typography>
            </div>
            <div className="p-6 rounded-xl bg-alert-muted border border-alert">
              <Typography weight="bold" variant="alert" className="mb-2">
                Semantic Roles
              </Typography>
              <Typography size="body-main">
                Use colors for their intended purpose. Success for
                confirmations, Error for failures, and Alert for warnings.
              </Typography>
            </div>
            <div className="p-6 rounded-xl bg-info-muted border border-info">
              <Typography weight="bold" variant="info" className="mb-2">
                Consistency
              </Typography>
              <Typography size="body-main">
                Stick to the defined typography sizes and weights to maintain a
                professional and cohesive look.
              </Typography>
            </div>
          </div>
        </section>

        <footer className="text-center pt-12 border-t border-outline-variant">
          <Typography variant="on-surface-variant" size="label-caps">
            Fragrance Wishlist Design System &bull; 2026
          </Typography>
        </footer>
      </Container>
    </div>
  );
};

export default DesignSystemPage;
