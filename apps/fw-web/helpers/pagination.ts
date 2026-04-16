import { getValidNumericString } from "./conversions";

export interface PaginationDefaults {
  defaultPage: string;
  defaultPerPage: string;
}

export const getPaginationParams = (
  pageParam: string | string[] | undefined,
  perPageParam: string | string[] | undefined,
  defaults: PaginationDefaults = { defaultPage: "1", defaultPerPage: "10" }
) => {
  const page = getValidNumericString(pageParam, defaults.defaultPage);
  const perPage = getValidNumericString(perPageParam, defaults.defaultPerPage);

  return {
    page,
    perPage,
  };
};
