import { BanIcon } from '@ozen-ui/icons';
import { Button } from '@ozen-ui/kit/Button';
import { Calendar } from '@ozen-ui/kit/Calendar';
import { Paper } from '@ozen-ui/kit/Paper';
import { Stack } from '@ozen-ui/kit/Stack';
import {
  extendTheme,
  themeOzenDefault,
  ThemeProvider,
} from '@ozen-ui/kit/ThemeProvider';
import { Tooltip } from '@ozen-ui/kit/Tooltip';

export const SandboxPage = () => {
  return (
    <Stack gap="l">
      <Button
        iconLeft={() => (
          <Tooltip label="test">
            <BanIcon />
          </Tooltip>
        )}
      >
        Btn
      </Button>
      <Calendar background="main" as={Paper} radius="s" shadow="m" />
      <ThemeProvider
        theme={extendTheme(themeOzenDefault, {
          defaultProps: { Button: { size: 's', variant: 'outlined' } },
        })}
      >
        <Button
          iconLeft={() => (
            <Tooltip label="test">
              <BanIcon />
            </Tooltip>
          )}
        >
          Btn
        </Button>
      </ThemeProvider>
    </Stack>
  );
};
