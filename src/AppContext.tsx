import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';

import { enUS, kkKZ, ruRU } from '@ozen-ui/kit/locale';
import { SnackbarProvider } from '@ozen-ui/kit/Snackbar';
import {
  themeOzenDark,
  themeOzenDefault,
  themeBBusinessDark,
  themeBBusinessDefault,
  themeVipDark,
  themeVipDefault,
  ThemeProvider,
  extendTheme,
} from '@ozen-ui/kit/ThemeProvider';
import { useAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';
import { useLocation } from 'wouter';

import s from './App.module.css';
import {
  Actions,
  ActionScrollTop,
  ActionSettings,
  Cookies,
} from './components';
import { LoginPage, LogoutPage } from './pages';
import { type AppSettings, loggedInAtom, settingsAtom } from './store.ts';

const locales = {
  en: enUS,
  ru: ruRU,
  kz: kkKZ,
};

const themes = {
  theme1: {
    light: themeOzenDefault,
    dark: themeOzenDark,
  },
  theme2: {
    light: themeBBusinessDefault,
    dark: themeBBusinessDark,
  },
  theme3: {
    light: themeVipDefault,
    dark: themeVipDark,
  },
};

export type App = {
  scrollContainerEl?: HTMLElement | null;
  setScrollContainerEl?: Dispatch<SetStateAction<HTMLElement | null>>;
  login?: () => void;
  logout?: () => void;
};

export const AppContext = createContext<App>({});

export const useApp = () => {
  return useContext(AppContext);
};

export const useThemeSwitcher = (): [
  AppSettings,
  (params: Partial<AppSettings>) => void,
  () => void,
] => {
  const [settings, setSettings] = useAtom(settingsAtom);
  const resetSettings = useResetAtom(settingsAtom);

  const switchTheme = (prop: Partial<AppSettings>) => {
    document.body.classList.add('disable-animation');

    setSettings((prev) => {
      return { ...prev, ...prop };
    });
  };

  const reset = () => {
    document.body.classList.add('disable-animation');
    resetSettings();
  };

  useEffect(() => {
    setTimeout(() => document.body.classList.remove('disable-animation'));
  }, [settings]);

  return [settings, switchTheme, reset];
};

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useAtom(loggedInAtom);
  const [settings] = useThemeSwitcher();

  const [scrollContainerEl, setScrollContainerEl] =
    useState<HTMLElement | null>(null);

  const [pathname] = useLocation();

  useEffect(() => {
    scrollContainerEl?.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, scrollContainerEl]);

  const [location] = useLocation();

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
  };

  const renderContent = () => {
    if (!loggedIn) {
      return <LoginPage />;
    }

    if (location === '/logout') {
      return <LogoutPage />;
    }

    return children;
  };

  const customTheme = useMemo(() => {
    const { theme, colorSchema, locale } = settings;

    return extendTheme(themes[theme][colorSchema], locales[locale]);
  }, [settings]);

  return (
    <ThemeProvider theme={customTheme} className={s.app}>
      <SnackbarProvider
        lifetime={10000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <AppContext.Provider
          value={{
            login,
            logout,
            scrollContainerEl,
            setScrollContainerEl,
          }}
        >
          {renderContent()}
          <Cookies disabled />
          <Actions>
            <ActionScrollTop />
            <ActionSettings />
          </Actions>
        </AppContext.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
