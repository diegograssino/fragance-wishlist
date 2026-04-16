/**
 * Resolves a URL parameter (which can be a string or array of strings)
 * into a single valid string that strictly represents a number.
 * If it is empty, invalid, or NaN, it returns the provided fallback.
 */
export const getValidNumericString = (
  param: string | string[] | undefined,
  fallback: string
): string => {
  if (!param) return fallback;
  const value = Array.isArray(param) ? param[0] : param;
  return !isNaN(Number(value)) ? value : fallback;
};

/**
 * Validates and converts a value to a number.
 * If it is empty, invalid, or NaN, it returns the provided fallback number.
 */
export const getValidNumber = (
  param: string | number | undefined | null,
  fallback: number
): number => {
  if (param === undefined || param === null) return fallback;
  const parsed = Number(param);
  return !isNaN(parsed) ? parsed : fallback;
};
