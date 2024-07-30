import { parse } from 'regexparam';

export const isSelectedItem = (
  link: string | undefined,
  location: string | undefined
): boolean => {
  if (!link || !location) {
    return false;
  }

  return parse(link, link !== '/').pattern.test(location);
};
