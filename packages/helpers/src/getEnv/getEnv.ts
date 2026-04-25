import { DS_ENV, WEB_ENV, API_ENV, STORYBOOK_ENV } from "./getEnv.types";

export function getEnv(key: string, fallback: string = ""): string {
  switch (key) {
    case DS_ENV.BASE_BACKGROUND:
      return (
        process.env.BASE_BACKGROUND ||
        process.env.NEXT_PUBLIC_BASE_BACKGROUND ||
        fallback
      );

    case DS_ENV.BASE_ACCENT_1:
      return (
        process.env.BASE_ACCENT_1 ||
        process.env.NEXT_PUBLIC_BASE_ACCENT_1 ||
        fallback
      );

    case DS_ENV.BASE_ACCENT_2:
      return (
        process.env.BASE_ACCENT_2 ||
        process.env.NEXT_PUBLIC_BASE_ACCENT_2 ||
        fallback
      );

    case DS_ENV.BASE_ACCENT_3:
      return (
        process.env.BASE_ACCENT_3 ||
        process.env.NEXT_PUBLIC_BASE_ACCENT_3 ||
        fallback
      );

    case DS_ENV.BASE_FOREGROUND:
      return (
        process.env.BASE_FOREGROUND ||
        process.env.NEXT_PUBLIC_BASE_FOREGROUND ||
        fallback
      );

    case DS_ENV.BASE_SUCCESS:
      return (
        process.env.BASE_SUCCESS ||
        process.env.NEXT_PUBLIC_BASE_SUCCESS ||
        fallback
      );

    case DS_ENV.BASE_ERROR:
      return (
        process.env.BASE_ERROR || process.env.NEXT_PUBLIC_BASE_ERROR || fallback
      );

    case DS_ENV.BASE_ALERT:
      return (
        process.env.BASE_ALERT || process.env.NEXT_PUBLIC_BASE_ALERT || fallback
      );

    case DS_ENV.BASE_INFO:
      return (
        process.env.BASE_INFO || process.env.NEXT_PUBLIC_BASE_INFO || fallback
      );

    case WEB_ENV.API_BASE_URL:
      return (
        process.env.API_BASE_URL ||
        process.env.NEXT_PUBLIC_API_BASE_URL ||
        fallback
      );

    default:
      return fallback;
  }
}
