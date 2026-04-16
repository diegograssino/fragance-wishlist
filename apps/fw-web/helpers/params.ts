import { PageProps } from "@/types/page";

export const getPageParams = async <
  TParams = Record<string, string>,
  TSearchParams = Record<string, string | string[] | undefined>
>(
  pageProps: Partial<PageProps<TParams, TSearchParams>>
) => {
  const [params, searchParams] = await Promise.all([
    pageProps.params ?? Promise.resolve({} as TParams),
    pageProps.searchParams ?? Promise.resolve({} as TSearchParams),
  ]);

  return {
    params,
    searchParams,
  };
};
