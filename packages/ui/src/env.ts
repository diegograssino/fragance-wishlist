import { getEnv, DS_ENV } from "@repo/helpers/getEnv";

export const getDesignSystemEnv = (key: DS_ENV, fallback?: string) =>
  getEnv(key, fallback);
