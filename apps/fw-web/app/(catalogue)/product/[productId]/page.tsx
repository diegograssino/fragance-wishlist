import { productByIdDAL } from "@/modules/catalogue/dal/product";
import ProductPage from "@/modules/catalogue/views/ProductPage/ProductPage";
import { PageProps } from "@/types/page";
import { getPageParams } from "@/helpers/params";
import { resolvePageData } from "@/helpers/page";

const Product = async (props: PageProps<{ productId: string }>) => {
  const {
    params: { productId },
  } = await getPageParams(props);

  const product = resolvePageData(await productByIdDAL(productId));

  return <ProductPage product={product} />;
};

export default Product;
