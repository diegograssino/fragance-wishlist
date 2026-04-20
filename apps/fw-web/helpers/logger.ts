import pino from "pino";

const internalLogger = pino({
  level: process.env.LOG_LEVEL || "info",
  transport:
    process.env.NODE_ENV !== "production"
      ? {
          target: "pino-pretty",
          options: {
            colorize: true,
            ignore: "pid,hostname",
          },
        }
      : undefined,
});

export const log = {
  info: (msg: string, ctx?: Record<string, unknown>) =>
    internalLogger.info(ctx || {}, msg),
  error: (msg: string, err?: unknown) =>
    internalLogger.error((err as object) || {}, msg),
  warn: (msg: string, ctx?: Record<string, unknown>) =>
    internalLogger.warn(ctx || {}, msg),
  debug: (msg: string, ctx?: Record<string, unknown>) =>
    internalLogger.debug(ctx || {}, msg),
};
