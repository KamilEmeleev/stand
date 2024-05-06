import { useEffect } from 'react';

import { DarkIcon, LightIcon } from '@ozen-ui/icons';
import { FormTitle } from '@ozen-ui/kit/FormTitle';
import { Indicator } from '@ozen-ui/kit/Indicator';
import { Segment, SegmentItem } from '@ozen-ui/kit/Segment';
import { Stack } from '@ozen-ui/kit/Stack';
import { themeOzenDefault, ThemeProvider } from '@ozen-ui/kit/ThemeProvider';

import { useApp } from '../../AppContext.tsx';

export const Settings = () => {
  const { theme, setTheme, themeColorSchema, setThemeColorSchema } = useApp();

  const changeTheme = () => {
    document.body.classList.add('disable-animation');
    setTheme?.(theme === 'default' ? 'custom' : 'default');
  };

  const changeColorSchema = () => {
    document.body.classList.add('disable-animation');
    setThemeColorSchema?.(themeColorSchema === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove('disable-animation');
    }, 0);
  }, [theme, themeColorSchema]);

  return (
    <Stack direction="column" gap="xl" fullWidth>
      <Stack direction="column">
        <FormTitle>Тема</FormTitle>
        <Stack direction="column" gap="m">
          <Segment size="s" value={theme} onChange={changeTheme} fullWidth>
            <SegmentItem
              icon={() => (
                <ThemeProvider theme={themeOzenDefault}>
                  <Indicator />
                </ThemeProvider>
              )}
              value="default"
            >
              Default
            </SegmentItem>
            <SegmentItem
              icon={() => (
                <ThemeProvider theme={themeOzenDefault}>
                  <Indicator variant="info" />
                </ThemeProvider>
              )}
              value="custom"
            >
              Custom
            </SegmentItem>
          </Segment>
        </Stack>
      </Stack>
      <Stack direction="column">
        <FormTitle>Цветовая схема</FormTitle>
        <Stack direction="column" gap="m">
          <Segment
            size="s"
            value={themeColorSchema}
            onChange={changeColorSchema}
            fullWidth
          >
            <SegmentItem icon={LightIcon} value="light">
              Светлая
            </SegmentItem>
            <SegmentItem icon={DarkIcon} value="dark">
              Тёмная
            </SegmentItem>
          </Segment>
        </Stack>
      </Stack>
    </Stack>
  );
};
