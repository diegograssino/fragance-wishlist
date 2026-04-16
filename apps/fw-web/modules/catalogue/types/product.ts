export interface ProductDTO {
  id: string;
  name: string;
  brand?: string;
  release_year?: number;
  rating?: number;
  image_url?: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string | null;
  releaseYear: number | null;
  rating: number | null;
  imageUrl: string | null;
}

export interface ProductsDALParams {
  limit: string;
  offset: string;
}
