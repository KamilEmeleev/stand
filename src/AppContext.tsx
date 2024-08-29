import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  useLayoutEffect,
} from 'react';

import { enUS, kkKZ, ruRU } from '@ozen-ui/kit/locale';
import { SnackbarProvider } from '@ozen-ui/kit/Snackbar';
import {
  type Theme,
  themeOzenDark,
  themeOzenDefault,
  themeBBusinessDark,
  themeBBusinessDefault,
  themeVipDark,
  themeVipDefault,
  ThemeProvider,
  extendTheme,
} from '@ozen-ui/kit/ThemeProvider';
import { useLocation } from 'wouter';

import s from './App.module.css';
import {
  Actions,
  ActionScrollTop,
  ActionSettings,
  Cookies,
} from './components';
import { LoginPage, LogoutPage } from './pages';

export type ThemeColorSchema = 'light' | 'dark';
export type Themes = 'theme1' | 'theme2' | 'theme3';
export type ThemeLocale = 'en' | 'ru' | 'kz';

const locales = {
  en: enUS,
  ru: ruRU,
  kz: kkKZ,
};

export type AppSettings = {
  theme: Themes;
  themeColorSchema: ThemeColorSchema;
  locale: ThemeLocale;
};

const initialStateSettings: AppSettings = {
  theme: 'theme1',
  themeColorSchema: 'light',
  locale: 'ru',
};

export type App = {
  settings: {
    state: AppSettings;
    set?: Dispatch<SetStateAction<AppSettings>>;
    reset?: () => void;
  };
  scrollContainerEl?: HTMLElement | null;
  setScrollContainerEl?: Dispatch<SetStateAction<HTMLElement | null>>;
  login?: () => void;
  logout?: () => void;
};

export const AppContext = createContext<App>({
  settings: { state: initialStateSettings },
});

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const [scrollContainerEl, setScrollContainerEl] =
    useState<HTMLElement | null>(null);

  const [location] = useLocation();

  const themes: { [key in Themes]: { [key in ThemeColorSchema]: Theme } } = {
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

  useLayoutEffect(() => {
    const loggedIn = sessionStorage.getItem('loggedIn');

    if (loggedIn) {
      setIsLogin(true);
    }
  }, []);

  const login = () => {
    sessionStorage.setItem('loggedIn', 'true');
    setIsLogin(true);
  };

  const logout = () => {
    sessionStorage.setItem('loggedIn', '');
    setIsLogin(false);
  };

  const renderContent = () => {
    if (!isLogin) {
      return <LoginPage />;
    }

    if (location === '/logout') {
      return <LogoutPage />;
    }

    return children;
  };

  const [settings, setSettings] = useState(initialStateSettings);

  return (
    <ThemeProvider
      theme={extendTheme(
        themes[settings.theme][settings.themeColorSchema],
        locales[settings.locale]
      )}
      className={s.app}
    >
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
            settings: {
              state: settings,
              set: setSettings,
              reset: () => setSettings(initialStateSettings),
            },
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
