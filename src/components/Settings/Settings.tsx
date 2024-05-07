import { useEffect } from 'react';

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

import { ThemeLocale, useApp } from '../../AppContext.tsx';

export const Settings = () => {
  const { settings } = useApp();

  const {
    state: { theme, themeColorSchema, locale },
    set,
  } = settings;

  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove('disable-animation');
    }, 0);
  }, [theme, themeColorSchema]);

  const changeTheme = () => {
    document.body.classList.add('disable-animation');

    set?.((prevState) => {
      return {
        ...prevState,
        theme: theme === 'default' ? 'custom' : 'default',
      };
    });
  };

  const changeColorSchema = () => {
    document.body.classList.add('disable-animation');

    set?.((prevState) => {
      return {
        ...prevState,
        themeColorSchema: themeColorSchema === 'light' ? 'dark' : 'light',
      };
    });
  };

  const changeLocale: SegmentProps['onChange'] = (event) => {
    set?.((prevState) => {
      return {
        ...prevState,
        locale: event.target.value as ThemeLocale,
      };
    });
  };

  return (
    <Stack direction="column" gap="xl" fullWidth>
      <Stack direction="column">
        <FormTitle>Тема</FormTitle>
        <Stack direction="column" gap="m">
          <Segment value={theme} onChange={changeTheme} fullWidth>
            <SegmentItem
              icon={() => (
                <ThemeProvider theme={themeOzenDefault}>
                  <Indicator />
                </ThemeProvider>
              )}
              value="default"
            >
              Базовая
            </SegmentItem>
            <SegmentItem
              icon={() => (
                <ThemeProvider theme={themeOzenDefault}>
                  <Indicator variant="info" />
                </ThemeProvider>
              )}
              value="custom"
            >
              Кастомная
            </SegmentItem>
          </Segment>
        </Stack>
      </Stack>
      <Stack direction="column">
        <FormTitle>Цветовая схема</FormTitle>
        <Stack direction="column" gap="m">
          <Segment
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
      <Stack direction="column">
        <FormTitle>Локализация компонентов</FormTitle>
        <Stack direction="column" gap="m">
          <Segment value={locale} onChange={changeLocale} fullWidth>
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
