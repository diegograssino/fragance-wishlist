# fw-web Architecture Rules

- Framework: Next.js (React)
- Styling: Tailwind CSS v4
- Pattern: Vertical Slice Architecture. Break features into distinct domain modules (e.g., `catalogue`, `cart`, `users`).
- UI/UX: Strictly follow modern, premium designs with dynamic animations and glassmorphism where appropriate. Avoid basic MVP designs.

## Gold Standard Reference

Whenever building a new feature, use recently refactored page components as the standard template.

- Refer strictly to the `catalogue` module's architecture for data fetching and Next.js boundary handlers.

## Explicit Anti-Patterns vs Best Practices

**Wrong Way (Anti-pattern):**

```tsx
// Don't mix raw fetch calls inside Server Components without boundary catchers
export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetch(`/api/products/${params.id}`);
  // no error handling, params used synchronously
  return <div>{data.name}</div>;
}
```

**Right Way (Gold standard):**

```tsx
// Do use standardized data resolution helpers (resolvePageData), handle Next.js 15 asynchronous params, and rely on Error Boundaries.
export default async function Page({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const data = await resolvePageData(() => fetchProduct(productId));
  return <ProductView product={data} />;
}
```

## Exceptions and Logging

- Use dependency-inverted, localized logger implementations rather than globally linking to third-party libraries.
- For server-side fetching, ensure 404/500 errors naturally map to Next.js predefined `notFound.tsx` and `error.tsx` UI components gracefully.
