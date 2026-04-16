import { productsDAL } from "@/modules/catalogue/dal/product";
import { getCataloguePageParams } from "@/modules/catalogue/helpers/params";
import CataloguePage from "@/modules/catalogue/views/CataloguePage/CataloguePage";
import { PageProps } from "@/types/page";
import { resolvePageData } from "@/helpers/page";

const Catalogue = async (props: PageProps) => {
  const { page, perPage } = await getCataloguePageParams(props);

  const products = resolvePageData(
    await productsDAL({
      limit: perPage,
      offset: page,
    })
  );

  return (
    <CataloguePage
      products={products}
      pageParam={page}
      perPageParam={perPage}
    />
  );
};

export default Catalogue;
