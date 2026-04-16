import Link from "next/link";
import { ProductsListProps } from "../../types/components";

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <section>
      {products.map((product) => (
        <article key={product.id}>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </article>
      ))}
    </section>
  );
};

export default ProductsList;
