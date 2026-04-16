import PaginationPanel from "../../components/PaginationPanel/PaginationPanel";
import ProductsList from "../../components/ProductsList/ProductsList";
import { CataloguePageProps } from "../../types/views";

const CataloguePage = ({
  products,
  pageParam,
  perPageParam,
}: CataloguePageProps) => {
  return (
    <main>
      <PaginationPanel pageParam={pageParam} perPageParam={perPageParam} />
      <ProductsList products={products} />
    </main>
  );
};

export default CataloguePage;
