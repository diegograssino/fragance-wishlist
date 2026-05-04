import { Typography } from "@repo/ui";
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
      <Typography as="h1" size="headline-md" weight="semibold" className="mb-6">
        Catalogue
      </Typography>
      <PaginationPanel pageParam={pageParam} perPageParam={perPageParam} />
      <ProductsList products={products} />
    </main>
  );
};

export default CataloguePage;
