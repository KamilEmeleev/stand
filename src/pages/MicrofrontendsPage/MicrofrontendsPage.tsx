import { lazy, Suspense } from 'react';

import { Button } from '@ozen-ui/kit/Button';
import { Card } from '@ozen-ui/kit/Card';
import { Stack } from '@ozen-ui/kit/Stack';
import { useTheme } from '@ozen-ui/kit/ThemeProvider';

import { dependencies } from '../../../package.json';
import { ErrorBoundary } from '../../components';

// eslint-disable-next-line import/no-unresolved
const RemoteApp = lazy(() => import('remoteApp/Share'));

export const MicrofrontendsPage = () => {
  const theme = useTheme();

  return (
    <Card borderWidth="none">
      <Stack gap="l" direction="column" align="start" fullWidth>
        <Button>v{dependencies['@ozen-ui/kit']?.replace('^', '')}</Button>
        <ErrorBoundary>
          <Suspense fallback={<div>Загрузка...</div>}>
            <RemoteApp theme={theme} />
          </Suspense>
        </ErrorBoundary>
      </Stack>
    </Card>
  );
};
