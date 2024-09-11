/// <reference types="vite/client" />
declare module 'remoteApp/Share' {
  import { ReactNode } from 'react';

  import type { Theme } from '@ozen-ui/kit/ThemeProvider';
  const App: ({ theme }: { theme?: Theme }) => ReactNode;
  export default App;
}
