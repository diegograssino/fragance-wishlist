import { Product, ProductDTO } from "../types/product";

export const productDTO = (product: ProductDTO): Product => ({
  id: product.id,
  name: product.name,
  brand: product.brand || null,
  releaseYear: product.release_year || null,
  rating: product.rating || null,
  imageUrl: product.image_url || null,
});

export const productsDTO = (products: ProductDTO[]): Product[] => {
  return products.map(productDTO);
};
