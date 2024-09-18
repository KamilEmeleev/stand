import { type Theme } from '@ozen-ui/kit/ThemeProvider';

import { AppContent, RemoteProvider } from '../components';

const Share = ({ theme }: { theme: Theme }) => {
  return (
    <RemoteProvider theme={theme}>
      <AppContent />
    </RemoteProvider>
  );
};

export default Share;
