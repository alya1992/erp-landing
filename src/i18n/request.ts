import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

type Messages = Record<string, Record<string, string>>;

function deepMerge(base: Messages, override: Messages): Messages {
  const result: Messages = { ...base };
  for (const key of Object.keys(override)) {
    if (
      typeof override[key] === 'object' &&
      override[key] !== null &&
      !Array.isArray(override[key]) &&
      typeof result[key] === 'object' &&
      result[key] !== null &&
      !Array.isArray(result[key])
    ) {
      result[key] = { ...result[key], ...override[key] };
    } else {
      result[key] = override[key];
    }
  }
  return result;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const defaultMessages = (await import(`../../messages/${routing.defaultLocale}.json`)).default;

  const messages =
    locale !== routing.defaultLocale
      ? deepMerge(defaultMessages, (await import(`../../messages/${locale}.json`)).default)
      : defaultMessages;

  return {
    locale,
    messages,
  };
});
