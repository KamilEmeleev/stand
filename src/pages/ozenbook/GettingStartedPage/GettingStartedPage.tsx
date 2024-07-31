import { Card } from '@ozen-ui/kit/Card';
import { Stack } from '@ozen-ui/kit/Stack';
import { Typography } from '@ozen-ui/kit/Typography';
import { dedent } from 'ts-dedent';

import { Code, InstallPackage } from '../../../ozenbook';

const start = dedent`
  import { ThemeProvider, themeOzenDefault } from '@ozen-ui/kit/ThemeProvider';
  import { Typography } from '@ozen-ui/kit/Typography';

  export default function App() {
    return (
      <ThemeProvider theme={themeOzenDefault}>
        <Typography>Привет, Мир!</Typography>
      </ThemeProvider>
    );
  }
`;

export const GettingStartedPage = () => {
  return (
    <Card as={Stack} borderWidth="none" direction="column" gap="2xl" fullWidth>
      <InstallPackage
        name="@ozen-ui/kit"
        title="Установите библиотеку компонентов с помощью одной из следующих команд:"
      />
      <Stack direction="column" gap="l" fullWidth>
        <Typography variant="heading-xl">Применение</Typography>
        <Code code={start} />
      </Stack>
    </Card>
  );
};
