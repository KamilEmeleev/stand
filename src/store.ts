import { atomWithStorage, createJSONStorage } from 'jotai/utils';

export type ThemeColorSchema = 'light' | 'dark';
export type Themes = 'theme1' | 'theme2' | 'theme3';
export type ThemeLocale = 'en' | 'ru' | 'kz';

const storage = createJSONStorage<boolean>(() => sessionStorage);

export type AppSettings = {
  theme: Themes;
  colorSchema: ThemeColorSchema;
  locale: ThemeLocale;
};

export const settingsAtom = atomWithStorage<AppSettings>(
  'settings',
  { theme: 'theme1', locale: 'ru', colorSchema: 'light' },
  undefined,
  {
    getOnInit: true,
  }
);

export const loggedInAtom = atomWithStorage<boolean>(
  'loggedIn',
  false,
  storage,
  {
    getOnInit: true,
  }
);
