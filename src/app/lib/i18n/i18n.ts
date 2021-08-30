import de from './de.json';

const DEFAULT_LOCALE = 'en';
type Dict = {
  locale: string;
  title: string;
  dict: { [key: string]: string };
};
export const dicts: Dict[] = [
  {
    locale: 'en',
    title: 'English',
    dict: {},
  },
  {
    locale: 'de',
    title: 'Deutsch',
    dict: de,
  },
];
export let dict: Dict;
setDict(getLocale());

export function i18n(text: string): string {
  return dict.dict[text] || text;
}

export function setDict(locale: string): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('locale', locale);
    dict =
      dicts.find((dict) => dict.locale === locale) ||
      dicts.find((dict) => dict.locale === DEFAULT_LOCALE);
  }
}

export function getLocale(): string {
  return localStorage.getItem('locale') || DEFAULT_LOCALE;
}
