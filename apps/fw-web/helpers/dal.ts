/**
 * Constructs a standardized DAL error object from a failed HTTP Response.
 * @param response The Fetch API Response object that failed (e.g. 404, 500).
 * @param resourceName A descriptive name of the resource being fetched (e.g. "products").
 * @returns An object containing the HTTP status and a formatted error message.
 */
export const createDALError = (response: Response, resourceName: string) => {
  return {
    status: response.status,
    message: `Failed to fetch ${resourceName}: ${response.statusText || response.status}`,
  };
};

/**
 * Safely parses unknown thrown exceptions into a standardized DAL error object.
 * Useful directly inside catch blocks to prevent 'any' type leaking.
 * @param err The unknown error caught in the try/catch block.
 * @returns An object containing an HTTP status code (defaults to 500) and a safe error message.
 */
export const handleDALError = (err: unknown) => {
  const errorObj = err as Record<string, unknown>;
  return {
    status: typeof errorObj?.status === "number" ? errorObj.status : 500,
    message:
      typeof errorObj?.message === "string"
        ? errorObj.message
        : "An unexpected network error occurred",
  };
};
