import { Product } from "./product";

export interface ProductPageProps {
  product: Product;
}

export interface CataloguePageProps {
  products: Product[];
  pageParam: string;
  perPageParam: string;
}
