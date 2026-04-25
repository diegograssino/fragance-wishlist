import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Container, Typography } from "./index";

const WelcomeComponent = () => {
  const colors = [
    {
      name: "Background",
      var: "--color-background",
      base: "--base-background",
    },
    { name: "Accent 1", var: "--color-accent-1", base: "--base-accent-1" },
    { name: "Accent 2", var: "--color-accent-2", base: "--base-accent-2" },
    { name: "Accent 3", var: "--color-accent-3", base: "--base-accent-3" },
    {
      name: "Foreground",
      var: "--color-foreground",
      base: "--base-foreground",
    },
    { name: "Success", var: "--color-success", base: "--base-success" },
    { name: "Error", var: "--color-error", base: "--base-error" },
    { name: "Alert", var: "--color-alert", base: "--base-alert" },
    { name: "Info", var: "--color-info", base: "--base-info" },
  ];

  const typographySizes = [
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
  ];
  const typographyWeights = ["light", "default", "medium", "semibold", "bold"];

  return (
    <div className="bg-background min-h-screen py-12">
      <Container>
        <header className="mb-16 border-b border-foreground-muted/10 pb-8">
          <Typography as="h1" size="5xl" weight="bold" className="mb-4">
            Fragrance Wishlist{" "}
            <span className="text-accent-3">Design System</span>
          </Typography>
          <Typography variant="muted" size="xl">
            A premium, high-contrast design system built with React, Tailwind
            CSS, and CSS Variables.
          </Typography>
        </header>

        <section className="mb-20">
          <Typography
            as="h2"
            size="3xl"
            weight="semibold"
            className="mb-8 border-l-4 border-accent-1 pl-4"
          >
            Color Palette
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colors.map((color) => (
              <div
                key={color.name}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-foreground/5 border border-foreground/10 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <Typography weight="semibold">{color.name}</Typography>
                  <Typography size="xs" variant="muted" className="font-mono">
                    {color.var}
                  </Typography>
                </div>

                <div className="flex gap-4">
                  {/* Base Color */}
                  <div className="flex-1">
                    <div
                      className="h-24 w-full rounded-xl shadow-inner border border-foreground/5"
                      style={{ backgroundColor: `var(${color.var})` }}
                    />
                    <Typography size="xs" className="mt-2 text-center">
                      Regular
                    </Typography>
                  </div>

                  {/* Muted Variant */}
                  <div className="flex-1">
                    <div
                      className="h-24 w-full rounded-xl shadow-inner border border-foreground/5"
                      style={{ backgroundColor: `var(${color.var}-muted)` }}
                    />
                    <Typography size="xs" className="mt-2 text-center">
                      Muted (50%)
                    </Typography>
                  </div>
                </div>

                <div className="mt-2">
                  <Typography size="xs" variant="muted">
                    Role:{" "}
                    {color.name === "Background"
                      ? "Main application surface"
                      : color.name === "Foreground"
                        ? "Primary text and icons"
                        : color.name.includes("Accent")
                          ? "Brand elements and highlights"
                          : "Semantic status feedback"}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <Typography
            as="h2"
            size="3xl"
            weight="semibold"
            className="mb-8 border-l-4 border-foreground pl-4"
          >
            Tokens
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-foreground/5 border border-foreground/10">
              <Typography as="h3" size="xl" weight="semibold" className="mb-6">
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
                      className={`w-12 h-12 bg-accent-1 border border-foreground/10 ${r.class}`}
                    />
                    <Typography size="xs" className="font-mono">
                      {r.label} ({r.class})
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl bg-foreground/5 border border-foreground/10">
              <Typography as="h3" size="xl" weight="semibold" className="mb-6">
                Shadows
              </Typography>
              <div className="space-y-4">
                {[
                  { label: "SM", class: "shadow-sm" },
                  { label: "MD", class: "shadow-md" },
                  { label: "LG", class: "shadow-lg" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className={`p-4 bg-background border border-foreground/5 flex items-center justify-between rounded-md ${s.class}`}
                  >
                    <Typography size="sm">Shadow {s.label}</Typography>
                    <Typography
                      size="xs"
                      variant="muted"
                      className="font-mono text-[10px]"
                    >
                      .{s.class}
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
            size="3xl"
            weight="semibold"
            className="mb-8 border-l-4 border-accent-2 pl-4"
          >
            Typography
          </Typography>

          <div className="space-y-12">
            <div className="p-8 rounded-2xl bg-foreground/5 border border-foreground/10">
              <Typography as="h3" size="xl" weight="semibold" className="mb-6">
                Sizes
              </Typography>
              <div className="space-y-4">
                {typographySizes.reverse().map((size) => (
                  <div
                    key={size}
                    className="flex items-baseline gap-4 border-b border-foreground/5 pb-2"
                  >
                    <Typography
                      size="xs"
                      variant="muted"
                      className="w-12 font-mono uppercase"
                    >
                      {size}
                    </Typography>
                    <Typography size={size as any}>
                      The quick brown fox jumps over the lazy dog
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-foreground/5 border border-foreground/10">
              <Typography as="h3" size="xl" weight="semibold" className="mb-6">
                Weights
              </Typography>
              <div className="space-y-4">
                {typographyWeights.map((weight) => (
                  <div
                    key={weight}
                    className="flex items-baseline gap-4 border-b border-foreground/5 pb-2"
                  >
                    <Typography
                      size="xs"
                      variant="muted"
                      className="w-20 font-mono uppercase"
                    >
                      {weight}
                    </Typography>
                    <Typography weight={weight as any} size="2xl">
                      The quick brown fox jumps over the lazy dog
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-foreground/5 border border-foreground/10">
              <Typography as="h3" size="xl" weight="semibold" className="mb-6">
                Variants
              </Typography>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-background border border-foreground/5">
                  <Typography variant="default" size="lg" weight="bold">
                    Default
                  </Typography>
                  <Typography variant="muted">
                    Muted text for secondary info
                  </Typography>
                  <Typography variant="accent-1">Accent 1 Text</Typography>
                  <Typography variant="accent-2">Accent 2 Text</Typography>
                  <Typography variant="accent-3">Accent 3 Text</Typography>
                </div>
                <div className="p-4 rounded-lg bg-foreground border border-foreground/5">
                  <Typography variant="inverted" size="lg" weight="bold">
                    Inverted (on dark background)
                  </Typography>
                  <Typography
                    size="sm"
                    style={{ color: "var(--color-foreground-inverted-muted)" }}
                  >
                    Inverted Muted Text
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <Typography
            as="h2"
            size="3xl"
            weight="semibold"
            className="mb-8 border-l-4 border-accent-3 pl-4"
          >
            Best Practices
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-success/10 border border-success/20">
              <Typography weight="bold" className="text-success mb-2">
                Contrast First
              </Typography>
              <Typography size="sm">
                Always ensure text is readable against the background. Use the{" "}
                <code>inverted</code> variant for dark backgrounds.
              </Typography>
            </div>
            <div className="p-6 rounded-xl bg-alert/10 border border-alert/20">
              <Typography weight="bold" className="text-alert mb-2">
                Semantic Roles
              </Typography>
              <Typography size="sm">
                Use colors for their intended purpose. Success for
                confirmations, Error for failures, and Alert for warnings.
              </Typography>
            </div>
            <div className="p-6 rounded-xl bg-info/10 border border-info/20">
              <Typography weight="bold" className="text-info mb-2">
                Consistency
              </Typography>
              <Typography size="sm">
                Stick to the defined typography sizes and weights to maintain a
                professional and cohesive look.
              </Typography>
            </div>
          </div>
        </section>

        <footer className="text-center pt-12 border-t border-foreground/10">
          <Typography variant="muted" size="sm">
            Fragrance Wishlist Design System &bull; 2026
          </Typography>
        </footer>
      </Container>
    </div>
  );
};

const meta: Meta = {
  title: "Design System/Welcome",
  component: WelcomeComponent,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof WelcomeComponent>;

export const Home: Story = {};
