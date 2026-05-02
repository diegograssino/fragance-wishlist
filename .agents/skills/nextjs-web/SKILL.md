---
name: nextjs-ts-web
description: Architecture, API, and component rules for Next.js web applications. Use when writing React components, data fetching layers, or modifying fw-web.
---

# Next.js (fw-web) Rules

## Architecture

- **Framework**: Next.js (React), Tailwind CSS v4.
- **Pattern**: Vertical Slice Architecture. Break features into distinct domain modules (`catalogue`, `cart`, `users`).
- **UI/UX**: Strictly follow modern, premium designs with dynamic animations and glassmorphism. Avoid basic MVP designs.
- **Data Resolution**: Use standardized data resolution helpers (`resolvePageData`), handle Next.js 15 asynchronous `params` (`await params`), and rely on Error Boundaries.
- **Exceptions**: Use dependency-inverted, localized loggers. Ensure 404/500 errors map to Next.js predefined `notFound.tsx` and `error.tsx` UI components gracefully.

## Components

- Use semantic HTML tags.
- Build generic, reusable components containing only their own styled logic.
- Do not mix business logic or data-fetching into presentational (dumb) components.
- Rely on predefined styled tokens/Tailwind utilities per the design system.

## API Layer

- **Fetching**: Use a centralized Axios client.
- **DAL**: All API calls for a specific domain/vertical slice must be contained in its own DA layer directory.
- **DTOs**: Use explicit Data Transfer Objects (DTOs) for incoming and outgoing data mapping.
