import { Divider } from '@ozen-ui/kit/Divider';

import { AppProvider } from './AppContext.tsx';
import {
  Profile,
  AppBar,
  AppBarHeader,
  AppBarBody,
  AppBarFooter,
  AppBarHeaderTitle,
  AppBarHeaderLogo,
  Navigation,
  Content,
  AppBarProvider,
  Cookies,
} from './components';
import { BerekeLogo } from './icons';

function App() {
  return (
    <AppProvider>
      <AppBarProvider>
        <AppBar>
          <AppBarHeader>
            <AppBarHeaderLogo>
              <BerekeLogo />
            </AppBarHeaderLogo>
            <AppBarHeaderTitle>Bereke Bank</AppBarHeaderTitle>
          </AppBarHeader>
          <Divider />
          <AppBarBody>
            <Navigation />
          </AppBarBody>
          <Divider />
          <AppBarFooter>
            <Profile />
          </AppBarFooter>
        </AppBar>
        <Content />
        <Cookies disabled />
      </AppBarProvider>
    </AppProvider>
  );
}

export default App;
