import { Link } from '@ozen-ui/kit/Link';
import { Button } from '@ozen-ui/kit/ButtonNext';
import { Autocomplete } from '@ozen-ui/kit/AutocompleteNext';
import { Alert } from '@ozen-ui/kit/Alert';
import { Divider } from '@ozen-ui/kit/Divider';
import { Link as WouterLink, Route, Router } from 'wouter';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { dependencies } from '../../package.json';

export const AppContent = () => {
  return (
    <Stack gap="xl" direction="column" fullWidth>
      <Link target="_blank" href="https://verdant-jelly-22f11b.netlify.app">
        Показать исходное приложение
      </Link>
      <Button>v{dependencies['@ozen-ui/kit'].replace('^', '')}</Button>
      <Autocomplete options={['one', 'two', 'three']} label="Autocomplete" />
      <Alert title="Уведомление">
        Рискуйте. Неудача — это лишь шаг на пути к успеху.
      </Alert>

      <Divider />

      <Router base="/microfrontends">
        <Stack gap="l" direction="column">
          <Typography>📁 Check up my routing:</Typography>
          <Stack gap="l">
            <WouterLink href="/page-1" asChild>
              <Link>Page-1</Link>
            </WouterLink>
            <WouterLink href="/page-2" asChild>
              <Link>Page-2</Link>
            </WouterLink>
            <WouterLink href="/page-3" asChild>
              <Link>Page-3</Link>
            </WouterLink>
          </Stack>
        </Stack>

        <Route path="/page-1">
          <Typography variant="text-m_1">Contents of page 1</Typography>
        </Route>
        <Route path="/page-2">
          <Typography variant="text-m_1">Contents of page 2</Typography>
        </Route>
        <Route path="/page-3">
          <Typography variant="text-m_1">Contents of page 3</Typography>
        </Route>
      </Router>
    </Stack>
  );
};
