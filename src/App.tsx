import { BerekeIcon } from '@ozen-ui/icons';
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
} from './components';
import { use1vh } from './hooks/use1vh';

function App() {
  use1vh();

  return (
    <AppProvider>
      <AppBarProvider>
        <AppBar>
          <AppBarHeader>
            <AppBarHeaderLogo>
              <BerekeIcon />
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
      </AppBarProvider>
    </AppProvider>
  );
}

export default App;
