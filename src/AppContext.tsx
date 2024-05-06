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

import { SnackbarProvider } from '@ozen-ui/kit/Snackbar';
import {
  type Theme,
  themeOzenDark,
  themeOzenDefault,
  themeBBusinessDark,
  themeBBusinessDefault,
  ThemeProvider,
} from '@ozen-ui/kit/ThemeProvider';
import { useLocation } from 'wouter';

import s from './App.module.css';
import { Actions, ActionSettings, Cookies } from './components';
import { LoginPage, LogoutPage } from './pages';

export type ThemeColorSchema = 'light' | 'dark';

export type App = {
  theme?: Themes;
  setTheme?: Dispatch<SetStateAction<Themes>>;
  themeColorSchema?: ThemeColorSchema;
  setThemeColorSchema?: Dispatch<SetStateAction<ThemeColorSchema>>;
  login?: () => void;
  logout?: () => void;
};

export type Themes = 'default' | 'custom';

export const AppContext = createContext<App>({});

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [location] = useLocation();

  const themes: { [key in Themes]: { [key in ThemeColorSchema]: Theme } } = {
    default: {
      light: themeOzenDefault,
      dark: themeOzenDark,
    },
    custom: {
      light: themeBBusinessDefault,
      dark: themeBBusinessDark,
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

  const [theme, setTheme] = useState<Themes>('default');

  const [themeColorSchema, setThemeColorSchema] =
    useState<ThemeColorSchema>('light');

  return (
    <ThemeProvider theme={themes[theme][themeColorSchema]} className={s.app}>
      <SnackbarProvider
        lifetime={10000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <AppContext.Provider
          value={{
            theme,
            login,
            logout,
            setTheme,
            themeColorSchema,
            setThemeColorSchema,
          }}
        >
          {renderContent()}
          <Cookies disabled />
          <Actions>
            <ActionSettings />
          </Actions>
        </AppContext.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
