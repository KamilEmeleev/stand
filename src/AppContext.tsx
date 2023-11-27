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
  ThemeProvider,
} from '@ozen-ui/kit/ThemeProvider';
import { useLocation } from 'wouter';

import s from './App.module.css';
import { LoginPage, LogoutPage } from './pages';

export type App = {
  theme?: Themes;
  setTheme?: Dispatch<SetStateAction<Themes>>;
  login?: () => void;
  logout?: () => void;
};

export type Themes = 'default' | 'dark';

export const AppContext = createContext<App>({});

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [location] = useLocation();

  const themes: { [key in Themes]: Theme } = {
    default: themeOzenDefault,
    dark: themeOzenDark,
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

  return (
    <ThemeProvider theme={themes[theme]} className={s.app}>
      <SnackbarProvider
        lifetime={10000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <AppContext.Provider value={{ theme, setTheme, login, logout }}>
          {renderContent()}
        </AppContext.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
