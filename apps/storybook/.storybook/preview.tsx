import type { Preview } from "@storybook/nextjs-vite";
import { THEME_STYLES } from "@repo/ui";
import "../src/globals.css";

// Inject Design System variables into <html> globally on load
if (typeof document !== "undefined") {
  Object.entries(THEME_STYLES).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value as string);
  });

  // Match Next.js layout base classes
  document.documentElement.classList.add("antialiased", "h-full");
  document.body.classList.add("min-h-full");
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
