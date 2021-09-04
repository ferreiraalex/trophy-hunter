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
  dict = dicts.find((dict) => dict.locale === locale);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('locale', locale);
  }
}

export function getLocale(): string {
  if (typeof localStorage === 'undefined') {
    return DEFAULT_LOCALE;
  }
  return localStorage.getItem('locale') || DEFAULT_LOCALE;
}
