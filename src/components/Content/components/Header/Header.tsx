import { useRef, useEffect } from 'react';

import { AlertOnIcon, DarkIcon, LightIcon } from '@ozen-ui/icons';
import { Badge } from '@ozen-ui/kit/Badge';
import { Container } from '@ozen-ui/kit/Container';
import { IconButton } from '@ozen-ui/kit/IconButton';
import { spacing } from '@ozen-ui/kit/MixSpacing';
import { Stack } from '@ozen-ui/kit/Stack';
import { useBoolean } from '@ozen-ui/kit/useBoolean';
import clsx from 'clsx';

import { useApp } from '../../../../AppContext.tsx';
import { BurgerMenu } from '../../../BurgerMenu';
import Notifications from '../../../Notifications/Notifications.tsx';
import { Search } from '../../../Search';

import s from './Header.module.css';

export const Header = () => {
  const notificationRef = useRef<HTMLButtonElement | null>(null);
  const [open, { toggle, off }] = useBoolean(false);
  const { theme, setTheme } = useApp();

  const changeTheme = () => {
    document.body.classList.add('disable-animation');
    setTheme?.(theme === 'default' ? 'dark' : 'default');
  };

  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove('disable-animation');
    }, 0);
  }, [theme]);

  return (
    <Container
      as="header"
      maxWidth="fullWidth"
      gutters={{ xs: 'm', m: '2xl' }}
      className={clsx(s.header, spacing({ mb: 'l' }))}
    >
      <Stack
        align="center"
        justify="spaceBetween"
        className={s.headerContent}
        fullWidth
      >
        <Stack gap="s">
          <BurgerMenu />
          <Search />
        </Stack>
        <Stack gap="s" align="center">
          <IconButton
            variant="ghost"
            icon={theme === 'default' ? DarkIcon : LightIcon}
            onClick={changeTheme}
            compressed
          />
          <IconButton
            variant="ghost"
            icon={
              <Badge content="3" variant="dot" color="errorDark" size="s">
                <AlertOnIcon />
              </Badge>
            }
            ref={notificationRef}
            onClick={toggle}
            compressed
          />
        </Stack>
        <Notifications open={open} onClose={off} />
      </Stack>
    </Container>
  );
};
