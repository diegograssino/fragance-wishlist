import { getEnv, WEB_ENV, DS_ENV } from "@repo/helpers/getEnv";

export const getWebEnv = (key: WEB_ENV | DS_ENV, fallback?: string) =>
  getEnv(key, fallback);
