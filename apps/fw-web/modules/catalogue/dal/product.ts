import { createDALError, handleDALError } from "@/helpers/dal";
import { ENVS, getEnv } from "@/helpers/envs";
import { DALResponse } from "@/types/dal";
import { getValidNumber } from "@/helpers/conversions";
import { apiFetch } from "@/helpers/fetch";
import { log } from "@/helpers/logger";
import { productDTO, productsDTO } from "../dto/product";
import { Product, ProductsDALParams } from "../types/product";
import { CATALOGUE_PAGINATION } from "../constants/pagination";

const apiBaseUrl = getEnv(ENVS.API_BASE_URL);

export const productsDAL = async ({
  limit,
  offset,
}: ProductsDALParams): Promise<DALResponse<Product[]>> => {
  try {
    const limitNum = getValidNumber(
      limit,
      Number(CATALOGUE_PAGINATION.DEFAULT_PER_PAGE),
    );
    const offsetNum = getValidNumber(
      offset,
      Number(CATALOGUE_PAGINATION.DEFAULT_PAGE),
    );

    const url = `${apiBaseUrl}/perfumes?limit=${limitNum}&offset=${offsetNum}`;
    const response = await apiFetch(url);

    if (response.status === 404) {
      log.info(`[productsDAL] 404 Not Found (Empty list)`);
      return { data: null, error: null };
    }

    if (!response.ok) {
      throw createDALError(response, "products");
    }

    const data = productsDTO((await response.json()).perfumes || []);

    if (!data || data.length === 0) {
      log.warn(`[productsDAL] Request was successful but returned 0 products.`);
    }

    return {
      data,
      error: null,
    };
  } catch (err: unknown) {
    log.error(`[productsDAL] Execution failed: ${err}`);
    return {
      data: null,
      error: handleDALError(err),
    };
  }
};

export const productByIdDAL = async (
  id: string,
): Promise<DALResponse<Product>> => {
  try {
    const response = await apiFetch(`${apiBaseUrl}/perfumes/${id}`);

    if (response.status === 404) {
      log.info(`[productByIdDAL] Product ID ${id} was not found (404)`);
      return { data: null, error: null };
    }

    if (!response.ok) {
      throw createDALError(response, `product ${id}`);
    }

    const data = productDTO(await response.json());

    if (!data) {
      log.warn(
        `[productByIdDAL] Request was successful but no data returned for ID ${id}.`,
      );
    }

    return {
      data,
      error: null,
    };
  } catch (err: unknown) {
    log.error(`[productByIdDAL] Execution failed for ID ${id}`, { err });
    return {
      data: null,
      error: handleDALError(err),
    };
  }
};
