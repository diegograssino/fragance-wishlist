import { log } from "./logger";

export const apiFetch = async (
  input: string | URL | Request,
  init?: RequestInit
): Promise<Response> => {
  const method = init?.method || "GET";
  const urlString = input.toString();
  const startTime = Date.now();

  log.info(`[FETCH REQUEST] -> ${method} ${urlString}`);

  try {
    const response = await fetch(input, init);
    const duration = Date.now() - startTime;

    if (response.ok) {
      log.info(`[FETCH SUCCESS] <- ${method} ${response.status} (${duration}ms)`);
    } else {
      log.error(`[FETCH HTTP ERROR] <- ${method} ${response.status} (${duration}ms)`, {
        statusText: response.statusText,
        url: urlString,
      });
    }

    return response;
  } catch (err) {
    const duration = Date.now() - startTime;
    log.error(`[FETCH THREW EXCEPTION] <- ${method} (${duration}ms)`, {
      error: err,
      url: urlString,
    });
    throw err;
  }
};
