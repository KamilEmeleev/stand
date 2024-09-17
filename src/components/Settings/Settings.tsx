import type { ChangeEvent } from 'react';

import {
  DarkIcon,
  FlagKzIcon,
  FlagRuIcon,
  FlagUsIcon,
  LightIcon,
} from '@ozen-ui/icons';
import { FormTitle } from '@ozen-ui/kit/FormTitle';
import { Indicator } from '@ozen-ui/kit/Indicator';
import { Segment, SegmentItem, type SegmentProps } from '@ozen-ui/kit/Segment';
import { Stack } from '@ozen-ui/kit/Stack';
import { themeOzenDefault, ThemeProvider } from '@ozen-ui/kit/ThemeProvider';

import { useThemeSwitcher } from '../../AppContext.tsx';
import type { ThemeColorSchema, ThemeLocale, Themes } from '../../store.ts';

export const Settings = () => {
  const [settings, switchTheme] = useThemeSwitcher();

  const changeTheme = (e: ChangeEvent<HTMLInputElement>) => {
    switchTheme({ theme: e.target.value as Themes });
  };

  const changeColorSchema = (e: ChangeEvent<HTMLInputElement>) => {
    switchTheme({ colorSchema: e.target.value as ThemeColorSchema });
  };

  const changeLocale: SegmentProps['onChange'] = (e) => {
    switchTheme({ locale: e.target.value as ThemeLocale });
  };

  return (
    <Stack direction="column" gap="xl" fullWidth>
      <Stack direction="column">
        <FormTitle>Тема</FormTitle>
        <Stack direction="column" gap="m">
          <Segment value={settings.theme} onChange={changeTheme} fullWidth>
            <SegmentItem
              icon={() => (
                <ThemeProvider theme={themeOzenDefault}>
                  <Indicator />
                </ThemeProvider>
              )}
              value="theme1"
            >
              Тема 1
            </SegmentItem>
            <SegmentItem
              icon={() => (
                <ThemeProvider theme={themeOzenDefault}>
                  <Indicator variant="info" />
                </ThemeProvider>
              )}
              value="theme2"
            >
              Тема 2
            </SegmentItem>

            <SegmentItem
              icon={() => (
                <ThemeProvider theme={themeOzenDefault}>
                  <Indicator variant="warning" />
                </ThemeProvider>
              )}
              value="theme3"
            >
              Тема 3
            </SegmentItem>
          </Segment>
        </Stack>
      </Stack>
      <Stack direction="column">
        <FormTitle>Цветовая схема</FormTitle>
        <Stack direction="column" gap="m">
          <Segment
            value={settings.colorSchema}
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
      <Stack direction="column">
        <FormTitle>Локализация компонентов</FormTitle>
        <Stack direction="column" gap="m">
          <Segment value={settings.locale} onChange={changeLocale} fullWidth>
            <SegmentItem icon={() => <FlagRuIcon width={24} />} value="ru">
              Рус
            </SegmentItem>
            <SegmentItem icon={() => <FlagKzIcon width={24} />} value="kz">
              Қаз
            </SegmentItem>
            <SegmentItem icon={() => <FlagUsIcon width={24} />} value="en">
              Eng
            </SegmentItem>
          </Segment>
        </Stack>
      </Stack>
    </Stack>
  );
};
