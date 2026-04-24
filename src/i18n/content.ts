import nl from './nl.json';
import en from './en.json';
import type { Locale } from './routes';

export function getContent(locale: Locale) {
  return locale === 'en' ? en : nl;
}

export type Content = typeof nl;
