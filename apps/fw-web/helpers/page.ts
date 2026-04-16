import { notFound } from "next/navigation";
import { log } from "./logger";

export interface StandardResponse<T> {
  data?: T | null;
  error?: unknown;
}

/**
 * Resolves a standard response automatically for Next.js App Router Server Components.
 * Throws to `error.tsx` if an error occurred.
 * Calls `notFound()` implicitly sending to `not-found.tsx` if the data is falsy/empty.
 * Otherwise returns the clean payload `T`.
 */
export const resolvePageData = <T>(response: StandardResponse<T>): T => {
  if (response.error) {
    const errorObj = response.error as Record<string, unknown>;
    const errorMessage =
      typeof response.error === "string"
        ? response.error
        : typeof errorObj?.message === "string"
          ? errorObj.message
          : "An unexpected error occurred";

    throw new Error(errorMessage);
  }

  if (!response.data) {
    notFound();
  }

  return response.data;
};
