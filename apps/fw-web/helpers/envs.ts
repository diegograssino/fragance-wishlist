export enum ENVS {
  API_BASE_URL = "API_BASE_URL",
}

const ENV_VALUES: Record<ENVS, string | undefined> = {
  [ENVS.API_BASE_URL]:
    process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL,
};

/**
 * Safely retrieve an environment variable.
 * @param key The environment variable key from ENVS enum.
 * @returns The string value of the environment variable, or an empty string if not found.
 */
export const getEnv = (key: ENVS): string => {
  const value = ENV_VALUES[key];

  if (value === undefined) {
    console.warn(`[getEnv] Environment variable "${key}" is not defined.`);
    return "";
  }

  return value;
};
