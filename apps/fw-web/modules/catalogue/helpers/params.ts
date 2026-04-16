import { getPaginationParams } from "@/helpers/pagination";
import { getPageParams } from "@/helpers/params";
import { PageProps } from "@/types/page";
import { CATALOGUE_PAGINATION } from "../constants/pagination";

const { DEFAULT_PAGE, DEFAULT_PER_PAGE } = CATALOGUE_PAGINATION;

export const getCataloguePageParams = async (props: PageProps) => {
  const { searchParams } = await getPageParams(props);

  const paginationParams = getPaginationParams(
    searchParams.page,
    searchParams.perPage,
    {
      defaultPage: DEFAULT_PAGE,
      defaultPerPage: DEFAULT_PER_PAGE,
    },
  );

  return paginationParams;
};
