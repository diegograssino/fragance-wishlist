import { Product } from "./product";

export interface PaginationPanelProps {
  pageParam: string;
  perPageParam: string;
}

export interface ProductsListProps {
  products: Product[];
}
