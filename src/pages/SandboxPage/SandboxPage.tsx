import { useMemo } from 'react';

import { BanIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/Button';
import { FilePicker } from '@ozen-ui/kit/FilePicker';
import { enUS } from '@ozen-ui/kit/locale';
import { Stack } from '@ozen-ui/kit/Stack';
import {
  extendTheme,
  themeOzenDefault,
  ThemeProvider,
} from '@ozen-ui/kit/ThemeProvider';
import { Tooltip } from '@ozen-ui/kit/Tooltip';
import { Typography } from '@ozen-ui/kit/Typography';

export const SandboxPage = () => {
  const customTheme = useMemo(() => {
    const themeWithLocale = extendTheme(themeOzenDefault, enUS);

    return extendTheme(themeWithLocale, {
      defaultProps: { Button: { size: 's', variant: 'outlined' } },
    });
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <Stack gap="l" direction="column" align="start">
        <Typography variant="text-l_1">Custom theme</Typography>
        <Button
          iconLeft={() => (
            <Tooltip label="test">
              <BanIcon />
            </Tooltip>
          )}
        >
          Btn
        </Button>
        <FilePicker />
      </Stack>
    </ThemeProvider>
  );
};
